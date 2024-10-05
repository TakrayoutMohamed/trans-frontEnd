import { Outlet } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"

const SettingLayout = () => {
  return (
    <Fragment>
      <div>SettingLayout</div>
      <Outlet />
    </Fragment>
  )
}

export default SettingLayout