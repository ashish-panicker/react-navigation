import React from 'react'
import { Link, useParams } from 'react-router'

const UserDetail = () => {
	const { userId } = useParams()
	return (
		<div
			style={{ padding: '1rem', border: '1px solid #eee', marginTop: '1rem' }}>
			<h3>User Details for ID: {userId}</h3>
			<p>This component displays details for a specific user.</p>
			<Link to='/users'>Back to Users List</Link>
		</div>
	)
}

export default UserDetail
