import type { StyleProps } from "src/type/props";

type Props = {
  width?: string;
  height?: string;
  color: string;
} & StyleProps;

function Star({ width, height, color }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.82316 13.3633C3.73133 13.3633 3.64223 13.332 3.57053 13.2746C3.49851 13.2156 3.44601 13.1362 3.41991 13.0469C3.3938 12.9575 3.39533 12.8623 3.42428 12.7738L4.65816 8.91793L1.54686 6.58401C1.47292 6.52652 1.41817 6.44796 1.38984 6.35869C1.36151 6.26943 1.36094 6.17367 1.38819 6.08407C1.41264 5.99585 1.46494 5.9179 1.5373 5.86183C1.60966 5.80576 1.69821 5.77458 1.78973 5.77294H5.66778L6.98145 1.66265C7.0065 1.57568 7.05937 1.49931 7.13196 1.44525C7.20455 1.39118 7.29286 1.3624 7.38336 1.3633C7.47387 1.36421 7.56159 1.39475 7.63308 1.45026C7.70457 1.50576 7.75591 1.58317 7.77922 1.67063L9.01487 5.77294H12.8264C12.918 5.77478 13.0066 5.80614 13.079 5.86236C13.1513 5.91858 13.2036 5.99665 13.228 6.08496C13.2551 6.17464 13.2544 6.27046 13.2259 6.35973C13.1974 6.449 13.1425 6.52752 13.0684 6.58489L9.95447 8.9002L11.121 12.7809C11.1482 12.8693 11.1482 12.9638 11.121 13.0521C11.0938 13.1405 11.0407 13.2186 10.9685 13.2764C10.8986 13.3316 10.8124 13.362 10.7233 13.3628C10.6342 13.3636 10.5474 13.3348 10.4766 13.2808L7.28548 10.8875L4.06427 13.2817C3.99487 13.3343 3.91025 13.363 3.82316 13.3633V13.3633Z"
        stroke={color}
        strokeMiterlimit="10"
      />
    </svg>
  );
}

export { Star };
