import React from 'react';
import Header from './Header.png';
import NIKE from './NIKE.png';
import { ProfileNavBar } from './profileNavBar';
import { Link, NavLink } from 'react-router-dom';
import { Footer } from '../footer/footer';
export const Profile = () => {
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
					<div className="profile-user-img">
						<img src={NIKE} />
					</div>
					<div className="profile-buttons">
						<Link to="" className="profile-fav-button">
							Favoriets
						</Link>
						<Link to="/editProfile" className="profile-edit-button">
							<i className="fal fa-edit" />
						</Link>
					</div>
				</div>
				<div className="profile-body-details">
					<div className="fl-left profile-user-data">
						<p className="profile-user-name"> NIKE </p>
						<p className="profile-user-userName"> @justdoit </p>
						<p className="profile-user-caption">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ipsum, laborum repellat
							repellendus magnam similique eaque modi! Nesciunt quo ut velit quaerat! Eum dolores
							asperiores, iure animi at fugiat exercitationem.
						</p>
						<div className="profile-user-social">
							<i className="fa fa-building" />
							<i className="fa fa-facebook-square" />
							<i className="fa fa-twitter" />
							<i className="fa fa-linkedin" />
							<i className="fa fa-google-plus" />
						</div>
					</div>
					<div className="fl-right profile-user-questions">
						<p>NIKE - Form</p>
						<div className="profile-ques-container">
							<form action="/action_page.php">
								<div className="form-group">
									<label htmlFor="text">
										<span>1.</span> What is your name
									</label>
									<input type="text" className="form-control" placeholder=" What is your name" />
								</div>
								<div className="form-group">
									<label htmlFor="text">
										<span>2.</span> How old are you
									</label>
									<input type="text" className="form-control" placeholder=" How old are you" />
								</div>
								<div className="form-group">
									<label htmlFor="email">
										<span>3.</span> Your Email Please
									</label>
									<input type="email" className="form-control" placeholder=" Your Email Please" />
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
