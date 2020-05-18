import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer';
import {
	SEARCH_USERS,
	CLEAR_USERS,
	GET_USER,
	GET_REPOS,
	SET_LOADING,
} from '../types';

const GithubState = (props) => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	//Search Users
	const searchUsers = async (text) => {
		setLoading(true);

		const res = await axios.get(
			`https://api.github.com/search/users?
			q=${text}
			&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
			&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}
			&per_page=100`
		);

		dispatch({
			type: SEARCH_USERS,
			payload: res.data.items,
		});
	};

	//Get User
	const getUser = async (login) => {
		setLoading();
		const res = await axios.get(
			`https://api.github.com/users/${login}?
			&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
			&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}
			`
		);

		dispatch({
			type: GET_USER,
			payload: res.data,
		});
	};

	//Get Repos

	//Clear Users
	const clearUsers = () => {
		dispatch({ type: CLEAR_USERS });
	};

	//Set Loading
	const setLoading = () =>
		dispatch({
			type: SET_LOADING,
		});

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				loading: state.loading,
				searchUsers,
				clearUsers,
				getUser,
			}}
		>
			{props.children}
		</GithubContext.Provider>
	);
};
export default GithubState;