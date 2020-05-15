import React from 'react';
const About = () => {
	return (
		<div className='container'>
			<h1>About this App</h1>
			<p>A simple webapp app to Search Github Users</p>
			<p className='text-primary'>Version 1.0.1</p>
			<br />
			<p>
				<h2>Demonstrating the use of ~</h2>
				<ul>
					<li>React Hooks (useState, useEffect, useContext, useReducer, useRef)</li>
					<li>Context API & App Level State</li>
					<li>Flux Pattern Using Context & useContext/useReducer Hooks</li>
					<li>Working with Api's (async) using axios</li>
					<li>React Fundamentals (Components, props, state, router)</li>
					<li>Minimilistic Responsive UI Design with css & css-grid</li>
				</ul>
			</p>
			<br />
			<p>
				<h2>Regarding previous version</h2>
				v1.0.0 used Old School React Fundamentals, functional and class level
				components to create this app! it was later refactored to use React Hooks
				and Context Api to comply with industry standards
			</p>
			<br />
			<p>
				<strong>
					<em>- Created By Dharini Shah</em>
				</strong>
			</p>
		</div>
	);
};

export default About;
