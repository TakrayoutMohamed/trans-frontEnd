import { redirect } from "react-router-dom"
import Cookies from "js-cookie"
import { store } from "@/src/states/store";
import { setUnauthenticated } from "@/src/states/authentication/authenticatorSlice";
import { setAccessToken } from "@/src/states/authentication/accessTokenSlice";
const logOut = () => {
    const dispatch = store.dispatch;
    Cookies.remove("accessToken");
    dispatch(setAccessToken(undefined));
    dispatch(setUnauthenticated());
  return (
    redirect("/sign-in")
  )
}

export default logOut