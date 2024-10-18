import { signUpAnimation, signUpRenderAnimation, signUp, signUpStick } from "@publicPagesStyles/";
import { BiSolidRightArrow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const startAnimation = (): void => {
    console.log("signUp start animation");
    const animation = document.querySelector(".signUpAnimations");
    animation?.classList.add(signUpAnimation);
    console.log(animation?.classList);
    setTimeout(() => {
      navigate("/sign-in");
      animation?.classList.remove(signUpAnimation);
    }, 1000);
  };
  return (
    <div className={`d-flex signUpAnimations w-100 ${signUpRenderAnimation}`}>
      <div className="bg-danger-subtle w-100 ">
        signUp content Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Laborum vel facere inventore vitae dolore nobis, explicabo impedit
        consectetur, voluptatum nostrum voluptas ullam sint cupiditate illo
        temporibus. Nostrum cum pariatur impedit voluptas laborum ad dolores, ab
        asperiores labore quos voluptatibus veritatis harum ipsum excepturi
        nobis ullam beatae assumenda similique tenetur. Alias deleniti placeat
        aliquam libero magni eaque! Mollitia accusamus voluptas accusantium
        dignissimos quasi sint, adipisci fugit. Ratione dolorum aspernatur eum
        id perspiciatis porro libero eveniet deserunt, exercitationem ex!
        Incidunt, nostrum, delectus facilis, architecto excepturi laboriosam
        voluptate quae et provident sunt veritatis perspiciatis doloribus. Hic
        saepe deserunt exercitationem enim impedit aut fugiat nostrum reiciendis
        eos, rerum tempora sapiente ad laborum adipisci veritatis, et repellat
        quidem repellendus molestias qui dicta totam inventore aliquam?
        Voluptate quis ipsum laudantium, exercitationem totam ea dolorem, sint
        velit autem nemo earum soluta suscipit voluptatum quod. Itaque nobis at
        assumenda. Minima inventore cum laboriosam quia repellendus sunt nostrum
        eligendi ad fuga quas vitae ullam id distinctio dolorum eaque eius ipsa
        debitis molestias reprehenderit, recusandae illo quasi est aut? Eos,
        earum magnam doloremque omnis doloribus velit iste voluptate unde.
        Voluptatum sequi, eveniet dolorem harum consequuntur aut ullam quaerat
        reprehenderit ex debitis magnam minima doloremque cum quos? Deserunt
        esse quidem possimus.
      </div>
      <div className={`border d-flex my-auto mx-3 p-1  ${signUp}`}>
        <p
          className="bg-dangerr text-center h4 m-auto"
          onClick={() => startAnimation()}
        >
          SIGN
          <BiSolidRightArrow className="m-0 me-2 my-3" size="1em" />
          UP
        </p>
      </div>
      <div className={` bg-primary-subtlee my-auto ${signUpStick} `}></div>
    </div>
  );
};

export default SignUp;
