import React, { Fragment } from 'react';
import Users from '../../components/users/Users';
import Search from '../../components/search/Search';
import Alert from '../../components/layout/Alert';

const Home = () => {
	return (
		<Fragment>
			<div className='container'>
				<Alert />
				<Search />
				<Users />
			</div>
		</Fragment>
	);
};
export default Home;
