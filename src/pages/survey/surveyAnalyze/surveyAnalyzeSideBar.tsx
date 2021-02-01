import {NavLink} from 'react-router-dom';

export const SurveyAnalyzeSideBar = () => {
    return (
        <>
        <div className="analyze-sideBar">
          <div><NavLink className="sid-elem" to="/analyze">Status</NavLink></div>
          <div><NavLink className="sid-elem"  to="/dashboard">Results</NavLink></div>
          <div><NavLink className="sid-elem"  to="/results">Individual Response</NavLink></div>
        </div>
        </>
     )
}
