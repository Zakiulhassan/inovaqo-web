type BadgeVariant = 'soft' | 'solid' | 'outline';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ children, variant = 'soft', className = '' }: BadgeProps) {
  return (
    <span className={['ino-badge', `ino-badge--${variant}`, className].filter(Boolean).join(' ')}>
      {children}
    </span>
  );
}
