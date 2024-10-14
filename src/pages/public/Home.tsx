import { Fragment } from "react/jsx-runtime";
import styles from "@publicPages/styles/Home.module.css";
import {
  Description,
  Heading,
} from "@/src/pages/public/components/HeaderAndDescription";
import { pingPongVector } from "@/media-exporting";

const Home = () => {
  return (
    <Fragment>
      <main className={"position-relative p-2 pt-0 "}>
        <section className="bg-dangerr position-relative mb-5 mt-3" style={{ height: "24em" }} >
          <div className="bg-successs position-absolute z-1 d-flex justify-content-end flex-column h-100  ps-4" style={{width:"65%"}}>
            <div className="h1 ">BEST <span style={{color:"#EE0DFF"}}>GAME</span></div>
            <div className="h1 ">PLAYING TODAY</div>
            <br/>
            <div className="mb-2">
              We captivate a multitude of users with our game. Our unwavering mission is to spread the thrill  and excitement of ping pong to every corner of the world.
            </div>
          </div>
          <div
            className="bg-success-subtlee position-absolute z-0 top-0 end-0 d-flex flex-row-reverse"
            style={{ height: "100%", width: "60%" }}
          >
            <img
              src={pingPongVector}
              alt="pingPongVector"
              width="500px"
              className="bg-infso img-fluid "
              style={{ minWidth: "", maxWidth: "80%", marginRight:"15%" }}
            />
          </div>
        </section>
        <section className="bg-danger" style={{marginTop:"150px"}}>
          <Heading className="">this is the header of section 2 </Heading>
          <Description className="">
            Lorem ipsum delit. Repudiarrem ipsum delit. Repudiarrem ipsum delit.
            Repudiar RepudiarRepudiarRepudiarRepudiar.
          </Description>
        </section>
        <section>
        </section>
      </main>
      <footer></footer>
    </Fragment>
  );
};

export default Home;
