// QARM Support Plan Form Handler
// Deploy this as a Cloudflare Worker (free tier — no card required, 100k requests/day).
// It receives the JSON POST from GetStartedModal.tsx and sends the email via Resend.
//
// SETUP:
// 1. Sign up free at https://resend.com and get an API key.
//    Free tier is enough to start (100 emails/day) using their shared sending
//    domain (onboarding@resend.dev). For better deliverability later, verify
//    theqarm.com in Resend's dashboard and swap the "from" address below.
// 2. Sign up free at https://dash.cloudflare.com -> Workers & Pages -> Create Worker.
// 3. Paste this file's contents in as the Worker's code.
// 4. In the Worker's Settings -> Variables, add an encrypted secret:
//      RESEND_API_KEY = <your Resend API key>
// 5. Deploy. Cloudflare gives you a URL like:
//      https://qarm-form-handler.<your-subdomain>.workers.dev
//    Put that URL into FORM_ENDPOINT in src/components/GetStartedModal.tsx.
// 6. If your domain later moves onto Cloudflare, you can route this at
//    form.theqarm.com instead of the workers.dev URL — optional, not required.

const ALLOWED_ORIGIN = 'https://theqarm.com';

export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return json({ error: 'Method not allowed' }, 405, corsHeaders);
    }

    let data;
    try {
      data = await request.json();
    } catch {
      return json({ error: 'Invalid JSON' }, 400, corsHeaders);
    }

    // Honeypot: the form includes a hidden "website" field real visitors never
    // fill in. If it's populated, silently accept without sending an email.
    if (data.website) {
      return json({ ok: true }, 200, corsHeaders);
    }

    if (!data.name || !data.email || !data.phone) {
      return json({ error: 'Missing required fields' }, 400, corsHeaders);
    }

    const emailBody = `New QARM Support Plan Request

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Region: ${data.region || '—'}
Industry: ${data.industry || '—'}
Role: ${data.role || '—'}
Monthly Volume: ${data.monthlyVolume || '—'}
Support Needed: ${data.supportNeeded || '—'}
Preferred Capacity: ${data.preferredCapacity || '—'}
Challenge: ${data.challenge || '—'}
Preferred Next Step: ${data.preferredNextStep || '—'}`;

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'QARM Website <onboarding@resend.dev>', // swap for a verified @theqarm.com sender once DNS is set up in Resend
        to: ['info@theqarm.com'],
        reply_to: data.email,
        subject: `QARM Support Plan Request — ${data.name}`,
        text: emailBody,
      }),
    });

    if (!resendRes.ok) {
      const detail = await resendRes.text();
      return json({ error: 'Email send failed', detail }, 502, corsHeaders);
    }

    return json({ ok: true }, 200, corsHeaders);
  },
};

function json(body, status, headers) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...headers },
  });
}
