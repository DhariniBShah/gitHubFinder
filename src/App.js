import React, { useState, Fragment } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/search/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';

import GithubState from './context/github/GithubState';

import './App.css';

const App = () => {
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {
		setAlert({ message, type });
		setTimeout(() => {
			setAlert(null);
		}, 3000);
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
		<GithubState>
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
										<Search setAlert={showAlert} />
										<Users />
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
								<User {...props} getUserRepos={getUserRepos} repos={repos} />
							)}
						/>
					</Switch>
				</div>
			</Router>
		</GithubState>
	);
};

export default App;
