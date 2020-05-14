import React, { Component } from 'react';
import propTypes from 'prop-types';

class Search extends Component {
	state = {
		text: '',
	};

	static propTypes = {
		searchUsers: propTypes.func.isRequired,
		clearUsers: propTypes.func.isRequired,
		showClear: propTypes.bool.isRequired,
		setAlert: propTypes.func.isRequired,
	};

	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	onSubmit = (event) => {
		event.preventDefault();
		if (this.state.text === '') {
			this.props.setAlert('Please enter something', 'danger');
		} else {
			this.props.searchUsers(this.state.text);
			this.setState({ text: '' });
		}
	};

	render() {
		const { clearUsers, showClear } = this.props;
		return (
			<div className='container all-center'>
				<form
					onSubmit={this.onSubmit}
					className='form'
					style={{ display: 'flex', width: '100%' }}
				>
					<input
						type='text'
						name='text'
						placeholder='Search..'
						style={{ display: 'flex-start' }}
						value={this.state.text}
						onChange={this.onChange}
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
	}
}
export default Search;
