import { signUpAnimation, signUpRenderAnimation, signUp, signUpStick } from "@publicPagesStyles/";
import { useEffect } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  useEffect(() => {
  },[]);
  const navigate = useNavigate();
  const startAnimationSignUp = (): void => {
    const animation = document.querySelector(".animationSelectorSignUp");
    animation?.classList.remove(signUpRenderAnimation);
    animation?.classList.add(signUpAnimation);
    setTimeout(() => {
      navigate("/sign-in");
    }, 700);
  };
  return (
    <div className={`d-flex animationSelectorSignUp w-100 ${signUpRenderAnimation} `}>
      <div className="w-100 ">
        <div className="d-flex justify-content-center h-100">
          <form action="#" className="w-75 my-auto">
            <div className="mb-4">
              <input
                type="text"
                className="form-control rounded-5 p-2"
                placeholder="Name...."
                name="name"
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
            <div className="mb-4">
              <input
                type="text"
                className="form-control rounded-5 p-2"
                placeholder="Email...."
                name="email"
                autoComplete={"off"}
              />
            </div>
            <div className="mb-4 p-2 text-center">
              <Link to="#42" target="_blank"> 42 </Link>
              <Link to="#github" target="_blank"> GH </Link>
              <Link to="#google" target="_blank"> GG </Link>
            </div>
            <div className="text-center">
              <button type="submit" className="rounded-5 px-5 py-1 h4 m-0 text-nowrap">SIGN UP</button>
            </div>
          </form>
        </div>
      </div>
      <div className={`border d-flex my-auto mx-3 me-5 p-0  ${signUp}`}>
        <p
          className="text-center h4 m-1"
          onClick={() => startAnimationSignUp()}
        >
          SIGN
          <BiSolidRightArrow className="m-0 me-2 my-3" size="1em" />
          IN
        </p>
      </div>
      <div className={`my-auto ms-4 ${signUpStick} `}></div>
    </div>
  );
};

export default SignUp;
