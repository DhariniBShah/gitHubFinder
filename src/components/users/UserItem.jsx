import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
	return (
		<div className='card text-center text-light'>
			<img
				src={avatar_url}
				alt='avatar'
				className='round-img'
				style={{ width: '140px' }}
			/>
			<h3>{login}</h3>

			<Link to={`/user/${login}`} className='btn btn-light btn-sm my-1'>
				More..
			</Link>
		</div>
	);
};
export default UserItem;

UserItem.propTypes = {
	user: PropTypes.object.isRequired,
};
