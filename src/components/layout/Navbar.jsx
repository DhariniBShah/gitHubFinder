import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({title, iconClass}) => {
    return (
        <nav className='navbar bg-primary'>
            <h1>
                <i className={iconClass}/> {title} </h1>
        </nav>
    );
}

export default Navbar;

Navbar.defaultProps = {
    title: ' Github Finder',
    iconClass: 'fab fa-github'
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    iconClass: PropTypes.string.isRequired
}
