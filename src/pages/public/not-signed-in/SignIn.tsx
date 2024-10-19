import {
  signInAnimation,
  signIn,
  signInStick,
  signInRenderAnimation,
} from "@publicPagesStyles/index.ts";
import { useEffect } from "react";
import { BiSolidLeftArrow } from "react-icons/bi";
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
      className={`d-flex flex-row-reverse animationSelectorSignIn w-100 ${signInRenderAnimation}`}
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
            <div className="mb-4 p-2 text-center">
              <Link to="#42" target="_blank"> 42 </Link>
              <Link to="#github" target="_blank"> GH </Link>
              <Link to="#google" target="_blank"> GG </Link>
            </div>
            <div className="text-center">
              <button type="submit" className="rounded-5 px-5 py-1 h4 m-0 text-nowrap">SIGN IN</button>
            </div>
          </form>
        </div>
      </div>
      <div className={`border d-flex my-auto mx-3 ms-5 p-0  ${signIn}`}>
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
