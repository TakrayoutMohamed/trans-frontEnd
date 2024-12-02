import Cookies from "js-cookie";
import { setAuthenticated } from "@/src/states/authentication/authenticatorSlice";
import { setAccessToken } from "@/src/states/authentication/accessTokenSlice";
import { store } from "@/src/states/store";

const setCookies = (cookiesAccessToken: string): void => {
  Cookies.set("accessToken", cookiesAccessToken);
};
export default function (RespondedAccessToken: string): boolean {
  const dispatch = store.dispatch;
  setCookies(RespondedAccessToken);
  dispatch(setAccessToken(RespondedAccessToken));
  if (RespondedAccessToken) {
    dispatch(setAuthenticated());
    return true;
  }
  return false;
}
