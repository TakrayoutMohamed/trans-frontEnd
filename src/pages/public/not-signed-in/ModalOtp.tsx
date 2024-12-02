import axios from "@/src/services/api/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import setAuthenticationData from "@pages/modules/setAuthenticationData";
import { z } from "zod";
import { AxiosError } from "axios";
import { useState } from "react";
import { modalOtp } from "@publicPagesStyles/index";
const signInOtpSchema = z.object({
  otp1: z.string({ message: " Otp code verefication is  required" }).length(1, {
    message: "length of the verification code must be 6 numbers",
  }),
  otp2: z.string({ message: " Otp code verefication is  required" }).length(1, {
    message: "length of the verification code must be 6 numbers",
  }),
  otp3: z.string({ message: " Otp code verefication is  required" }).length(1, {
    message: "length of the verification code must be 6 numbers",
  }),
  otp4: z.string({ message: " Otp code verefication is  required" }).length(1, {
    message: "length of the verification code must be 6 numbers",
  }),
  otp5: z.string({ message: " Otp code verefication is  required" }).length(1, {
    message: "length of the verification code must be 6 numbers",
  }),
  otp6: z.string({ message: " Otp code verefication is  required" }).length(1, {
    message: "length of the verification code must be 6 numbers",
  }),
});

type SignInOtpSchemaType = z.infer<typeof signInOtpSchema>;

interface ModalOtpProps {
  email: string;
}

const ModalOtp = ({ email }: ModalOtpProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInOtpSchemaType>({ resolver: zodResolver(signInOtpSchema) });

  const [errorMsg, setErrorMsg] = useState("");
  const lastLocation = location.state?.from?.pathname || "/profile";

  const submitOtp: SubmitHandler<SignInOtpSchemaType> = async (
    otpData: SignInOtpSchemaType
  ) => {
    try {
      const otpCode =
        "" +
        otpData.otp1 +
        otpData.otp2 +
        otpData.otp3 +
        otpData.otp4 +
        otpData.otp5 +
        otpData.otp6;
      const res = await axios.post("signin2fa", {
        email: email,
        otp: otpCode,
      });
      console.log("res");
      console.log(res);
      if (setAuthenticationData(res.data?.access) && res.status === 200) {
        document.getElementById("tst")?.click;
        navigate(lastLocation, { replace: true });
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        const error: AxiosError = err as AxiosError;
        console.log(error);
        if (!error.response) {
          setErrorMsg("No Server Response");
        } else if (error.response?.status === 401) {
          setErrorMsg("Unauthorized");
        } else {
          setErrorMsg("Login Failed");
        }
      } else {
        setErrorMsg(errorMsg);
      }
      console.log("error from the modal otp");
      console.log(err);
    }
  };
  return (
    <div className={modalOtp}>
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        id="tst"
      >
        fdasfd
      </button>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="false"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form
                className=""
                onSubmit={handleSubmit(submitOtp, (error) => {
                  console.log("error in module handle submit");
                  console.log(error);
                })}
              >
                <div className="otp-code">
                  <div className="inputs-code">
                    <input
                      type="text"
                      maxLength={1}
                      className=""
                      {...register("otp1", { required: true })}
                      autoComplete={"off"}
                    />
                    <input
                      type="text"
                      maxLength={1}
                      className=""
                      {...register("otp2", { required: true })}
                      autoComplete={"off"}
                    />
                    <input
                      type="text"
                      maxLength={1}
                      className=""
                      {...register("otp3", { required: true })}
                      autoComplete={"off"}
                    />
                    <input
                      type="text"
                      maxLength={1}
                      className=""
                      {...register("otp4", { required: true })}
                      autoComplete={"off"}
                    />
                    <input
                      type="text"
                      maxLength={1}
                      className=""
                      {...register("otp5", { required: true })}
                      autoComplete={"off"}
                    />
                    <input
                      type="text"
                      maxLength={1}
                      className=""
                      {...register("otp6", { required: true })}
                      autoComplete={"off"}
                    />
                  </div>
                  {errors && (
                    <span className="text-danger">
                      {errors.root?.message}
                    </span>
                  )}
                </div>
                <div className="submit-cancel-button">
                  <input type="submit" className="submit" value="verify" />
                  <input
                    type="button"
                    className="cancel"
                    value="cancel"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
              </form>
              {errorMsg && <span className="text-danger">{errorMsg}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalOtp;
