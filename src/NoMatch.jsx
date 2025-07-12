import React from 'react'
import { Link } from 'react-router'

const NoMatch = () => {
	return (
		<main style={{ padding: '1rem 0', textAlign: 'center' }}>
			<h2>404 - Page Not Found!</h2>
			<p>Sorry, there's nothing here.</p>
			<Link to='/'>Go to Home</Link>
		</main>
	)
}

export default NoMatch
