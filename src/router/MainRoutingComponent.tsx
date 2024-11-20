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
import RegistrationLayout from "@router/layouts/RegistrationLayout";
import ChatLayout from "@router/layouts/ChatLayout";

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
import ChatArea from "@privatePages/ChatArea";

// routers protection
import PrivateRoutes from "@router/PrivateRoutes";
import AuthorizationRoutes from "@router/AuthorizationRoutes";

const routingTree: RouteObject[] = createRoutesFromElements(
  <Route element={<RootLayout />}>
    {/*landing page routing */}
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<Home />} /> {/* home page*/}
      <Route path="about-us" element={<AboutUs />} /> {/* about us*/}
      <Route path="team" element={<Team />} /> {/* team*/}
      <Route path="contact" element={<Contact />} /> {/* contact*/}
    </Route>
    <Route element={<AuthorizationRoutes />}>
      <Route element={<RegistrationLayout />}>
        <Route path="sign-up" element={<SignUp />} /> {/* sign up*/}
        <Route path="sign-in" element={<SignIn />} /> {/* sign in*/}
      </Route>
    </Route>
    <Route element={<PrivateRoutes />}>
      <Route element={<DashboardLayout />}>
        <Route path="game" element={<Game />} /> {/*game */}
        {/*profile layout */}
        <Route path="profile" element={<ProfileLayout />}>
          <Route index element={<Profile />} /> {/* profile */}
          <Route path="me" element={<Profile />} /> {/* profile */}
          <Route path="recent" element={<Recent />} /> {/* Recent */}
          {/* Friends layout*/}
          <Route path="friends" element={<FriendsLayout />}>
            <Route index element={<Friends />} /> {/* Friends */}
            {/* Friend Profile */}
            <Route path=":userName" element={<FriendProfile />} />
          </Route>
        </Route>
        {/*chat */}
        <Route path="chat" element={<ChatLayout />}>
          <Route index element={<Chat />} />
          <Route path=":userName" element={<ChatArea />} />
        </Route>
        {/*setting layout */}
        <Route path="setting" element={<SettingLayout />}>
          <Route index element={<Details />} /> {/*details */}
          <Route path="password" element={<Password />} /> {/*password */}
        </Route>
      </Route>
    </Route>
  </Route>
);

const router = createBrowserRouter(routingTree, {
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
  },
});

const MainRoutingComponent = () => {
  return (
    <RouterProvider
      future={{
        v7_startTransition: true,
      }}
      router={router}
    ></RouterProvider>
  );
};

export default MainRoutingComponent;
