interface IconsProps {
  width?: string;
  height?: string;
  color?: string;
}

export const MailIcon = (props: IconsProps) => {
  const { width = 60, height = 60, color = "#63a5d4" } = props;
  return (
    <svg
    width={width} height={height}
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM12 12.116L4 6.885v10.5q0 .269.173.442t.443.173h14.769q.269 0 .442-.173t.173-.443v-10.5zM12 11l7.692-5H4.308zM4 6.885V6v11.385q0 .269.173.442t.443.173H4z"
      />
    </svg>
  );
};
