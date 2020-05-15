import React, { Fragment } from 'react';
import propTypes from 'prop-types';

const RepoItem = ({ repo }) => {
	return (
		<div className='repo-card grid-2'>
			<h3>
				<a className='text-light' href={repo.html_url}>
					<i className='fas fa-code'>&nbsp;</i>&nbsp;
					{repo.name}
				</a>
			</h3>
			{repo.language ? (
				<Fragment>
					<h4 style={{ display: 'grid', justifyItems: 'end' }}>
						<i className='text-success fas fa-circle'></i>
						{repo.language}
					</h4>
				</Fragment>
			) : (
				<Fragment>
					<h4 style={{ display: 'grid', justifyItems: 'end' }}>
						<i className=' fas fa-circle text-light'></i>
						{'Not Specified'}
					</h4>
				</Fragment>
			)}
		</div>
	);
};

export default RepoItem;
RepoItem.propTypes = {
	repo: propTypes.object.isRequired,
};
