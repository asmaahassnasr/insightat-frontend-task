import React from 'react';
import {NavLink} from 'react-router-dom';
export const SurveyNavBar = () => {
    return (
        <> 
		<nav className="navbar navbar-expand-lg navbar-light bg-light survey-nav">
  			<NavLink className="navbar-brand survey-nav-brand" to="/">Insightat</NavLink>
			  <button className="navbar-toggler" type="button"
			   data-toggle="collapse" data-target="#navbarSupportedContent" 
			   aria-controls="navbarSupportedContent" aria-expanded="false" 
			   aria-label="Toggle navigation">
   			 <span className="navbar-toggler-icon"></span>
 			</button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="nav navbar-nav survey-home-icons">
      <li className="nav-item">
        <NavLink className="nav-link survey-active" to="/">
        {/* <span className="survey-nav-sep">|</span> */}
        <i className="fal fa-home survey-nav-icon" />
			  <i className="fas fa-angle-right survey-nav-icon" />
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link survey-satisfy survey-active" to="/profile">Customer Statisfaction Survey</NavLink>
      </li>
    </ul>
    <ul className=" nav navbar-nav survey-build">
    <li className="nav-item">
        <NavLink className="nav-link survey-build-active" to="/build">Build</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link survey-build-active" to="/design">Design</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link survey-build-active" to="/share">Share</NavLink>
      </li>
	  <li className="nav-item">
        <NavLink className="nav-link survey-build-active" to="/analyze">Analyze</NavLink>
      </li>
    </ul>
    <ul className="nav navbar-nav navbar-right survey-right">
      <li><NavLink className="nav-link survey-active survey-preview" to="/">Preview</NavLink></li>
      <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">
        <span className="dropdown-D">D</span>
        <span className="caret"></span>
        </a>
        <ul className="dropdown-menu">
          <li><a href="#">My Account</a></li>
          <li><a href="#">Contacts</a></li>
          <li className="survey-dropdown-help"><a href="#">Help</a></li>
          <li><a href="#">Log out</a></li>
        </ul>
      </li>
    </ul>

  </div>
</nav>
		</>

    )
}
