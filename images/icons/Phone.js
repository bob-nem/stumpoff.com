import * as React from "react";

function SvgPhone(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={44}
      height={44}
      alt="Phone number icon"
      viewBox="0 0 37 37"
      fill="none"
      {...props}
    >
      <circle
        cx={18.5}
        cy={18.5}
        r={17.5}
        fill="#fff"
        stroke="#074578"
        strokeWidth={2}
      />
      <g clipPath="url(#phone_svg__clip0)">
        <path
          d="M27.484 22.944l-2.651-2.651c-.947-.947-2.557-.569-2.936.663-.284.852-1.23 1.325-2.083 1.136-1.894-.474-4.45-2.936-4.924-4.924-.284-.853.284-1.8 1.136-2.084 1.231-.378 1.61-1.988.663-2.935l-2.652-2.652c-.757-.663-1.894-.663-2.556 0l-1.8 1.8c-1.799 1.893.19 6.912 4.64 11.363 4.451 4.45 9.47 6.534 11.364 4.64l1.8-1.8c.662-.757.662-1.893 0-2.556z"
          fill="#FF8D41"
        />
      </g>
      <defs>
        <clipPath id="phone_svg__clip0">
          <path fill="#fff" transform="translate(9 9)" d="M0 0h19v19H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgPhone;
