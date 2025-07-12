import React from 'react'
import Users from './users/User'
import Home from './home/Home'
import Navbar from './navbar/Navbar'
import About from './about/About'
import Contact from './contact/Contact'
import { Route, Routes } from 'react-router'
import Layout from './Layout'

const App = () => {
	return (
		<div className='app-wrapper'>
			<Navbar />
			<main className='app-content'>
				<Routes>
					<Route element={<Layout />}>
						<Route path='home' element={<Home />} />
						<Route path='users' element={<Users />} />
						<Route path='about' element={<About />} />
						<Route path='contact' element={<Contact />} />
					</Route>
				</Routes>
			</main>
			<footer className='app-footer'>
				<p>&copy; 2025 My Application</p>
			</footer>
		</div>
	)
}

export default App
