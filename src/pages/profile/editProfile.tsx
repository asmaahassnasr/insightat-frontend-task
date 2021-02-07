import React from 'react';
import Header from './Header.png';
import { Link } from 'react-router-dom';
import { ProfileNavBar } from './profileNavBar';
import { Footer } from '../footer/footer';
export const EditProfile = () => {
	return (
		<div className="profile-page">
			<div className="profile-container">
				<ProfileNavBar />
			</div>
			<div className="profile-body">
				<div className="profile-head-details">
					<div className="profile-cover-img">
						<img src={Header} />
					</div>
					<div className="profile-buttons">
						<Link
							to="/profile"
							className="profile-edit-button"
							style={{ borderRadius: '20px', marginRight: '10px' }}
						>
							Change Cover
						</Link>
						<Link to="/profile" className="profile-fav-button" style={{ marginRight: '0' }}>
							Done Editing <i className="fal fa-edit" style={{ color: '#fff' }} />
						</Link>
					</div>
				</div>
				<div className="profile-body-details">
					<div className="fl-left profile-user-data">
						<div className="change-your-photo">
							<i className="fas fa-camera" />
							<p>
								Change Your <br />Profile Photo
							</p>
						</div>
					</div>
					<div className="fl-right profile-user-questions">
						<p>Edit Profile</p>
						<div className="profile-ques-container">
							<form action="/action_page.php">
								<div className="form-group">
									<label htmlFor="text">Page Name</label>
									<input type="text" className="form-control" placeholder=" What is your name" />
								</div>
								<div className="form-group">
									<label htmlFor="text">Handle</label>
									<input type="text" className="form-control" placeholder=" How old are you" />
								</div>
								<div className="form-group">
									<label htmlFor="email">Page Description</label>

									<textarea
										className="form-control"
										rows={5}
										cols={10}
										placeholder=" Your Email Please"
									/>
								</div>
							</form>
						</div>
					</div>
					<div className="clear-fix" />
				</div>
			</div>
			<Footer />
		</div>
	);
};
