import * as React from "react";
const VectorSvgLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={6}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill="white"
      d="M1.778.467A.75.75 0 0 0 .722 1.533L2.485 3.28c.716.71 1.206 1.197 1.538 1.61.323.402.434.66.463.892.019.145.019.291 0 .436-.03.232-.14.49-.463.891-.332.414-.822.902-1.538 1.611L.722 10.467a.75.75 0 0 0 1.056 1.066l1.795-1.78c.676-.669 1.228-1.217 1.62-1.704.407-.508.702-1.023.781-1.64a3.228 3.228 0 0 0 0-.817c-.079-.618-.374-1.133-.781-1.64-.392-.488-.944-1.036-1.62-1.706L1.778.467Z"
    />
  </svg>
);
export default VectorSvgLogo;
