import type { StyleProps } from "src/type/props";

function NoMenu({ className, style }: StyleProps) {
  return (
    <svg
      {...{ className, style }}
      width="130"
      height="130"
      viewBox="0 0 130 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1_3333_83" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M79.5261 57.0747C80.792 55.7362 82.6898 55.2523 84.5266 55.3945C92.7058 56.0277 103.688 51.4848 109.781 45.3918C118.152 37.0215 123.597 19.4235 116.716 12.5425C109.835 5.66151 92.735 11.6049 84.3648 19.9752C77.8664 26.4736 72.8307 38.2338 74.1236 46.3886C74.468 48.5611 74.1188 50.9441 72.5207 52.4555L21.5756 100.636C20.0133 102.113 19.3458 104.305 19.8195 106.403C20.337 108.695 22.127 110.485 24.4191 111.002C26.5166 111.476 28.7085 110.808 30.186 109.246L79.5261 57.0747Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M79.5261 57.0747C80.792 55.7362 82.6898 55.2523 84.5266 55.3945C92.7058 56.0277 103.688 51.4848 109.781 45.3918C118.152 37.0215 123.597 19.4235 116.716 12.5425C109.835 5.66151 92.735 11.6049 84.3648 19.9752C77.8664 26.4736 72.8307 38.2338 74.1236 46.3886C74.468 48.5611 74.1188 50.9441 72.5207 52.4555L21.5756 100.636C20.0133 102.113 19.3458 104.305 19.8195 106.403C20.337 108.695 22.127 110.485 24.4191 111.002C26.5166 111.476 28.7085 110.808 30.186 109.246L79.5261 57.0747Z"
        fill="#F3F4F9"
      />
      <path
        d="M21.5756 100.636L22.2627 101.362L21.5756 100.636ZM19.8195 106.403L20.7949 106.182L20.7949 106.182L19.8195 106.403ZM24.4191 111.002L24.6394 110.027L24.6394 110.027L24.4191 111.002ZM30.186 109.246L30.9125 109.933L30.186 109.246ZM74.1236 46.3886L75.1112 46.232L74.1236 46.3886ZM84.5266 55.3945L84.4494 56.3915L84.5266 55.3945ZM79.5261 57.0747L78.7996 56.3876L79.5261 57.0747ZM109.074 44.6847C106.142 47.6174 101.995 50.2089 97.5638 51.9874C93.1283 53.7679 88.4954 54.6988 84.6037 54.3975L84.4494 56.3915C88.7369 56.7235 93.685 55.6995 98.3088 53.8435C102.937 51.9856 107.328 49.2592 110.489 46.0989L109.074 44.6847ZM116.009 13.2496C119.058 16.2994 119.524 21.9445 117.997 28.1703C116.486 34.3253 113.112 40.6468 109.074 44.6847L110.489 46.0989C114.821 41.7665 118.355 35.1038 119.939 28.647C121.506 22.261 121.254 15.6666 117.423 11.8354L116.009 13.2496ZM85.0719 20.6823C89.1223 16.6319 95.3312 13.1356 101.36 11.5049C107.46 9.85475 112.969 10.2099 116.009 13.2496L117.423 11.8354C113.582 7.99412 107.1 7.88048 100.838 9.57432C94.5036 11.2876 87.9776 14.9482 83.6577 19.2681L85.0719 20.6823ZM75.1112 46.232C74.5035 42.3987 75.3782 37.6117 77.2509 32.9323C79.1185 28.2655 81.933 23.8211 85.0719 20.6823L83.6577 19.2681C80.2981 22.6276 77.3456 27.3126 75.394 32.1892C73.4475 37.0531 72.4508 42.2237 73.1359 46.5452L75.1112 46.232ZM22.2627 101.362L73.2078 53.182L71.8336 51.7289L20.8885 99.9092L22.2627 101.362ZM20.7949 106.182C20.399 104.429 20.9569 102.597 22.2627 101.362L20.8885 99.9092C19.0696 101.629 18.2926 104.181 18.844 106.623L20.7949 106.182ZM24.6394 110.027C22.7236 109.594 21.2275 108.098 20.7949 106.182L18.844 106.623C19.4466 109.291 21.5304 111.375 24.1989 111.978L24.6394 110.027ZM29.4594 108.559C28.2245 109.865 26.3925 110.423 24.6394 110.027L24.1989 111.978C26.6408 112.529 29.1924 111.752 30.9125 109.933L29.4594 108.559ZM78.7996 56.3876L29.4594 108.559L30.9125 109.933L80.2527 57.7618L78.7996 56.3876ZM73.1359 46.5452C73.4547 48.5562 73.0921 50.5387 71.8336 51.7289L73.2078 53.182C75.1455 51.3495 75.4812 48.566 75.1112 46.232L73.1359 46.5452ZM84.6037 54.3975C82.5666 54.2398 80.3335 54.7657 78.7996 56.3876L80.2527 57.7618C81.2505 56.7067 82.813 56.2649 84.4494 56.3915L84.6037 54.3975Z"
        fill="#A3B9D6"
        mask="url(#path-1-inside-1_3333_83)"
      />
      <path
        d="M47.6258 73.7678C48.2116 73.182 49.1613 73.182 49.7471 73.7678L56.5866 80.6073C57.1724 81.193 57.1724 82.1428 56.5866 82.7286L21.0231 118.292C19.2658 120.049 16.4165 120.049 14.6592 118.292L12.0623 115.695C10.3049 113.938 10.3049 111.089 12.0623 109.331L47.6258 73.7678Z"
        fill="#F3F4F9"
        stroke="#A3B9D6"
      />
      <mask id="path-4-inside-2_3333_83" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.97908 25.2775C5.02778 26.2288 5.02778 27.7712 5.97908 28.7225L25.5821 48.3255L26.2477 48.9911L26.2563 48.9997L26.9061 49.6495C27.027 49.7704 27.1575 49.8759 27.295 49.9661C31.1902 53.3406 36.2564 55.0939 41.4397 54.8214L42.8498 54.7473C44.9492 54.6369 47.199 54.9783 48.6436 56.5057L98.9336 109.682C100.411 111.244 102.603 111.911 104.7 111.438C106.993 110.92 108.783 109.13 109.3 106.838C109.774 104.741 109.106 102.549 107.544 101.071L53.9078 50.3459C52.5674 49.0782 52.2143 47.1284 52.3111 45.286L52.3852 43.8759C52.6828 38.2144 50.5637 32.6927 46.5549 28.6839L45.9139 28.0428C45.9003 28.0293 45.8783 28.0293 45.8647 28.0428C45.8512 28.0564 45.8292 28.0564 45.8156 28.0428L26.2372 8.46439C25.2859 7.51309 23.7435 7.51309 22.7922 8.46439C21.8409 9.41568 21.8409 10.958 22.7922 11.9093L41.1823 30.2994C41.8522 30.9693 41.8522 32.0554 41.1823 32.7253C40.5124 33.3951 39.4263 33.3951 38.7565 32.7253L20.3664 14.3352C19.4151 13.3839 17.8727 13.3839 16.9214 14.3352C15.9701 15.2865 15.9701 16.8288 16.9214 17.7801L35.4485 36.3072C36.0427 36.9014 36.0427 37.8648 35.4485 38.4591C34.8543 39.0533 33.8909 39.0533 33.2967 38.4591L14.7696 19.932C13.8183 18.9807 12.2759 18.9807 11.3246 19.932C10.3733 20.8833 10.3733 22.4256 11.3246 23.3769L29.9773 42.0297C30.5022 42.5545 30.5022 43.4054 29.9773 43.9302C29.4525 44.4551 28.6016 44.4551 28.0768 43.9302L9.42403 25.2775C8.47273 24.3262 6.93037 24.3262 5.97908 25.2775Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.97908 25.2775C5.02778 26.2288 5.02778 27.7712 5.97908 28.7225L25.5821 48.3255L26.2477 48.9911L26.2563 48.9997L26.9061 49.6495C27.027 49.7704 27.1575 49.8759 27.295 49.9661C31.1902 53.3406 36.2564 55.0939 41.4397 54.8214L42.8498 54.7473C44.9492 54.6369 47.199 54.9783 48.6436 56.5057L98.9336 109.682C100.411 111.244 102.603 111.911 104.7 111.438C106.993 110.92 108.783 109.13 109.3 106.838C109.774 104.741 109.106 102.549 107.544 101.071L53.9078 50.3459C52.5674 49.0782 52.2143 47.1284 52.3111 45.286L52.3852 43.8759C52.6828 38.2144 50.5637 32.6927 46.5549 28.6839L45.9139 28.0428C45.9003 28.0293 45.8783 28.0293 45.8647 28.0428C45.8512 28.0564 45.8292 28.0564 45.8156 28.0428L26.2372 8.46439C25.2859 7.51309 23.7435 7.51309 22.7922 8.46439C21.8409 9.41568 21.8409 10.958 22.7922 11.9093L41.1823 30.2994C41.8522 30.9693 41.8522 32.0554 41.1823 32.7253C40.5124 33.3951 39.4263 33.3951 38.7565 32.7253L20.3664 14.3352C19.4151 13.3839 17.8727 13.3839 16.9214 14.3352C15.9701 15.2865 15.9701 16.8288 16.9214 17.7801L35.4485 36.3072C36.0427 36.9014 36.0427 37.8648 35.4485 38.4591C34.8543 39.0533 33.8909 39.0533 33.2967 38.4591L14.7696 19.932C13.8183 18.9807 12.2759 18.9807 11.3246 19.932C10.3733 20.8833 10.3733 22.4256 11.3246 23.3769L29.9773 42.0297C30.5022 42.5545 30.5022 43.4054 29.9773 43.9302C29.4525 44.4551 28.6016 44.4551 28.0768 43.9302L9.42403 25.2775C8.47273 24.3262 6.93037 24.3262 5.97908 25.2775Z"
        fill="#F3F4F9"
      />
      <path
        d="M5.97908 28.7225L6.68619 28.0154L6.68619 28.0154L5.97908 28.7225ZM25.5821 48.3255L24.875 49.0326L25.5821 48.3255ZM26.2477 48.9911L25.5406 49.6982L25.5408 49.6984L26.2477 48.9911ZM26.2563 48.9997L26.9634 48.2926L26.9632 48.2924L26.2563 48.9997ZM27.295 49.9661L27.9498 49.2103L27.8992 49.1664L27.8432 49.1297L27.295 49.9661ZM41.4397 54.8214L41.4922 55.82L41.4922 55.82L41.4397 54.8214ZM98.9336 109.682L98.207 110.369L98.9336 109.682ZM104.7 111.438L104.921 112.413L104.921 112.413L104.7 111.438ZM109.3 106.838L110.276 107.058L110.276 107.058L109.3 106.838ZM107.544 101.071L106.857 101.798L107.544 101.071ZM52.3852 43.8759L51.3866 43.8234L52.3852 43.8759ZM26.2372 8.46439L25.53 9.17149L26.2372 8.46439ZM22.7922 11.9093L22.0851 12.6164L22.7922 11.9093ZM20.3664 14.3352L19.6593 15.0423L20.3664 14.3352ZM53.9078 50.3459L53.2207 51.0724L53.9078 50.3459ZM48.6436 56.5057L47.917 57.1928L48.6436 56.5057ZM6.68619 28.0154C6.12541 27.4546 6.12541 26.5454 6.68618 25.9846L5.27197 24.5704C3.93015 25.9122 3.93015 28.0877 5.27197 29.4296L6.68619 28.0154ZM26.2892 47.6184L6.68619 28.0154L5.27197 29.4296L24.875 49.0326L26.2892 47.6184ZM26.9548 48.284L26.2892 47.6184L24.875 49.0326L25.5406 49.6982L26.9548 48.284ZM26.9632 48.2924L26.9546 48.2838L25.5408 49.6984L25.5494 49.707L26.9632 48.2924ZM27.6132 48.9424L26.9634 48.2926L25.5492 49.7068L26.199 50.3566L27.6132 48.9424ZM27.8432 49.1297C27.7626 49.0769 27.6854 49.0146 27.6132 48.9424L26.199 50.3566C26.3686 50.5262 26.5523 50.675 26.7468 50.8024L27.8432 49.1297ZM41.3872 53.8228C36.4631 54.0816 31.6502 52.416 27.9498 49.2103L26.6402 50.7219C30.7302 54.2652 36.0497 56.1061 41.4922 55.82L41.3872 53.8228ZM42.7973 53.7487L41.3872 53.8228L41.4922 55.82L42.9023 55.7459L42.7973 53.7487ZM99.6601 108.994L49.3701 55.8186L47.917 57.1928L98.207 110.369L99.6601 108.994ZM104.48 110.462C102.727 110.858 100.895 110.3 99.6601 108.994L98.207 110.369C99.9271 112.188 102.479 112.965 104.921 112.413L104.48 110.462ZM108.325 106.618C107.892 108.534 106.396 110.03 104.48 110.462L104.921 112.413C107.589 111.811 109.673 109.727 110.276 107.058L108.325 106.618ZM106.857 101.798C108.163 103.033 108.721 104.865 108.325 106.618L110.276 107.058C110.827 104.616 110.05 102.065 108.231 100.345L106.857 101.798ZM53.2207 51.0724L106.857 101.798L108.231 100.345L54.5949 49.6193L53.2207 51.0724ZM51.3866 43.8234L51.3125 45.2335L53.3097 45.3385L53.3838 43.9283L51.3866 43.8234ZM45.8478 29.391C49.6561 33.1994 51.6693 38.445 51.3866 43.8234L53.3838 43.9283C53.6963 37.9838 51.4712 32.186 47.262 27.9768L45.8478 29.391ZM45.2067 28.7499L45.8478 29.391L47.262 27.9768L46.621 27.3357L45.2067 28.7499ZM46.5718 28.7499C46.1949 29.1269 45.5837 29.1269 45.2067 28.7499L46.621 27.3357C46.2168 26.9316 45.5617 26.9317 45.1576 27.3357L46.5718 28.7499ZM45.1085 28.7499C45.5125 29.154 46.1677 29.1541 46.5718 28.7499L45.1576 27.3357C45.5346 26.9587 46.1458 26.9588 46.5227 27.3357L45.1085 28.7499ZM25.53 9.17149L45.1085 28.7499L46.5227 27.3357L26.9443 7.75728L25.53 9.17149ZM23.4993 9.17149C24.0601 8.61072 24.9693 8.61072 25.53 9.17149L26.9443 7.75728C25.6024 6.41546 23.4269 6.41546 22.0851 7.75728L23.4993 9.17149ZM23.4993 11.2022C22.9385 10.6415 22.9385 9.73227 23.4993 9.17149L22.0851 7.75728C20.7433 9.0991 20.7433 11.2746 22.0851 12.6164L23.4993 11.2022ZM41.8894 29.5923L23.4993 11.2022L22.0851 12.6164L40.4752 31.0065L41.8894 29.5923ZM41.8894 33.4324C42.9498 32.372 42.9498 30.6527 41.8894 29.5923L40.4752 31.0065C40.7546 31.2859 40.7545 31.7388 40.4752 32.0182L41.8894 33.4324ZM38.0494 33.4324C39.1098 34.4928 40.829 34.4928 41.8894 33.4324L40.4752 32.0182C40.1958 32.2975 39.7429 32.2975 39.4636 32.0182L38.0494 33.4324ZM19.6593 15.0423L38.0494 33.4324L39.4636 32.0182L21.0735 13.6281L19.6593 15.0423ZM17.6285 15.0423C18.1893 14.4815 19.0985 14.4815 19.6593 15.0423L21.0735 13.6281C19.7317 12.2862 17.5561 12.2862 16.2143 13.6281L17.6285 15.0423ZM17.6285 17.073C17.0678 16.5122 17.0678 15.6031 17.6285 15.0423L16.2143 13.6281C14.8725 14.9699 14.8725 17.1454 16.2143 18.4872L17.6285 17.073ZM36.1556 35.6001L17.6285 17.073L16.2143 18.4872L34.7414 37.0143L36.1556 35.6001ZM36.1556 39.1662C37.1404 38.1814 37.1404 36.5848 36.1556 35.6001L34.7414 37.0143C34.9451 37.218 34.9451 37.5483 34.7414 37.752L36.1556 39.1662ZM32.5895 39.1662C33.5743 40.1509 35.1709 40.1509 36.1556 39.1662L34.7414 37.752C34.5377 37.9557 34.2075 37.9557 34.0038 37.752L32.5895 39.1662ZM14.0625 20.6391L32.5895 39.1662L34.0038 37.752L15.4767 19.2249L14.0625 20.6391ZM12.0317 20.6391C12.5925 20.0783 13.5017 20.0783 14.0625 20.6391L15.4767 19.2249C14.1349 17.8831 11.9593 17.8831 10.6175 19.2249L12.0317 20.6391ZM12.0317 22.6698C11.471 22.1091 11.471 21.1999 12.0317 20.6391L10.6175 19.2249C9.27569 20.5667 9.27569 22.7422 10.6175 24.084L12.0317 22.6698ZM30.6844 41.3225L12.0317 22.6698L10.6175 24.084L29.2702 42.7368L30.6844 41.3225ZM30.6844 44.6373C31.5998 43.722 31.5998 42.2379 30.6844 41.3225L29.2702 42.7368C29.4045 42.8711 29.4045 43.0888 29.2702 43.2231L30.6844 44.6373ZM27.3696 44.6373C28.285 45.5527 29.7691 45.5527 30.6844 44.6373L29.2702 43.2231C29.1359 43.3574 28.9182 43.3574 28.7839 43.2231L27.3696 44.6373ZM8.71692 25.9846L27.3696 44.6373L28.7839 43.2231L10.1311 24.5704L8.71692 25.9846ZM6.68618 25.9846C7.24696 25.4238 8.15615 25.4238 8.71692 25.9846L10.1311 24.5704C8.78931 23.2286 6.61379 23.2286 5.27197 24.5704L6.68618 25.9846ZM54.5949 49.6193C53.57 48.65 53.2189 47.0666 53.3097 45.3385L51.3125 45.2335C51.2096 47.1901 51.5648 49.5064 53.2207 51.0724L54.5949 49.6193ZM42.9023 55.7459C44.9166 55.64 46.7828 55.9935 47.917 57.1928L49.3701 55.8186C47.6153 53.9631 44.9818 53.6338 42.7973 53.7487L42.9023 55.7459Z"
        fill="#A3B9D6"
        mask="url(#path-4-inside-2_3333_83)"
      />
      <path
        d="M72.0244 82.7286C71.4386 82.1428 71.4386 81.193 72.0244 80.6072L78.8639 73.7678C79.4497 73.182 80.3994 73.182 80.9852 73.7678L116.549 109.331C118.306 111.089 118.306 113.938 116.549 115.695L113.952 118.292C112.194 120.049 109.345 120.049 107.588 118.292L72.0244 82.7286Z"
        fill="#F3F4F9"
        stroke="#A3B9D6"
      />
    </svg>
  );
}

export { NoMenu };