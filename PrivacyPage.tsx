@import "tailwindcss";

@theme {
  --font-sans: "DM Sans", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Space Grotesk", ui-sans-serif, system-ui, sans-serif;
  --font-body: "Inter", ui-sans-serif, system-ui, sans-serif;

  /* QARM Dark Navy Brand Palette */
  --color-qarm-950: #050810;
  --color-qarm-900: #0a0f1e;
  --color-qarm-850: #0f1628;
  --color-qarm-800: #141d35;
  --color-qarm-700: #1c2a4a;
  --color-qarm-600: #1e3a8a;
  --color-qarm-500: #2d5bb5;
  --color-qarm-400: #4d7fd4;
  --color-qarm-300: #7aa3e5;
  --color-qarm-200: #b4ccf0;
  --color-qarm-100: #dce8f9;

  /* Accent Orange */
  --color-accent-600: #c2410c;
  --color-accent-500: #ea580c;
  --color-accent-400: #f97316;
  --color-accent-300: #fb923c;
  --color-accent-100: #ffedd5;

  /* Neutral */
  --color-surface-800: #111827;
  --color-surface-700: #1f2937;
  --color-surface-600: #374151;
  --color-surface-400: #6b7280;
  --color-surface-200: #e5e7eb;
  --color-surface-100: #f3f4f6;
  --color-surface-50: #f9fafb;
}

@layer base {
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply font-sans antialiased;
    background-color: #0a0f1e;
    color: #e2e8f0;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-display tracking-tight;
  }

  ::selection {
    background: rgba(45, 91, 181, 0.4);
    color: #fff;
  }

  :focus-visible {
    outline: 2px solid #4d7fd4;
    outline-offset: 2px;
  }
}

/* Gradient text utility */
.text-gradient {
  background: linear-gradient(135deg, #7aa3e5 0%, #4d7fd4 50%, #f97316 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-gradient-blue {
  background: linear-gradient(135deg, #b4ccf0 0%, #7aa3e5 60%, #4d7fd4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Grid dot background */
.bg-grid {
  background-image: radial-gradient(circle, rgba(45, 91, 181, 0.15) 1px, transparent 1px);
  background-size: 32px 32px;
}

/* Glow effects */
.glow-blue {
  box-shadow: 0 0 60px rgba(45, 91, 181, 0.2), 0 0 120px rgba(45, 91, 181, 0.08);
}

.glow-orange {
  box-shadow: 0 0 40px rgba(249, 115, 22, 0.25);
}

/* Card glass effect */
.glass-card {
  background: rgba(20, 29, 53, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(45, 91, 181, 0.2);
}

.glass-card-light {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

/* Horizontal rule */
.hr-brand {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(45, 91, 181, 0.4), transparent);
  border: none;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #0a0f1e;
}
::-webkit-scrollbar-thumb {
  background: #1c2a4a;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: #2d5bb5;
}

/* Animations */
@keyframes pulse-ring {
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(1.5); opacity: 0; }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-slide-up {
  animation: slide-up 0.5s ease-out forwards;
}
