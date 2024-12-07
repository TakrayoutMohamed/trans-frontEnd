import { useSelector } from "react-redux";
import { RootState } from "@/src/states/store";
import { useState } from "react";
import QRCode from "qrcode";
import { twoFactorAuthentification } from "@privatePages/styles";
import ModalComponent from "@/src/router/layouts/components/ModalComponent";
import Modal from "react-modal";
import useAxiosPrivate from "@/src/services/hooks/useAxiosPrivate";
import { AxiosInstance } from "axios";
import { setUserData } from "@/src/pages/modules/setAuthenticationData";

const sendRequest2Fa = async (axiosHook: AxiosInstance): Promise<string> => {
  try {
    const response = await axiosHook.post("enable2fa");
    console.log("response from setting Profile 2fa");
    console.log(response);
    return await QRCode.toDataURL(response.data.otp);
  } catch (err) {
    console.log("error in error frow setting Profile 2fa");
    console.log(err);
  }
  return "";
};
const sendRequest2FaDeactivate = async (
  axiosHook: AxiosInstance
): Promise<void> => {
  try {
    const response = await axiosHook.get("enable2fa");
    console.log("response from setting Profile 2fa");
    console.log(response);
  } catch (err) {
    console.log("error in error frow setting Profile 2fa");
    console.log(err);
  }
};

const customStyles: Modal.Styles | undefined = {
  content: {},
  overlay: {
    margin: "0px",
    padding: "0px",
    maxHeight: "100%",
    maxWidth: "100%",
    backgroundColor: "rgba(0,0,0, 0.6)",
  },
};

const TwoFactorAuthentication = () => {
  const axiosPrivateHook = useAxiosPrivate();
  const userData = useSelector((state: RootState) => state.user.value);
  const [srcQrconde, setSrcQrcode] = useState<React.SetStateAction<string>>("");
  // const [isTwoFactor, setIsTwoFactor] = useState(data.is2fa);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className={twoFactorAuthentification}>
        <ModalComponent
          id="qrModal"
          style={customStyles}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          shouldCloseOnOverlayClick={false}
        >
          <div className={`qr-code`}>
            <div
              className="close-modal"
              title="close"
              onClick={() => setIsOpen(false)}
            >
              x
            </div>
            <img src={srcQrconde.toString()} alt="QRCode image" className="" />
          </div>
        </ModalComponent>
        {userData.is2fa ? (
          <button
            type="button"
            className="two-factor-deactivation"
            onClick={async () => {
              await sendRequest2FaDeactivate(axiosPrivateHook);
              setSrcQrcode("");
              setUserData({ ...userData, is2fa: false });
            }}
          >
            Deactivate 2FA
          </button>
        ) : (
          <button
            type="button"
            className="two-factor-activation"
            onClick={async () => {
              setSrcQrcode(await sendRequest2Fa(axiosPrivateHook));
              setUserData({ ...userData, is2fa: true });
              setIsOpen(true);
            }}
          >
            Activate 2FA
          </button>
        )}
      </div>
    </>
  );
};
export default TwoFactorAuthentication;
