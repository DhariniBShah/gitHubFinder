import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class User extends Component {
	componentDidMount() {
		this.props.getUser(this.props.match.params.login);
	}

	static propTypes = {
		loading: propTypes.bool,
		user: propTypes.object.isRequired,
		getUser: propTypes.func.isRequired,
	};

	render() {
		const {
			name,
			avatar_url,
			location,
			bio,
			company,
			blog,
			login,
			html_url,
			followers,
			following,
			public_repos,
			public_gists,
			hirable,
		} = this.props.user;

		const { loading } = this.props;

		if (loading) return <Spinner />;
		else
			return (
				<div className='container'>
					<Link to='/' className='btn btn-sm btn-light'>
						{'<< '}Back
					</Link>
					<div className='grid-2'>
						<div className='all-center'>
							<img
								src={avatar_url}
								alt='avatar'
								className='round-img'
								style={{ width: '300px', border: '#ccc 1px solid' }}
							/>
							<h1>{name}</h1>
							{location && (
								<Fragment>
									<p>Location: {location}</p>
								</Fragment>
							)}
							<a href={html_url} className='btn btn-primary btn-sm my-1'>
								Visit Github
							</a>
						</div>
						<div className='card'>
							<h3>
								Available To Hire:{' '}
								{hirable ? (
									<i className='fas fa-check-circle text-success' />
								) : (
									<i className='fas fa-times-circle text-danger' />
								)}{' '}
								<hr className='my-1'></hr>
							</h3>
							{bio && (
								<Fragment>
									<h4>Profile</h4>
									<p>{bio}</p>
									<hr className='my-1'></hr>
								</Fragment>
							)}
							<ul>
								<li>
									{login && (
										<Fragment>
											<strong>Username: </strong>
											{login}
											<hr className='my-1'></hr>
										</Fragment>
									)}
								</li>
								<li>
									{company && (
										<Fragment>
											<strong>Company: </strong>
											{company}
											<hr className='my-1'></hr>
										</Fragment>
									)}
								</li>
								<li>
									{blog && (
										<Fragment>
											<strong>Blog: </strong>
											{blog}
											<hr className='my-1'></hr>
										</Fragment>
									)}
								</li>
							</ul>
							<div className='badge badge-danger'>Followers:{followers}</div>
							<div className='badge badge-success'>Following: {following}</div>
							<div className='badge badge-primary'>Public Repos:{public_repos}</div>
							<div className='badge badge-light'>Public Gists:{public_gists}</div>
						</div>
					</div>
				</div>
			);
	}
}

export default User;
