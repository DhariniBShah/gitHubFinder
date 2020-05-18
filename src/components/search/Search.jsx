import React, { useState, useContext } from 'react';

import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';

const Search = () => {
	const githubContext = useContext(GithubContext);
	const { searchUsers, clearUsers, users } = githubContext;
	const alertContext = useContext(AlertContext);
	const { setAlert } = alertContext;

	const [text, setText] = useState('');

	const onChange = (event) => {
		setText(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		if (text.replace(/\s/g, '').length) {
			searchUsers(text);
			setText('');
		} else {
			setAlert('Please enter something', 'danger');
		}
	};
	return (
		<div className='container all-center'>
			<form
				onSubmit={onSubmit}
				className='form'
				style={{ display: 'flex', width: '100%' }}
			>
				<input
					type='text'
					name='text'
					placeholder='Search..'
					style={{ display: 'flex-start' }}
					value={text}
					onChange={onChange}
				/>
				<input
					type='submit'
					value='Search'
					className='btn btn-primary'
					style={{ display: 'flex-end' }}
				/>
			</form>
			{users.length > 0 && (
				<button className='btn btn-large-primary' onClick={clearUsers}>
					Clear
				</button>
			)}
		</div>
	);
};

export default Search;
