import {Link} from 'react-router-dom';
// import './surveyAnalyzeSideBar.css';

export const SurveyAnalyzeSideBar = () => {
    return (
        <>
        <div className="col-lg-2 ">
       <div className="analyze-link">
        <div className="analyze-link-box active-link">
          <p><Link to="/analyze"><a>Status</a></Link></p>
        </div>
        <div className="analyze-link-box">
          <p><Link to="/dashboard"><a>Results</a></Link></p>
        </div>
        <div className="analyze-link-box">
          <p><a>Individual Responses</a></p>
        </div>
       </div>  
     </div>
        </>
     )
}
