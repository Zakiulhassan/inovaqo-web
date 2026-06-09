const PALETTE = ['#10D5C8', '#0C9389', '#9AAF97', '#526162', '#14A085'];

interface AvatarProps {
  name?: string;
  status?: 'online' | 'busy';
}

export function Avatar({ name = '', status }: AvatarProps) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
  const bg = PALETTE[(name.charCodeAt(0) || 0) % PALETTE.length];

  return (
    <span className="ino-avatar" style={{ background: bg }}>
      {initials || '?'}
      {status && <span className={`ino-avatar__status ino-avatar__status--${status}`} />}
    </span>
  );
}
