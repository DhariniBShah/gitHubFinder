import React, { useState, useContext } from 'react';
import propTypes from 'prop-types';

import GithubContext from '../../context/github/GithubContext';

const Search = ({ clearUsers, showClear, setAlert }) => {
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
			{showClear && (
				<button className='btn btn-large-primary' onClick={clearUsers}>
					Clear
				</button>
			)}
		</div>
	);
};

export default Search;

Search.propTypes = {
	clearUsers: propTypes.func.isRequired,
	showClear: propTypes.bool.isRequired,
	setAlert: propTypes.func.isRequired,
};
