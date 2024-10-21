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
import { useEffect } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { BiSolidLeftArrow } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { Si42, SiGithub } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

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
  const dispatch =  store.dispatch;

  const onSubmit:SubmitHandler<SignInSchemaType> = async (data : SignInSchemaType) => {
    try {
        const result = signInSchema.safeParse(data);
        if (result.error) {
            console.log("fieldErrors : " +JSON.stringify(result.error.formErrors.fieldErrors));
            throw Error("fieldErrors : " +JSON.stringify(result.error.formErrors.fieldErrors));
        }
        const res = await axiosPrivate.post(
          "sign-in",
          result.data
        );
        if (res.status == 200)
        {
          dispatch(setAccessToken(res.data?.accessToken))
          console.log(res.data);
        }
    } catch (err) {
        console.log(err);
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
          {errors?.root && <span className="text-danger">{errors.root?.message}</span>}
          <form className="w-75 my-auto" onSubmit={handleSubmit(onSubmit, onError)} >
            <div className="mb-4">
              {errors?.email && <span className="text-danger">{errors.email.message}</span>}
              <input
                type="text"
                className="form-control rounded-5 p-2"
                placeholder="Email...."
                autoComplete={"on"}
                {...register("email", {required: true})}
                />
            </div>
            <div className="mb-4 ">
                {errors?.password && <span className="text-danger">{errors.password.message}</span>}
              <input
                type="password"
                className="form-control rounded-5 p-2"
                placeholder="Password...."
                {...register("password", {required: true})}
                autoComplete={"off"}
              />
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
