import React from 'react'
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";



const routingTree = (<>
	<Route path="/" element={""}>

	</Route>
</>);



const router = createBrowserRouter(
	createRoutesFromElements(
		routingTree
	)
);

const MainRoutingComponent = () => {
  return (
	<RouterProvider router={router}></RouterProvider>
  )
}

export default MainRoutingComponent;