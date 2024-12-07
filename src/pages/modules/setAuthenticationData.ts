import Cookies from "js-cookie";
import {
  setAuthenticated,
  setUnauthenticated,
} from "@/src/states/authentication/authenticatorSlice";
import { setAccessToken } from "@/src/states/authentication/accessTokenSlice";
import { setUser } from "@/src/states/authentication/userSlice";
import { store } from "@/src/states/store";
import { UserDataType } from "@/src/states/authentication/userSlice";

const setCookies = (cookiesAccessToken: string): void => {
  Cookies.set("accessToken", cookiesAccessToken);
};
const dispatch = store.dispatch;
export default function setAuthenticatedData(
  RespondedAccessToken: string
): boolean {
  setCookies(RespondedAccessToken);
  dispatch(setAccessToken(RespondedAccessToken));
  if (RespondedAccessToken) {
    dispatch(setAuthenticated());
    return true;
  }
  return false;
}
export function setUnAuthenticatedData() {
  dispatch(setUnauthenticated());
  dispatch(setAccessToken(""));
  Cookies.remove("accessToken");
}

export function setUserData(userData: UserDataType){
  dispatch(setUser(userData))
  console.log("users data in set User data ")
  console.log(userData);
  
}
