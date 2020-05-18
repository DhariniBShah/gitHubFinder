import React, { useState, useContext } from 'react';
import propTypes from 'prop-types';

import GithubContext from '../../context/github/GithubContext';

const Search = ({ setAlert }) => {
	const githubContext = useContext(GithubContext);
	const [text, setText] = useState('');

	const onChange = (event) => {
		setText(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		if (text === '') {
			setAlert('Please enter something', 'danger');
		} else {
			githubContext.searchUsers(text);
			setText(' ');
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
			{githubContext.users.length > 0 && (
				<button
					className='btn btn-large-primary'
					onClick={githubContext.clearUsers}
				>
					Clear
				</button>
			)}
		</div>
	);
};

export default Search;

Search.propTypes = {
	setAlert: propTypes.func.isRequired,
};
