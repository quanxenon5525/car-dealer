import { SVGProps } from "react";

export function LinkInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="26"
      viewBox="0 0 48 48"
    >
      <g fill="none" stroke="currentColor" stroke-width="4">
        <circle cx="9" cy="8" r="4" />
        <path
          stroke-linejoin="round"
          d="M5 18h8v25H5zm16 9.5V43h7V29c0-2.5 1.5-4.5 4-4.5s4 2.5 4 4.5v14h7V27.5c0-3-3.5-9.5-11-9.5s-11 6.5-11 9.5Z"
        />
      </g>
    </svg>
  );
}
