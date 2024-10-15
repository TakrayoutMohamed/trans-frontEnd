import { Fragment } from "react/jsx-runtime";
import { home } from "@publicPagesStyles/index";
import { Description, Heading } from "@publicComponents/HeaderAndDescription";
import {
  pingPongVector,
  snowPingPongTable,
  forestPingPongTable,
  desertPingPongTable,
  videoCaption,
  brandIcon,
} from "@/media-exporting";
import MultipleMedia from "./components/MultipleMedia";
import { Link } from "react-router-dom";
import ImagesIcon from "../components/ImageIcon";

const Home = () => {
  return (
    <Fragment>
      <main className={`position-relative p-2 pt-0 ${home}`}>
        <section
          className="bg-dangerr position-relative mt-3"
          style={{ height: "24rem" }}
        >
          <div
            className="bg-successs position-absolute z-1 d-flex justify-content-end flex-column h-100  ps-4"
            style={{ width: "65%" }}
          >
            <div className="h1 ">
              BEST <span style={{ color: "#EE0DFF" }}>GAME</span>
            </div>
            <div className="h1 ">PLAYING TODAY</div>
            <br />
            <div className="mb-2">
              We captivate a multitude of users with our game. Our unwavering
              mission is to spread the thrill and excitement of ping pong to
              every corner of the world.
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
              style={{ minWidth: "", maxWidth: "80%", marginRight: "15%" }}
            />
          </div>
        </section>
        <section
          className="bg-dangerr d-flex flex-column justify-content-center p-4 "
          style={{ marginTop: "10rem",background: "#080228",
        }}
        >
          <Heading className="h1 text-center pb-3">
            BEST <span style={{ color: "#EE0DFF" }}>GAMING</span> EXPERIENCE
          </Heading>
          <Description className="text-center ">
            by give you multiple maps and different universe
          </Description>
          <MultipleMedia className="row py-5">
            <img src={snowPingPongTable} alt="snow ping pong table" className="col-4 " />
            <img src={forestPingPongTable} alt="forest ping pong table" className="col-4" />
            <img src={desertPingPongTable} alt="desert ping pong table" className="col-4" />
          </MultipleMedia>
        </section>
        <section
          className="bg-dangerr d-flex flex-column justify-content-center p-4 "
          style={{ marginTop: "10rem",background: "",
        }}
        >
          <Heading className="h1 text-center ">
            OUR GOAL IS TO CREATE <span style={{ color: "#EE0DFF" }}>LIFELIKE</span>
          </Heading>
          <Heading className="h1 text-center pb-3">
            <span style={{ color: "#EE0DFF" }}>VIRTUAL</span> TABLE TENNIS EXPERIENCES
          </Heading>
          <Description className="text-center ">
            Our mission to entertain the world goes beyond gaming. Our teams create innovative and
          </Description>
          <Description className="text-center ">
            thrilling ping pong experiences for everyone. Here, I will explain the user experience (UX) of our website.
          </Description>
          <MultipleMedia className="row py-5">
            <img src={videoCaption} alt="video caption" className="" />
          </MultipleMedia>
        </section>
      </main>
      <hr className="m-0 mx-5 p-0 "/>
      <footer className="p-2 py-4">
        <div className="row mx-4">
          <div className="col-4">
            <Link to="instagram">IG</Link>
            <Link to="">X</Link>
            <Link to="">IN</Link>
          </div>
          <div className="col-4 row m-0 ">
            {/* <ImagesIcon imgPath={brandIcon} imgSize={{width: "20em", height: "20em"}}/> */}
            <img src={brandIcon} alt="" width="20em" height="20em" className="col-2 m-0 p-0" />
            <span className="col-6 text-nowrap m-0 p-0">A product of</span>
          </div>
          <div className="col-4 col-sm-12 col-md-4">© 2024 1337team. All rights reserved</div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Home;

