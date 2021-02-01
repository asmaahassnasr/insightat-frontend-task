import React from 'react';
import { NavigationBar } from '../MainNavBar/navigationBar';
import { NavLink } from 'react-router-dom';
import { Footer } from '../footer/footer';
import drag_drop from '../assets/image/drag_drop.png';
export const Home = () => {
	return (
        <>
		<div className="home-container">
			<NavigationBar />
			<div className="row home-details">
				<div className="col-sm-6 home-data">
					<div className="bg-p">
						<span className="home-new">New</span>
						<span className="home-choose">Choose from over 200 Templates</span>
						<span>
							<i className="fas fa-angle-right" />
						</span>
					</div>
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
			
		</div>
		<Footer />
        </>
	);
};
