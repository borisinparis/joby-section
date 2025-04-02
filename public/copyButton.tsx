import * as React from "react";
const CopyButton: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={21}
    fill="none"
    {...props}
  >
    <path
      stroke="#DB165B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M15.132 7.499c.594.394.986 1.069.986 1.835v7.113a3 3 0 0 1-3 3H9.192a1.99 1.99 0 0 1-1.575-.773m-2.925-3.332h4.254a3 3 0 0 0 3-3V4.553a3 3 0 0 0-3-3H4.692a3 3 0 0 0-3 3v7.789a3 3 0 0 0 3 3Z"
    />
  </svg>
);
export default CopyButton;
