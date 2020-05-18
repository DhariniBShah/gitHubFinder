import React from 'react';
const About = () => {
	return (
		<div className='container'>
			<h1>About this App</h1>
			<h4>React app to Search Github Users</h4>
			<h4>
				<strong>
					Created By <em>Dharini Shah</em>
				</strong>
			</h4>
			<h4 className='text-primary'>Current Version: v1.0.2</h4>
			<br />
			<p>
				<h2>Demonstrating the use of ~</h2>
				<ul>
					<li>Context API & App Level State</li>
					<li>React Hooks (useState, useEffect, useContext, useReducer, useRef)</li>
					<li>Flux Pattern Using Context & useContext/useReducer Hooks</li>
					<li>Working with Api's (async) using axios</li>
					<li>
						React Fundamentals (Components, props, state, router [react-router-dom,
						Switch, Route])
					</li>
					<li>Minimilistic Responsive UI Design with css & css-grid</li>
				</ul>
			</p>
			<br />
			<p>
				<h2> Previous Versions </h2>
				<h4>v1.0.1</h4>
				All class level components were refactored to functional components and
				state management was done using <stron>React Hooks</stron>
			</p>
			<p>
				<h4>v1.0.0</h4>
				Used React-Fundamentals, functional and class-level components, lifecycle
				methods,React-Router-Dom
			</p>
		</div>
	);
};

export default About;
