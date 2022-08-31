import { SVGAttributes } from "react";

type Props = SVGAttributes<SVGSVGElement>;

export const ShortArrowIcon = (props: Props) => {
  return (
    <svg
      width="11"
      height="10"
      viewBox="0 0 11 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.83083 5.57424L-1.93456e-07 5.57424L-2.43658e-07 4.42576L8.83083 4.42576L5.26531 0.812103L6.06659 6.88495e-07L11 5L6.0666 10L5.26531 9.1879L8.83083 5.57424Z"
        fill="#D1D1CC"
      />
    </svg>
  );
};

export const LongArrowIcon = (props: Props) => {
  return (
    <svg
      width="30"
      height="8"
      viewBox="0 0 30 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M29.3536 4.35355C29.5488 4.15829 29.5488 3.84171 29.3536 3.64645L26.1716 0.464466C25.9763 0.269204 25.6597 0.269204 25.4645 0.464466C25.2692 0.659728 25.2692 0.976311 25.4645 1.17157L28.2929 4L25.4645 6.82843C25.2692 7.02369 25.2692 7.34027 25.4645 7.53553C25.6597 7.7308 25.9763 7.7308 26.1716 7.53553L29.3536 4.35355ZM0 4.5H29V3.5H0L0 4.5Z"
        fill="#D1D1CC"
      />
    </svg>
  );
};
