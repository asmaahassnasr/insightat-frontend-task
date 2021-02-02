import React from 'react';
import question from '../assets/image/question.png';
import { NavigationBar } from '../MainNavBar/navigationBar';
import { Footer } from '../footer/footer';
import customer from '../assets/image/customer.png';
import { NavLink } from 'react-router-dom';
export const ContactUs = () => {
	return (
		<>
			<NavigationBar />
			<div className="container">
				<div className="contactUs-container">
						<div className="contactUs-form-container fl-left">
							<h3>Contact Insightat</h3>
						<form className="form-horizontal" action="/action_page.php">
						<div className="form-group">
						<div className="form-group">
								<label className="control-label col-sm-2" htmlFor="txt">Name</label>
								<div className="col-sm-10  contact-input">
									<input type="text" className="form-control" id="txt" 
									placeholder="Enter Name" name="pwd" />
      					</div>
					</div>
							<label className="control-label col-sm-2" htmlFor="email">Email</label>
							<div className="col-sm-10  contact-input">
								<input type="email" className="form-control"
								 id="email" placeholder="Enter email" name="email" />
      						</div>
							</div>
								<div className="form-group">
									<label className="control-label col-sm-2" htmlFor="comment">Message</label>
									<div  className="col-sm-10  contact-input">
									<textarea className="form-control" rows={5} id="comment"></textarea>
									</div>
								</div>
						<div className="form-group">
							<div className="col-sm-10  contact-input">
								<NavLink to="/" className="form-control contact-button">Send</NavLink>
							</div>
								</div>
  						</form>
						</div>
						<div className="contactUs-img fl-right">
							<img className="fl-right" src={customer} />
						</div>
						<div className="clear-fix"></div>
						<div className="contactUs-icons">
							<p> Stay in touch</p>
							<img src={question} />
							<img src={question} />
							<img src={question} />
							<img src={question} />
							<img src={question} />
						</div>
					</div>
				<Footer />
			</div>
		</>		
	);
};
