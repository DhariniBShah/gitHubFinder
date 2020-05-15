import React from 'react';
import propTypes from 'prop-types';

import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
	return repos.map((repo) => <RepoItem key={repo.id} repo={repo} />);
};

export default Repos;
Repos.propTypes = {
	repos: propTypes.array.isRequired,
};
