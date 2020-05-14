import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title, iconClass }) => {
	return (
		<nav className='navbar'>
			<h1>
				<span className='large text-primary'>
					<i className={iconClass} />
				</span>
				{title}{' '}
			</h1>
		</nav>
	);
};

export default Navbar;

Navbar.defaultProps = {
	title: ' Github Finder',
	iconClass: 'fab fa-github',
};
Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	iconClass: PropTypes.string.isRequired,
};
