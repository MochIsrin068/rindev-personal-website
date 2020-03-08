import React from 'react'
import NavLink from './components/NavLink'
import NavLogo from './components/NavLogo'
import { ReactComponent as HomeLogo } from '../../assets/svg/synagogue-solid.svg'
import { ReactComponent as Pen } from '../../assets/svg/pen-nib-solid.svg'
import { ReactComponent as Person } from '../../assets/svg/user-circle-solid.svg'
import {HomeOutlined, MediumOutlined, UserOutlined} from "@ant-design/icons";

const Navigation = () => {
	return (
		<nav className='navbar'>
			<ul className='navbar-nav'>
				<NavLogo />
				<NavLink to='/' name='Home' logo={<HomeOutlined className='nav-logo' />} />
				<NavLink to='/blog' name='Blog' logo={<MediumOutlined className='nav-logo' />} />
				<NavLink to='/about' name='About' logo={<UserOutlined className='nav-logo' />} />
			</ul>
		</nav>
	)
}

export default Navigation
