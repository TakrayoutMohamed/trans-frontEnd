import { Fragment } from 'react'
import { profileLayout } from '../styles'
import { Outlet } from 'react-router-dom'

const ProfileLayout = () => {
  return (
	<Fragment>
		<div className={`${profileLayout}`}>
		<Outlet/>
		</div>
	</Fragment>
  )
}

export default ProfileLayout