import React from 'react'
import Users from './users/User'
import Home from './home/Home'
import Navbar from './navbar/Navbar'
import About from './about/About'
import Contact from './contact/Contact'

const App = () => {
	return (
		<div className='app-wrapper'>
			<Navbar /> {/* Render the Navbar component */}
			<main className='app-content'>
				{/*
          In a real application with routing, you would place your Routes here.
          For this example, we'll just render Home and Users directly to show them.
        */}
				<Home />
				<Users />
        <About />
        <Contact />
			</main>
			<footer className='app-footer'>
				<p>&copy; 2025 My Application</p>
			</footer>
		</div>
	)
}

export default App
