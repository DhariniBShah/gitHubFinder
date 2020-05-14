import React, { Component } from 'react';
class Search extends Component {
	render() {
		return (
			<div className='container'>
				<form className='form' style={{ display: 'flex' }}>
					<input
						type='text'
						name='text'
						placeholder='Search Users..'
						style={{ display: 'flex-start' }}
					/>
					<input
						type='submit'
						value='Search'
						className='btn btn-primary'
						style={{ display: 'flex-end' }}
					/>
				</form>
			</div>
		);
	}
}
export default Search;
