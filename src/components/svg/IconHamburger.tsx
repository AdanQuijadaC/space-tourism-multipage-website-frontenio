export default function IconHamburger({ colorFill = "#D0D6F9", width = "24", height = "21" }) {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 21">
        <g fill={colorFill} fillRule="evenodd">
          <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
        </g>
      </svg>
    </>
  );
}
