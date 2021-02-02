import {NavLink ,Link} from 'react-router-dom';
// import './profileNav.css';

export const ProfileNavBar = () => {
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
                <ul className="nav navbar-nav ml-auto profile-nav-link">
                <li className="nav-item">
                    <span className="nav-link profile-sep">|</span>
                </li>
                <li className="nav-item">
                    <span className="nav-link profile-search-icon"><i className="fas fa-search "></i></span>
                </li>
                <li className="nav-item">
                <input type="text" className="nav-link profile-search-input form-control" placeholder="Search" />
                </li>
                <li className="dropdown profile-dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">
                    <span className="dropdown-D">D</span>
                    <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                    <li><Link to="/profile">My Account</Link></li>
                    <li><Link to="/contactUs">Contacts</Link></li>
                    <li className="survey-dropdown-help"><Link to="/howItWorks">Help</Link></li>
                    <li><Link to="/">Log out</Link></li>
                    </ul>
                </li>
                </ul>

            </div>
            </nav>

        </>
    )
}
