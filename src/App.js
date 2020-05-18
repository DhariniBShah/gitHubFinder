import React, { useState, Fragment } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/search/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';

import './App.css';

const App = () => {
	const [users, setUsers] = useState([]);
	const [user, setUser] = useState({});
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [alert, setAlert] = useState(null);

	const clearUsers = () => {
		setUsers([]);
		setLoading(false);
	};

	const showAlert = (message, type) => {
		setAlert({ message, type });
		setTimeout(() => {
			setAlert(null);
		}, 3000);
	};

	const searchUsers = async (text) => {
		setLoading(true);
		const res = await axios.get(
			`https://api.github.com/search/users?
			q=${text}
			&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
			&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}
			&per_page=100`
		);

		setUsers(res.data.items);
		setLoading(false);
	};

	const getUser = async (login) => {
		setLoading(true);
		const res = await axios.get(
			`https://api.github.com/users/${login}?
			&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
			&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}
			`
		);

		setUser(res.data);
		setLoading(false);
	};

	const getUserRepos = async (login) => {
		setLoading(true);

		const res = await axios.get(
			`https://api.github.com/users/${login}/repos?
			&per_page=5
			&sort=created_at&order=desc
			&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
			&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}
			`
		);

		setRepos(res.data);
		setLoading(false);
	};

	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Switch>
					{/*rendering multiple components in Route*/}
					<Route
						exact
						path='/'
						render={() => (
							<Fragment>
								<div className='container'>
									<Alert alert={alert} />
									<Search
										searchUsers={searchUsers}
										clearUsers={clearUsers}
										showClear={users.length > 0 ? true : false}
										setAlert={showAlert}
									/>
									<Users users={users} loading={loading} />
								</div>
							</Fragment>
						)}
					/>
					{/*rendering single component in Route*/}
					<Route exact path='/about' component={About} />
					<Route
						exact
						path='/user/:login'
						render={(props) => (
							<User
								{...props}
								getUser={getUser}
								user={user}
								getUserRepos={getUserRepos}
								repos={repos}
								loading={loading}
							/>
						)}
					/>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
