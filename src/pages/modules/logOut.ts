import { redirect } from "react-router-dom";
import { setUnAuthenticatedData } from "@/src/pages/modules/setAuthenticationData";
import axios from "@/src/services/api/axios";
import { store } from "@/src/states/store";
const logOut = async () => {
  try {
    const res = await axios.post(
      "logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${store.getState().accessToken.value}`,
        },
      }
    );
    console.log("response in logout.ts");
    console.log(res);
    setUnAuthenticatedData();
  } catch (err) {
    console.log("error in logout.ts");
    console.log(err);
  }
  return redirect("/sign-in");
};

export default logOut;
