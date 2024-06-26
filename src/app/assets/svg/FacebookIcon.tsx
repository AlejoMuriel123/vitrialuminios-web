interface IconsProps {
  width?: string;
  height?: string;
  color?: string;
}

export const FacebookIcon = (props: IconsProps) => {
  const { width = 20, height = 20 } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      className="fill-current text-gray-400 hover:text-[#63a5d4] transition-colors duration-300"
    >
      <path d="M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V7.05c0-1.05.28-1.73 1.76-1.73" />
    </svg>
  );
};
