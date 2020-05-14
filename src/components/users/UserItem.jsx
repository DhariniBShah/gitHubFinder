import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({
    user: {
        login,
        avatar_url,
        html_url
    }
}) => {
    return (
        <div className='card text-center text-light'>
            <img src={avatar_url}
                alt='avatar'
                className='round-img'
                style={
                    {width: '140px'}
                }/>
            <h3>{login}</h3>

            <a href={html_url}
                className='btn btn-light btn-sm my-1'>
                More..
            </a>
        </div>
    );
};
export default UserItem;

UserItem.propTypes = {
    user: PropTypes.object.isRequired
};
