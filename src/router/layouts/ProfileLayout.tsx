import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

const ProfileLayout = () => {
  return (
	<Fragment>
		<div className="bg-info">ProfileLayout</div>
		<Outlet/>
	</Fragment>
  )
}

export default ProfileLayout