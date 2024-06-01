interface IconsProps {
  width?: string;
  height?: string;
  color?: string;
}

export const TwitterIcon = (props: IconsProps) => {
  const { width = 20, height = 20 } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 256 256"
      className="fill-current text-gray-400 hover:text-[#63a5d4] transition-colors duration-300"
    >
      <path d="m214.75 211.71l-62.6-98.38l61.77-67.95a8 8 0 0 0-11.84-10.76l-58.84 64.72l-40.49-63.63A8 8 0 0 0 96 32H48a8 8 0 0 0-6.75 12.3l62.6 98.37l-61.77 68a8 8 0 1 0 11.84 10.76l58.84-64.72l40.49 63.63A8 8 0 0 0 160 224h48a8 8 0 0 0 6.75-12.29M164.39 208L62.57 48h29l101.86 160Z" />
    </svg>
  );
};
