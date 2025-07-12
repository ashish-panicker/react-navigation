import React, { useState } from 'react'
import './User.css'

const dummyUsers = [
	{ id: '1', fullName: 'Alice Smith', email: 'alice@example.com' },
	{ id: '2', fullName: 'Bob Johnson', email: 'bob@example.com' },
	{ id: '3', fullName: 'Charlie Brown', email: 'charlie@example.com' },
	{ id: '4', fullName: 'Diana Prince', email: 'diana@example.com' },
	{ id: '5', fullName: 'Eve Adams', email: 'eve@example.com' },
	{ id: '6', fullName: 'Frank White', email: 'frank@example.com' },
	{ id: '7', fullName: 'Grace Hopper', email: 'grace@example.com' },
	{ id: '8', fullName: 'Harry Potter', email: 'harry@example.com' },
]

const Users = () => {
	// Local state for search term, not tied to URL search params
	const [searchTerm, setSearchTerm] = useState('')

	const handleSearch = (event) => {
		setSearchTerm(event.target.value)
	}

	const filteredUsers = dummyUsers.filter((user) =>
		user.fullName.toLowerCase().includes(searchTerm.toLocaleLowerCase())
	)

	return (
		<div className='users-container'>
			<h2 className='users-title'>Our Users</h2>
			<div className='search-bar'>
				<input
					type='text'
					placeholder='Search users by name...'
					value={searchTerm}
					onChange={handleSearch}
					className='search-input'
				/>
			</div>
			{filteredUsers.length > 0 ? (
				<ul className='user-list'>
					{filteredUsers.map((user) => (
						<li key={user.id} className='user-item'>
							<div className='user-info'>
								<span className='user-name'>{user.fullName}</span>
								<span className='user-email'>{user.email}</span>
							</div>
						</li>
					))}
				</ul>
			) : (
				<p className='no-users-found'>No users found matching your search.</p>
			)}
		</div>
	)
}

export default Users
