const PATHS = {
  wave: 'M -5 120 C 180 120, 230 40, 420 55 C 600 70, 660 150, 850 110 C 930 93, 970 110, 1005 100',
  loop: 'M -5 150 C 150 150, 210 60, 360 60 C 470 60, 485 135, 430 150 C 388 162, 350 110, 415 88 C 520 53, 640 150, 820 120 C 910 105, 960 125, 1005 108',
  rise: 'M -5 175 C 220 175, 300 60, 520 60 C 720 60, 800 30, 1005 25',
  dip:  'M -5 40 C 220 40, 300 165, 520 165 C 740 165, 820 150, 1005 150',
};

interface GrowingLineProps {
  variant?: keyof typeof PATHS;
  height?: number;
  style?: React.CSSProperties;
}

export function GrowingLine({ variant = 'wave', height = 120, style }: GrowingLineProps) {
  return (
    <svg
      className="ino-growline"
      viewBox="0 0 1000 200"
      preserveAspectRatio="none"
      style={{ display: 'block', width: '100%', height, ...style }}
      aria-hidden="true"
    >
      <path
        className="ino-line__path ino-line__path--flow"
        d={PATHS[variant]}
        style={{ strokeWidth: 2.5 }}
      />
    </svg>
  );
}
