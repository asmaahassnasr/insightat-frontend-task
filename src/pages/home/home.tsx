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
					<p>
						<span>New</span>
						Choose from over 200 Templates
						<span>
							<i className="fas fa-angle-right" />
						</span>
					</p>
					<p>
						Data Collection Tool,<br />Simply Powerful and Beautiful
					</p>
					<p>
						<span>Sign Up for Free</span>
						<span>|</span>
						<span>14 Day Free Trial,No CC Required</span>
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
