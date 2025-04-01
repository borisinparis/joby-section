import * as React from "react";
const SearchSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <path
      fill="#3C3C3C"
      fillRule="evenodd"
      stroke="#3C3C3C"
      strokeLinecap="round"
      d="M7.708.833a6.875 6.875 0 1 0 4.4 12.159l4.742 4.742a.625.625 0 0 0 .883-.884l-4.742-4.742A6.875 6.875 0 0 0 7.708.834ZM2.083 7.708a5.625 5.625 0 1 1 11.25 0 5.625 5.625 0 0 1-11.25 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SearchSvg;
