import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouteObject,
	RouterProvider,
} from "react-router-dom";

// layouts
import RootLayout from "./layouts/RootLayout";
import HomeLayout from "./layouts/HomeLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import ProfileLayout from "./layouts/ProfileLayout";
import FriendsLayout from "./layouts/FriendsLayout";
import SettingLayout from "./layouts/SettingLayout";

// pages
import Home from "../pages/public/Home";
import SignUp from "../pages/public/not-signed-in/SignUp";
import SignIn from "../pages/public/not-signed-in/SignIn";
import AboutUs from "../pages/public/AboutUs";
import Team from "../pages/public/Team";
import Contact from "../pages/public/Contact";
import Profile from "../pages/private/Profile";
import Chat from "../pages/private/Chat";
import Game from "../pages/private/Game";
import Recent from "../pages/private/Recent";
import Friends from "../pages/private/Friends";
import FriendProfile from "../pages/private/FriendProfile";
import Details from "../pages/private/Details";
import Password from "../pages/private/Password";

const routingTree: RouteObject[] = createRoutesFromElements(
	<Route element={<RootLayout />}>
		<Route path="/" element={<HomeLayout />}> {/*landing page routing */}
			<Route index element={<Home />} /> {/* home page*/}
			<Route path="about-us" element={<AboutUs />} /> {/* about us*/}
			<Route path="team" element={<Team />} /> {/* team*/}
			<Route path="contact" element={<Contact />} /> {/* contact*/}
		</Route>
		<Route path="sign-up" element={<SignUp />} /> {/* sign up*/}
		<Route path="sign-in" element={<SignIn />} /> {/* sign in*/}
		<Route  element={<DashboardLayout />}>
			<Route path="game" element={<Game />} /> {/*game */}
			<Route path="profile" element={<ProfileLayout />}> {/*profile layout */}
				<Route index element={<Profile />} /> {/* profile */}
				<Route path='recent' element={<Recent />} /> {/* Recent */}
				<Route path='friends' element={<FriendsLayout />} > {/* Friends layout*/}
					<Route index element={<Friends />}/> {/* Friends */}
					<Route path=":userName" element={<FriendProfile />}/> {/* Friend Profile */}
				</Route>
			</Route >
			<Route path="chat" element={<Chat />} /> {/*chat */}
			<Route path="setting" element={<SettingLayout/>}> {/*setting layout */}
				<Route index element={<Details />} /> {/*details */}
				<Route path="password" element={<Password />} /> {/*password */}
			</Route>
		</Route>
	</Route>
);

const router = createBrowserRouter(routingTree);

const MainRoutingComponent = () => {
	return <RouterProvider router={router}></RouterProvider>;
};

export default MainRoutingComponent;
