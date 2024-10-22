import { axiosPrivate } from "@/src/services/api/axios";
import { setAccessToken } from "@/src/states/authentication/accessTokenSlice";
import { store } from "@/src/states/store";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  signInAnimation,
  signIn,
  signInStick,
  signInRenderAnimation,
  signInBare,
} from "@publicPagesStyles/index.ts";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { BiSolidLeftArrow } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { Si42, SiGithub } from "react-icons/si";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { z } from "zod";
import Cookies from "js-cookie";
import { setAuthenticated } from "@/src/states/authentication/authenticatorSlice";


const signInSchema = z.object({
  email: z
    .string({ message: "email is required" })
    .max(50, { message: "max email length is 50 chars" })
    .email({ message: "Enter valid email" }),
  password: z
    .string({ message: "password is required" })
    .min(3, { message: "password must be more than 3 chars" })
    .max(30, { message: "password must be less than 30 chars" }),
});
type SignInSchemaType = z.infer<typeof signInSchema>;

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {register, handleSubmit, formState: {errors}} = useForm<SignInSchemaType>({resolver: zodResolver(signInSchema)})
  useEffect(() => {}, []);
  const startAnimationSignIn = (): void => {
    const animation = document.querySelector(".animationSelectorSignIn");
    animation?.classList.remove(signInRenderAnimation);
    animation?.classList.add(signInAnimation);
    setTimeout(() => {
      navigate("/sign-up");
    }, 700);
  };
  const [errorMsg, setErrorMsg] = useState("");
  const lastLocation = location.state?.from?.pathname || "/profile";
  const dispatch =  store.dispatch;

  const onSubmit:SubmitHandler<SignInSchemaType> = async (data : SignInSchemaType) => {
    try {
        const res = await axiosPrivate.post(
          "/sign-in",
          JSON.stringify(data),
          {
            // withCredentials : true,
          }
        );
        Cookies.set("accessToken" , res.data?.accessToken);
        dispatch(setAccessToken(res.data?.accessToken))
        dispatch(setAuthenticated())
        navigate(lastLocation, {replace:true});
    } catch (err) {
      if (err instanceof AxiosError)
      {
        const error: AxiosError = err as AxiosError;
        if (!error.response) 
          {
            setErrorMsg('No Server Response');
          }
          else  if (error.response?.status === 401) {
            setErrorMsg('Unauthorized');
          } else {
            setErrorMsg('Login Failed');
          }
      }
      else{
        setErrorMsg(errorMsg);
      }
      console.log(errorMsg)
    }
  };
  const onError: SubmitErrorHandler<SignInSchemaType> = async (dataerror) => {
    console.log("error function in sign in email : " + dataerror?.email);
    console.log("error function in sign in passwd : " + dataerror?.password);
    console.log("error function in sign in root : " + dataerror?.root);
  }
  return (
    <div
      className={`d-flex flex-row-reverse animationSelectorSignIn w-100 ${signInRenderAnimation} ${signIn}`}
    >
      <div className="w-100 ">
        <div className="d-flex justify-content-center h-100">
          <form className="w-75 my-auto" onSubmit={handleSubmit(onSubmit, onError)} >
            <div className="mb-4">
              <input
                type="text"
                className="form-control rounded-5 p-2"
                placeholder="Email...."
                autoComplete={"on"}
                {...register("email", {required: true})}
              />
              {errors?.email && <span className="text-danger">{errors.email.message}</span>}
            </div>
            <div className="mb-4 ">
              <input
                type="password"
                className="form-control rounded-5 p-2"
                placeholder="Password...."
                {...register("password", {required: true})}
                autoComplete={"off"}
              />
              {errors?.password && <span className="text-danger">{errors.password.message}</span>}
            </div>
            <div className="d-flex justify-content-evenly mb-4 p-2">
              <Link
                to="#42"
                className="text-decoration-none rounded-5 p-1 pe-2 pb-1 text-center"
                target="_blank"
                style={{ background: "#8D6B92" }}
              >
                <Si42 size={40} color="#000000" />
              </Link>
              <Link
                to="#github"
                className="text-decoration-none rounded-5 p-1 text-center"
                target="_blank"
                style={{ background: "#8D6B92" }}
              >
                <SiGithub size={40} color="#000000" />
              </Link>
              <Link
                to="#google"
                className="text-decoration-none rounded-5 p-1 text-center"
                target="_blank"
                style={{ background: "#8D6B92" }}
              >
                <FcGoogle size={40} color="#000000" />
              </Link>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="rounded-5 px-5 py-1 h4 m-0 text-nowrap"
              >
                SIGN IN
              </button>
            </div>
          {errorMsg && <span className="text-danger bg-warning-subtle row m-0 ">{errorMsg}</span>}
          </form>

        </div>
      </div>
      <div className={`border d-flex my-auto mx-3 ms-5 p-0  ${signInBare}`}>
        <p
          className="text-center h4 m-1"
          onClick={() => startAnimationSignIn()}
        >
          SIGN
          <BiSolidLeftArrow className="m-0 me-2 my-3" size="1em" />
          UP
        </p>
      </div>
      <div className={`my-auto me-4 ${signInStick} `}></div>
    </div>
  );
};

export default SignIn;
