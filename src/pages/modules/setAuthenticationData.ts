import Cookies from "js-cookie";
import {
  setAuthenticated,
  setUnauthenticated,
} from "@/src/states/authentication/authenticatorSlice";
import { setAccessToken } from "@/src/states/authentication/accessTokenSlice";
import { setUser } from "@/src/states/authentication/userSlice";
import { store } from "@/src/states/store";
import { UserDataType } from "@/src/states/authentication/userSlice";
import { setFriends } from "@/src/states/authentication/friendsSlice";

const setCookies = (cookiesAccessToken: string): void => {
  Cookies.set("accessToken", cookiesAccessToken);
};
const dispatch = store.dispatch;
export default function setAuthenticatedData(
  RespondedAccessToken: string
): boolean {
  // setUnAuthenticatedData()
  setCookies(RespondedAccessToken);
  dispatch(setAccessToken(RespondedAccessToken));
  if (RespondedAccessToken) {
    dispatch(setAuthenticated());
    return true;
  }
  return false;
}
export function setUnAuthenticatedData() {
  Cookies.remove("accessToken");
  dispatch(setAccessToken(undefined));
  dispatch(setUnauthenticated());
}

export function setUserData(userData: UserDataType){
  dispatch(setUser(userData))
  console.log("users data in set User data ")
  console.log(userData);
  
}
export function setFriendsData(friendsData: UserDataType[]){
  dispatch(setFriends(friendsData))
  console.log("Friends data in set friends data ")
  console.log(friendsData);
}

export function setBlockedData(blockedData: UserDataType[]){
  dispatch(setFriends(blockedData))
  console.log("Blocked data in set Blocked data ")
  console.log(blockedData);
}
