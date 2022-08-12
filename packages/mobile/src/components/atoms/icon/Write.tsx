import { IconProps } from "src/type/props";

function Write({ size, stroke }: IconProps) {
  return (
    <svg
      width={size}
      height="100%"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.25343 3.72217C5.52957 3.72217 5.75343 3.49831 5.75343 3.22217C5.75343 2.94603 5.52957 2.72217 5.25343 2.72217V3.72217ZM11.5312 8.11107C11.5312 7.83493 11.3074 7.61107 11.0312 7.61107C10.7551 7.61107 10.5312 7.83493 10.5312 8.11107H11.5312ZM5.25343 2.72217H2.25342V3.72217H5.25343V2.72217ZM0.753418 4.22217V12H1.75342V4.22217H0.753418ZM2.25342 13.5H10.0312V12.5H2.25342V13.5ZM11.5312 12V8.11107H10.5312V12H11.5312ZM10.0312 13.5C10.8597 13.5 11.5312 12.8284 11.5312 12H10.5312C10.5312 12.2761 10.3074 12.5 10.0312 12.5V13.5ZM0.753418 12C0.753418 12.8284 1.42499 13.5 2.25342 13.5V12.5C1.97728 12.5 1.75342 12.2761 1.75342 12H0.753418ZM2.25342 2.72217C1.42499 2.72217 0.753418 3.39374 0.753418 4.22217H1.75342C1.75342 3.94603 1.97728 3.72217 2.25342 3.72217V2.72217Z"
        fill={stroke}
      />
      <path
        d="M5.38142 8.37336L7.66971 8.11911L12.7548 3.03402L10.7208 0.999986L5.63567 6.08507L5.38142 8.37336Z"
        stroke={stroke}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { Write };
