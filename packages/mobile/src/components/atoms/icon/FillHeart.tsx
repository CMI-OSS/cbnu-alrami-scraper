import { IconProps } from "src/type/props";

function FillHeart({ fill, size }: IconProps) {
  return (
    <svg
      width={size}
      height="auto"
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 4.26772C14.1513 2.30418 16.1842 1 18.5 1C22.0899 1 25 4.13401 25 8C25 8.05256 24.9995 8.10498 24.9984 8.15727C24.9995 8.21066 25 8.26475 25 8.31955C25 15.296 16.2856 21.1468 13.7092 22.7242C13.2689 22.9937 12.7311 22.9937 12.2908 22.7242C9.71436 21.1468 1 15.296 1 8.31955C1 8.26475 1.00054 8.21066 1.00161 8.15727C1.00054 8.10498 1 8.05256 1 8C1 4.13401 3.91015 1 7.5 1C9.81577 1 11.8487 2.30418 13 4.26772Z"
        fill={fill}
      />
      <path
        d="M13 4.26773L12.353 4.64708C12.4876 4.87667 12.7339 5.01773 13 5.01772C13.2662 5.01772 13.5124 4.87667 13.647 4.64708L13 4.26773ZM24.9984 8.15727L24.2485 8.14192C24.2483 8.15205 24.2483 8.16217 24.2485 8.1723L24.9984 8.15727ZM13.7092 22.7242L14.1008 23.3638L14.1008 23.3638L13.7092 22.7242ZM12.2908 22.7242L12.6824 22.0845L12.2908 22.7242ZM1.00161 8.15727L1.75146 8.1723C1.75166 8.16218 1.75166 8.15205 1.75145 8.14192L1.00161 8.15727ZM13.647 4.64708C14.6787 2.88747 16.4788 1.75 18.5 1.75V0.25C15.8896 0.25 13.6239 1.72089 12.353 3.88837L13.647 4.64708ZM18.5 1.75C21.6243 1.75 24.25 4.49491 24.25 8H25.75C25.75 3.7731 22.5554 0.25 18.5 0.25V1.75ZM24.25 8C24.25 8.04744 24.2495 8.09475 24.2485 8.14192L25.7482 8.17261C25.7494 8.11522 25.75 8.05768 25.75 8H24.25ZM24.2485 8.1723C24.2495 8.22057 24.25 8.26966 24.25 8.31955H25.75C25.75 8.25984 25.7494 8.20074 25.7482 8.14224L24.2485 8.1723ZM24.25 8.31955C24.25 11.5043 22.248 14.5279 19.7871 17.0195C17.3476 19.4895 14.5828 21.3099 13.3176 22.0845L14.1008 23.3638C15.412 22.561 18.2926 20.6673 20.8544 18.0735C23.3948 15.5013 25.75 12.1113 25.75 8.31955H24.25ZM13.3176 22.0845C13.1177 22.2069 12.8823 22.2069 12.6824 22.0845L11.8992 23.3638C12.5798 23.7805 13.4202 23.7805 14.1008 23.3638L13.3176 22.0845ZM12.6824 22.0845C11.4172 21.3099 8.6524 19.4895 6.21285 17.0195C3.752 14.5279 1.75 11.5043 1.75 8.31955H0.25C0.25 12.1113 2.60518 15.5013 5.14562 18.0735C7.70738 20.6673 10.588 22.561 11.8992 23.3638L12.6824 22.0845ZM1.75 8.31955C1.75 8.26965 1.75049 8.22057 1.75146 8.1723L0.251759 8.14223C0.250586 8.20074 0.25 8.25984 0.25 8.31955H1.75ZM1.75145 8.14192C1.75049 8.09475 1.75 8.04744 1.75 8H0.25C0.25 8.05768 0.25059 8.11522 0.251765 8.17262L1.75145 8.14192ZM1.75 8C1.75 4.49491 4.37574 1.75 7.5 1.75V0.25C3.44456 0.25 0.25 3.7731 0.25 8H1.75ZM7.5 1.75C9.52116 1.75 11.3213 2.88747 12.353 4.64708L13.647 3.88837C12.3761 1.72089 10.1104 0.25 7.5 0.25V1.75Z"
        fill={fill}
      />
    </svg>
  );
}

export { FillHeart };
