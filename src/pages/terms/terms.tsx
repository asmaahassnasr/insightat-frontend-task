import React from 'react';
import { NavigationBar } from '../MainNavBar/navigationBar';
import {Footer} from '../footer/footer';

export const Terms = () => {
	return (
			<>
			<NavigationBar />
			<div className="privacy container">
				<h1>Insightat | Terms of Use</h1>
				<p className="privacy-updates">Last Updates 27 July 2018</p>
				<hr className="privacy-hr"></hr>
				<p className="privacy-text">
				The services are provided by TYPEFORM S.L. (hereinafter referred to as “Insightat”), a Spanish
				company with registered address at Carrer Bac de Roda, 163, 08018 Barcelona, and C.I.F. (tax
				identification code) B65831836, and registered in the Trade Register of Barcelona, page B-421911,
				folio 145, volume 43262.
				</p>
				<p  className="privacy-text upper-text"><span className="privacy-bolder-text">1. </span>
				access and use of the services</p>
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
