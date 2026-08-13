export const QarmLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <img
    src="/qarm-logo.webp"
    alt="QARM Logo"
    width={128}
    height={128}
    className={className}
    style={{ objectFit: 'contain' }}
  />
);
