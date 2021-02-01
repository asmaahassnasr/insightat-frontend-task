import { NavigationBar } from '../MainNavBar/navigationBar';
import React from 'react';
import {Footer} from '../footer/footer'; 
export const Privacy = () => {
	return (
		<>
			<NavigationBar />
			<div className="privacy container">
				<h1>Insightat | Privacy Policy</h1>
				<p className="privacy-updates">Last Updates 27 July 2018</p>
				<hr className="privacy-hr"></hr>
				<p className="privacy-text">
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
					labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
					et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
					Lorem ipsum dolor sit amet.
				</p>
				<p  className="privacy-text"><span className="privacy-bolder-text">1. </span>
				We respect your privacy</p>
				<p  className="privacy-text"><span className="privacy-bolder-text">1.1. </span>
				Access to the Services</p>
				<p  className="privacy-text">
					<span className="privacy-bolder-text"> 1.1.1.</span>
					 These general terms and conditions of use ("<span className="privacy-bolder-text">General Terms and Conditions of Use</span>") 
					 shall
					govern the use of the website www.typeform.com and related platform ("<span className="privacy-bolder-text">Website</span>"), which
					belongs to TYPEFORM. The purpose is to provide information about the activity of the Company and
					enable the use of the services offered by TYPEFORM (“<span className="privacy-bolder-text">Service</span>” or “<span className="privacy-bolder-text"> Services</span>”),
					consisting in the creation of different types of online documents or forms (hereinafter referred to
					as “<span className="privacy-bolder-text">typeforms</span>”) and, where appropriate, the subsequent storage of the same.
				</p>
				<p  className="privacy-text">
					<span className="privacy-bolder-text">1.2.</span>  Agreement to the General Terms and Conditions of Use and, where appropriate, the
					Specific Conditions
				</p>
				<p  className="privacy-text">
					<span className="privacy-bolder-text">1.2.1. </span> 
					By accessing the Services, you, the User, agree to these General Terms and
					Conditions of Use so please read them carefully before using them. If you do not agree to these
					General Terms and Conditions of Use, please do not use the Services, the typeforms or its contents.
				</p>
				<p  className="privacy-text">
					<span className="privacy-bolder-text">1.2.2. </span> Some of the above-mentioned Services may be subject to specific conditions
					established at any time. From now on, such conditions, or any other specific conditions for the
					Services offered on the Website at any time, shall be referred to as "Specific Conditions".
				</p>
				<p  className="privacy-text">
					<span className="privacy-bolder-text">1.2.3. </span> In addition, TYPEFORM informs the users of the Services that these General Terms
					and Conditions of Use and the Specific Conditions to the Service can be modified or amended at any
					time. Therefore, TYPEFORM will provide the User with reasonable prior written notice of any change.
					If the User does not want to agree to any changes made, the User should stop using that Service,
					because by continuing to use the Services the User indicate their agreement to be bound by the
					updated terms.
				</p>
				<Footer />
			</div>
		</>
	);
};

