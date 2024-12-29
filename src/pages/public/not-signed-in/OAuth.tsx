import axios from "@/src/services/api/axios";
import { useEffect } from "react";
import setAuthenticatedData from "../../modules/setAuthenticationData";
import { toast } from "react-toastify";

const handle42OauthCallback = async () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  if (code) {
    try {
      const res = await axios.get("socialauth", { params: { code } });
      console.log(res);
      if  (!res.data.access)
          throw new Error("No access credentials provided");
      setAuthenticatedData(res.data.access)
    } catch (error) {
      console.error(error);
      toast.error("Error while trying to get the right access, ", {
        autoClose:  7000, containerId:"validation"
      })
    }
  } else {
    console.error("No code parameter in URL");
    toast.error("No code provided by 42 API please  check if you have the right permissions", {
      autoClose:  7000, containerId:"validation"
    })
  }
};

const OAuth = () => {
  useEffect(() => {
    handle42OauthCallback();
  }, []);

  return <div>Handling 42 OAuth...</div>;
};

export default OAuth;
