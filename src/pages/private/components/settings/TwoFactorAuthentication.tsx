import { useSelector } from "react-redux";
import { RootState } from "@/src/states/store";
import axios from "@/src/services/api/axios";
import { useState } from "react";
import QRCode from "qrcode";
import { twoFactorAuthentification } from "@privatePages/styles";
import ModalComponent from "@/src/router/layouts/components/ModalComponent";
import Modal from "react-modal";

const sendRequest2Fa = async (
  accessToken: string | undefined
): Promise<string> => {
  try {
    const response = await axios.post(
      "enable2fa",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
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
  accessToken: string | undefined
): Promise<void> => {
  try {
    const response = await axios.get("enable2fa", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log("response from setting Profile 2fa");
    console.log(response);
  } catch (err) {
    console.log("error in error frow setting Profile 2fa");
    console.log(err);
  }
};

const data = { is2fa: false };

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
  const accessToken = useSelector((state: RootState) => state.accessToken);
  const [srcQrconde, setSrcQrcode] = useState<React.SetStateAction<string>>("");
  const [isTwoFactor, setIsTwoFactor] = useState(data.is2fa);
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
        {isTwoFactor ? (
          <button
            type="button"
            className="two-factor-deactivation"
            onClick={async () => {
              await sendRequest2FaDeactivate(accessToken.value);
              setSrcQrcode("");
              setIsTwoFactor(false);
            }}
          >
            Deactivate 2FA
          </button>
        ) : (
          <button
            type="button"
            className="two-factor-activation"
            onClick={async () => {
              setSrcQrcode(await sendRequest2Fa(accessToken.value));
              setIsTwoFactor(true);
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
