import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Canvas from '../Canvas'
import Login from '../Login'
import Signup from '../Signup'

import './landing.css'

const Landing = () => {
	return (
		<div>
			<Canvas color={['#141e30', '#243b55']} size={5} depth={5} geometry="cube" />
			<div className="wrapper">
				<h1 className="header">3D Heroes</h1>
				<h2 className="subheader">Create your own 3D background</h2>
				<Link to="/create">
					<button className="button">Get started</button>
				</Link>
			</div>
			<Login />
			<Signup />
		</div>
	)
}

export default Landing
