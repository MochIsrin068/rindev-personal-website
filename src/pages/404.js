import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
	return (
		<div>
			<h1>Ups... Seems like you're visiting wrong page</h1>
			<p>
				Take me back to{' '}
				<Link to='/' className='link'>
					Home
				</Link>
			</p>
		</div>
	)
}

export default Page404
