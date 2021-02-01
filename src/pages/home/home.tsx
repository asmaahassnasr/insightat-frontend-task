import React from 'react';
import { NavigationBar } from '../MainNavBar/navigationBar';
import { NavLink } from 'react-router-dom';
import { Footer } from '../footer/footer';
import contact_us_background from '../assets/image/contact_us_background.png';
import drag_drop from '../assets/image/drag_drop.png';
// import './home.css';
export const Home = () => {
	return (
        <>
		<div className="home-container">
			<NavigationBar />
			<div className="row home-details">
				<div className="col-sm-6 home-data">
					<p className="bg-p">
						<span className="home-new">New</span>
						<span className="home-choose">Choose from over 200 Templates</span>
						<span>
							<i className="fas fa-angle-right" />
						</span>
					</p>
					<p className="home-text">
						Data Collection Tool,<br />Simply Powerful and <br />Beautiful
					</p>
					<p>
						<NavLink className="sign-up-for-free" to="/signUp">Sign up for free</NavLink>
						<span className="home-sep">|</span>
						<span className="home-free-trial">14 Day Free Trial, No CC Required</span>
					</p>
				</div>
				<div className="col-sm-6 home-img" >
                    <img src={drag_drop}></img>
                </div>
			</div>
			<Footer />
		</div>
        </>
	);
};
