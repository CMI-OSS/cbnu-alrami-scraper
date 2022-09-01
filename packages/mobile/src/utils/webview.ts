import { getUA, isMobile } from "react-device-detect";

const CBNU_ALRAMI_IOS_USER_AGENT = "cbnu_alrami_ios";
const CBNU_ALRAMI_ANDROID_USER_AGENT = "cbnu_alrami_android";

const isFromIosApp = getUA.includes(CBNU_ALRAMI_IOS_USER_AGENT);
const isFromAndroidApp = getUA.includes(CBNU_ALRAMI_ANDROID_USER_AGENT);

const isFromApp = isFromIosApp || isFromAndroidApp;

const isWebView = isMobile && isFromApp;
const isDev = process.env.NODE_ENV === "development";

export { isWebView, isDev };
