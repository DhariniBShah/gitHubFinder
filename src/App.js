import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/search/Search';
import Alert from './components/layout/Alert';
import './App.css';

class App extends Component {
	state = {
		users: [],
		loading: false,
		alert: null,
	};

	clearUsers = () => {
		this.setState({ users: [], loading: false, alert: null });
	};

	setAlert = (message, type) => {
		this.setState({ alert: { message, type } });
	};

	searchUsers = async (text) => {
		console.log(text.length);
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/search/users?
			q=${text}
			&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
			&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}
			&per_page=99`
		);
		this.setState({ users: res.data.items, loading: false, alert: null });
	};

	render() {
		const { users, loading, alert } = this.state;
		return (
			<div className='App'>
				<Navbar />
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
			</div>
		);
	}
}

export default App;
