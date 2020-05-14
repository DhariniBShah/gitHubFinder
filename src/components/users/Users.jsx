import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import propTypes from 'prop-types';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

const Users = ({ users, loading }) => {
	if (loading) return <Spinner />;
	else
		return (
			<div style={userStyle}>
				{users.map((user) => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
};

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
	gridTemplateRows: '1fr',
	gridGap: '1rem',
};

export default Users;

Users.propTypes = {
	users: propTypes.array.isRequired,
	loading: propTypes.bool.isRequired,
};
