import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/search/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';

import './App.css';

class App extends Component {
	state = {
		users: [],
		loading: false,
		alert: null,
		user: {},
	};

	clearUsers = () => {
		this.setState({ users: [], loading: false });
	};

	setAlert = (message, type) => {
		this.setState({ alert: { message, type } });
		setTimeout(() => {
			this.setState({ alert: null });
		}, 3000);
	};

	searchUsers = async (text) => {
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/search/users?
			q=${text}
			&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
			&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}
			&per_page=99`
		);
		this.setState({ users: res.data.items, loading: false });
	};

	getUser = async (login) => {
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/users/${login}?
			&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
			&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}
			`
		);
		this.setState({ user: res.data, loading: false });
	};

	render() {
		const { users, loading, alert, user } = this.state;
		return (
			<Router>
				<div className='App'>
					<Navbar />
					<Switch>
						{/*rendering multiple components in Route*/}
						<Route
							exact
							path='/'
							render={(props) => (
								<Fragment>
									<div className='container'>
										<Alert alert={alert} />
										<Search
											searchUsers={this.searchUsers}
											clearUsers={this.clearUsers}
											showClear={users.length > 0 ? true : false}
											setAlert={this.setAlert}
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
								<User {...props} getUser={this.getUser} user={user} loading={loading} />
							)}
						/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
