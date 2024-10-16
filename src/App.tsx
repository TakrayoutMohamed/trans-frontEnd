import MainRoutingComponent from "@router/MainRoutingComponent.tsx"
import { store } from "./states/store"
import { setAuthenticated, setUnauthenticated } from "./states/authentication/authenticatorSlice";

function App() {
  const dispatch = store.dispatch;
  dispatch(setUnauthenticated());
  return (
    <>
      <MainRoutingComponent ></MainRoutingComponent>
      {/* <div>App</div> */}
    </>
  )
}

export default App
