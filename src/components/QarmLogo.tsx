export const QarmLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <img
    src="/qarm-logo.png"
    alt="QARM Logo"
    className={className}
    style={{ objectFit: 'contain' }}
  />
);
