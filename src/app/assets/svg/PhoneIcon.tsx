interface IconsProps {
  width?: string;
  height?: string;
  color?: string;
}

export const PhoneIcon = (props: IconsProps) => {
  const { width = 60, height = 60, color = "#63a5d4" } = props;
  return (
    <svg width={width} height={height} viewBox="0 0 24 24">
      <path
        fill={color}
        d="M10.616 19.654h2.769q.161 0 .273-.112t.111-.273t-.111-.273q-.112-.111-.273-.111h-2.77q-.161 0-.273.111q-.111.112-.111.273t.111.273t.273.112m-3 2.346q-.69 0-1.152-.462T6 20.385V3.615q0-.69.463-1.152T7.616 2h8.769q.69 0 1.152.463T18 3.616v16.769q0 .69-.462 1.153T16.384 22zM7 17.538v2.846q0 .231.192.424t.423.192h8.77q.23 0 .423-.192t.192-.424v-2.846zm0-1h10V5.5H7zM7 4.5h10v-.885q0-.23-.192-.423T16.384 3H7.616q-.231 0-.424.192T7 3.616zm0 13.039V21zM7 4.5V3z"
      />
    </svg>
  );
};
