import React, { useState } from 'react';
import propTypes from 'prop-types';

const Search = ({ searchUsers, clearUsers, showClear, setAlert }) => {
	const [text, setText] = useState('');

	const onChange = (event) => {
		setText(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		if (text === '') {
			setAlert('Please enter something', 'danger');
		} else {
			searchUsers(text);
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
	searchUsers: propTypes.func.isRequired,
	clearUsers: propTypes.func.isRequired,
	showClear: propTypes.bool.isRequired,
	setAlert: propTypes.func.isRequired,
};
