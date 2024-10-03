import { Outlet } from 'react-router-dom'
import { Fragment } from 'react/jsx-runtime'

const FriendsLayout = () => {
  return (
    <Fragment>
        <div>FriendsLayout</div>
        <Outlet/>
    </Fragment>
  )
}

export default FriendsLayout