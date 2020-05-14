import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/search/Search';
import './App.css';

class App extends Component {
	state = {
		users: [],
		loading: false,
	};
	async componentDidMount() {
		this.setState({ loading: true });
		const res = axios.get(
			`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		this.setState({ users: (await res).data, loading: false });
	}
	render() {
		const { users, loading } = this.state;
		return (
			<div className='App'>
				<Navbar />
				<Search />
				<div className='container'>
					<Users users={users} loading={loading} />
				</div>
			</div>
		);
	}
}

export default App;
