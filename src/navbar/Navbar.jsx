import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
	const navLinkStyle = ({ isActive }) => ({
		fontWeight: isActive ? 'bold' : 'normal',
		textDecoration: isActive ? 'underline' : 'none',
		marginRight: '1rem',
	})
	return (
		<header className='navbar-header'>
			<h1 className='navbar-title'>My Application</h1>
			<nav className='navbar-nav'>
				<NavLink style={navLinkStyle} to='/' className='nav-item'>
					Home
				</NavLink>
				<NavLink style={navLinkStyle} to='/users' className='nav-item'>
					Users
				</NavLink>
				<NavLink style={navLinkStyle} to='/about' className='nav-item'>
					About
				</NavLink>
				<NavLink style={navLinkStyle} to='/contact' className='nav-item'>
					Contact
				</NavLink>
			</nav>
		</header>
	)
}

export default Navbar
