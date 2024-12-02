import { useSelector } from "react-redux";
import { RootState } from "@/src/states/store";
import axios from "@/src/services/api/axios";
import { useState } from "react";
import QRCode from "qrcode";
import { twoFactorAuthentification } from "@privatePages/styles";

const sendRequest2Fa = async (
  accessToken: string | undefined
): Promise<string> => {
  console.log("authentication images");
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
  console.log("authentication images");
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

const TwoFactorAuthentication = () => {
  const accessToken = useSelector((state: RootState) => state.accessToken);
  const [srcQrconde, setSrcQrcode] = useState<React.SetStateAction<string>>("");
  const [isTwoFactor, setIsTwoFactor] = useState(data.is2fa);
  return (
    <>
      <div className={twoFactorAuthentification}>
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
            }}
          >
            Activate 2FA
          </button>
        )}
        <div className={`qr-code ${!srcQrconde && "d-none"}`}>
          <img src={srcQrconde.toString()} alt="QRCode image" className="" />
        </div>
      </div>
    </>
  );
};
export default TwoFactorAuthentication;
