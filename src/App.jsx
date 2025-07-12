import React from 'react'
import Users from './users/User'
import Home from './home/Home'
import Navbar from './navbar/Navbar'
import About from './about/About'
import Contact from './contact/Contact'
import { Route, Routes } from 'react-router'
import Layout from './Layout'
import NoMatch from './NoMatch'
import UserDetail from './users/UserDetail'

const App = () => {
	return (
		<div className='app-wrapper'>
			<Navbar />
			<main className='app-content'>
				<Routes>
					<Route element={<Layout />}>
						{/* index attribute is used to mrk the route as index route or the default route */}
						<Route index element={<Home />} />
						<Route path='users' element={<Users />}>
							<Route path=':userId' element={<UserDetail />} /> {/*/users/:userId */}
						</Route>
						<Route path='about' element={<About />} />
						<Route path='contact' element={<Contact />} />
						<Route path='*' element={<NoMatch />} /> {/* No Match Route */}
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
