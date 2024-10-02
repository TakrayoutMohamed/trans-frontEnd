import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts
import RootLayout from "./layouts/RootLayout";

// pages
import Home from "../pages/public/Home";
import SignUp from "../pages/public/not-signed-in/SignUp";
import SignIn from "../pages/public/not-signed-in/SignIn";
import AboutUs from "../pages/public/AboutUs";
import Team from "../pages/public/Team";
import Contact from "../pages/public/Contact";

const routingTree = (
  <>
    <Route path="/" element={<RootLayout />}>{/**landing page routing */}
      <Route index element={<Home />} />{/** home page*/}
      <Route path="about-us" element={<AboutUs />} /> {/** about us*/}
      <Route path="team" element={<Team />} />{/** team*/}
      <Route path="contact" element={<Contact />} />{/** contact*/}
    </Route>

    <Route path="sign-up" element={<SignUp />} /> {/** sign up*/}
    <Route path="sign-in" element={<SignIn />} />{/** sign in*/}
  </>
);

const router = createBrowserRouter(createRoutesFromElements(routingTree));

const MainRoutingComponent = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default MainRoutingComponent;