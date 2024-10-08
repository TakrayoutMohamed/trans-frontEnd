import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

// layouts
import RootLayout from "@router/layouts/RootLayout";
import HomeLayout from "@router/layouts/HomeLayout";
import DashboardLayout from "@router/layouts/DashboardLayout";
import ProfileLayout from "@router/layouts/ProfileLayout";
import FriendsLayout from "@router/layouts/FriendsLayout";
import SettingLayout from "@router/layouts/SettingLayout";

// pages
import Home from "@publicPages/Home";
import SignUp from "@publicPages/not-signed-in/SignUp";
import SignIn from "@publicPages/not-signed-in/SignIn";
import AboutUs from "@publicPages/AboutUs";
import Team from "@publicPages/Team";
import Contact from "@publicPages/Contact";
import Profile from "@privatePages/Profile";
import Chat from "@privatePages/Chat";
import Game from "@privatePages/Game";
import Recent from "@privatePages/Recent";
import Friends from "@privatePages/Friends";
import FriendProfile from "@privatePages/FriendProfile";
import Details from "@privatePages/Details";
import Password from "@privatePages/Password";

// routers protection
import PrivateRoutes from "@router/PrivateRoutes";
import AuthorizationRoutes from "@router/AuthorizationRoutes";

const routingTree: RouteObject[] = createRoutesFromElements(
  <Route element={<RootLayout />}>
    <Route path="/" element={<HomeLayout />}>{/*landing page routing */}
      <Route index element={<Home />} /> {/* home page*/}
      <Route path="about-us" element={<AboutUs />} /> {/* about us*/}
      <Route path="team" element={<Team />} /> {/* team*/}
      <Route path="contact" element={<Contact />} /> {/* contact*/}
    </Route>
    <Route element={<AuthorizationRoutes />}>
      <Route path="sign-up" element={<SignUp />} /> {/* sign up*/}
      <Route path="sign-in" element={<SignIn />} /> {/* sign in*/}
    </Route>
    <Route element={<PrivateRoutes />}>
      <Route element={<DashboardLayout />}>
        <Route path="game" element={<Game />} /> {/*game */}
        <Route path="profile" element={<ProfileLayout />}>{/*profile layout */}
          <Route index element={<Profile />} /> {/* profile */}
          <Route path="recent" element={<Recent />} /> {/* Recent */}
          <Route path="friends" element={<FriendsLayout />}>{/* Friends layout*/}
            <Route index element={<Friends />} /> {/* Friends */}
            <Route path=":userName" element={<FriendProfile />} />{/* Friend Profile */}
          </Route>
        </Route>
        <Route path="chat" element={<Chat />} /> {/*chat */}
        <Route path="setting" element={<SettingLayout />}>{/*setting layout */}
          <Route index element={<Details />} /> {/*details */}
          <Route path="password" element={<Password />} /> {/*password */}
        </Route>
      </Route>
    </Route>
  </Route>
);

const router = createBrowserRouter(routingTree);

const MainRoutingComponent = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default MainRoutingComponent;
