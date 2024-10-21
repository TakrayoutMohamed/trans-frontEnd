import MainRoutingComponent from "@router/MainRoutingComponent.tsx"
import { RootState, store } from "./states/store"
import { setAuthenticated, setUnauthenticated } from "./states/authentication/authenticatorSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const accessToken = useSelector((state: RootState) => state.accessToken.accessToken)
  const dispatch = store.dispatch;
  console.log("accessToken from app.tsx {"+ accessToken + "}");
  useEffect(() => {
    (accessToken) ? dispatch(setAuthenticated()) : dispatch(setUnauthenticated());
  },[accessToken])
  return (
    <>
      <MainRoutingComponent ></MainRoutingComponent>
      {/* <div>App</div> */}
    </>
  )
}

export default App
