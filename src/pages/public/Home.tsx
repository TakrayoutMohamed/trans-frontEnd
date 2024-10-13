import { Fragment } from "react/jsx-runtime";
// import styles from "./styles/Home.module.css";
import HeaderDescription, {
  Props,
} from "@/src/pages/public/components/HeaderAndDescription";
import { pingPongVector } from "@/media-exporting";

const Home = () => {
  const firstComponent: Props = {
    header: { className: "h1 ", content: "this is the header" },
    description: {
      className: "",
      content:
        "Lorem ipsum delit. Repudiarrem ipsum delit. Repudiarrem ipsum delit. Repudiar.",
    },
  };
  return (
    <Fragment>
      <main>
        <section className="position-relative row bg-danger">
          <div className="col-md-12 col-xs-6 my-auto position-absolute z-1">
            <HeaderDescription
              header={firstComponent.header}
              description={firstComponent.description}
            />
          </div>
          <div className="col-md-12 col-xs-6 position-absolute z-0">
            <img
              src={pingPongVector}
              alt="pingPongVector"
              width="400px"
              className="float-end bg-success  img-fluid z-0"
            />
          </div>
        </section>
        <section>
          {/* <HeaderDescription
            header={firstComponent.header}
            description={firstComponent.description}
          /> */}
        </section>
        <section>
          {/* <HeaderDescription
            header={firstComponent.header}
            description={firstComponent.description}
          /> */}
        </section>
      </main>
      <footer></footer>
    </Fragment>
  );
};

export default Home;
