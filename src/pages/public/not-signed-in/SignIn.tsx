import {
  signInAnimation,
  signIn,
  signInStick,
  signInRenderAnimation,
  signInBare,
} from "@publicPagesStyles/index.ts";
import { useEffect } from "react";
import { BiSolidLeftArrow } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { Si42, SiGithub } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  useEffect(() => {}, []);
  const startAnimationSignIn = (): void => {
    const animation = document.querySelector(".animationSelectorSignIn");
    animation?.classList.remove(signInRenderAnimation);
    animation?.classList.add(signInAnimation);
    setTimeout(() => {
      navigate("/sign-up");
    }, 700);
  };
  return (
    <div
      className={`d-flex flex-row-reverse animationSelectorSignIn w-100 ${signInRenderAnimation} ${signIn}`}
    >
      <div className="w-100 ">
        <div className="d-flex justify-content-center h-100">
          <form action="#" className="w-75 my-auto">
            <div className="mb-4">
              <input
                type="text"
                className="form-control rounded-5 p-2"
                placeholder="Email...."
                name="email"
                autoComplete={"off"}
              />
            </div>
            <div className="mb-4 ">
              <input
                type="password"
                className="form-control rounded-5 p-2"
                placeholder="Password...."
                name="password"
                autoComplete={"off"}
              />
            </div>
            <div className="d-flex justify-content-evenly mb-4 p-2">
              <Link to="#42" className="text-decoration-none rounded-5 p-1 pe-2 pb-1 text-center" target="_blank" style={{background: "#8D6B92"}}>
                <Si42 size={40} color="#000000"/>
              </Link>
              <Link
                to="#github"
                className="text-decoration-none rounded-5 p-1 text-center" target="_blank" style={{background: "#8D6B92"}}>
                <SiGithub size={40} color="#000000"/>
              </Link>
              <Link
                to="#google"
                className="text-decoration-none rounded-5 p-1 text-center" target="_blank" style={{background: "#8D6B92"}}>
                <FcGoogle size={40} color="#000000"/>
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
