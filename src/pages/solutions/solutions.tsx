import React from 'react';
import icon_employer from '../assets/image/icon_employer.png';
import icon_form from '../assets/image/icon_form.png';
import icon_custom_support from '../assets/image/icon_custom_support.png';
import icon_product from '../assets/image/icon_product.png';
import icon_feedback from '../assets/image/icon_feedback.png';
import {Footer} from '../footer/footer';
import { NavigationBar } from '../MainNavBar/navigationBar';

export const Solutions = () => {
	return (
		<> 
			<NavigationBar />
			<div className="container">
				<div className=" solutions-container">
				<div className="solution-box">
					<div className="solution-box-data fl-left">
						<h4>Not Your Usual Survey and Form Builder</h4>
						<p>Build surveys and forms, share via verity of channels and get the results.That’s simple!</p>
					</div>
					<div className="solution-box-img fl-right">
						<img className=" fl-right" src={icon_form} />
					</div>
				</div>
				<div className="clear-fix" ></div>
				<div className="solution-box">
					<div className="solution-box-data fl-right">
						<h4>The Real Voice of Your Customers</h4>
						<p>Listen to your customers and show them that you care. Insightat helps you build your own customer satisfaction surveys, or you could pick one of many templates</p>
					</div>
					<div className="solution-box-img fl-left">
						<img className=" fl-left" src={icon_custom_support} />
					</div>
				</div>
				<div className="clear-fix" ></div>
				<div className="solution-box">
					<div className="solution-box-data fl-left">
						<h4>Employees Engagement Never Been More Professional</h4>
						<p>Collet the employees' feedback and improve their engagement</p>
					</div>
					<div className="solution-box-img fl-right">
						<img className="fl-right" src={icon_employer} />
					</div>
				</div>
				<div className="clear-fix" ></div>
				<div className="solution-box">
					<div className="solution-box-data fl-right">
						<h4>Improve Your Products And Services</h4>
						<p>Give your customers the opportunity to rate your services and products for the continues improving</p>
					</div>
					<div className="solution-box-img fl-left">
						<img className="fl-left" src={icon_product} />
					</div>
				</div>
				<div className="clear-fix" ></div>
				<div className="solution-box">
					<div className="solution-box-data fl-left">
						<h4>Instant Feedback (Kiosk)</h4>
						<p>Get the instant feedback and close the gap between you and the customers.</p>
					</div>
					<div className="solution-box-img fl-right">
						<img className="fl-right" src={icon_feedback} />
					</div>
				</div>
				<div className="clear-fix" ></div>
				</div>
			<Footer />
			</div>
		</>
	);
};
