import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavigationBar = () => {
	return (
		<>
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
  			<NavLink className="navbar-brand" to="/">Insightat</NavLink>
			  <button className="navbar-toggler" type="button"
			   data-toggle="collapse" data-target="#navbarSupportedContent" 
			   aria-controls="navbarSupportedContent" aria-expanded="false" 
			   aria-label="Toggle navigation">
   			 <span className="navbar-toggler-icon"></span>
 			</button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/template">Templates</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/howItWorks">Help</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contactUs">Contact</NavLink>
      </li>
	  <li className="nav-item">
        <NavLink className="nav-link logIn" to="/logIn">LogIn</NavLink>
      </li>
	  <li className="nav-item">
        <NavLink className="nav-link signUp" to="/signUp">Sign Up</NavLink>
      </li>
    </ul>
  </div>
</nav>
		</>
	);
};
