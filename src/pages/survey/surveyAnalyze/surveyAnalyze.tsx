import React from 'react';
import {NavLink} from 'react-router-dom';
import { SurveyNavBar } from '../components/surveyNavBar';
import { SurveyAnalyzeSideBar } from './surveyAnalyzeSideBar';
export const SurveyAnalyze = () => {
    return (
        <> 
            <div className="analyze-status">
                <SurveyNavBar />
                <hr className="survey-hr"></hr>
                <SurveyAnalyzeSideBar />
                <div className="analyze-status-body">
                   <div className="analyze-status-text">
                        <span> Customer Satisfaction Survey</span>
                        <NavLink className="sign-up-for-free analyze-btn" to="/share">Export Data &amp; Report</NavLink>
                   </div>
                   <div className="analyze-status-keys">
                        <p>Key Stats</p>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Viewed</th>
                                <th>started</th>
                                <th>Completed</th>
                                <th>completion</th>
                                <th>Average time to complete</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>15</td>
                                <td>15</td>
                                <td>15</td>
                                <td>100%</td>
                                <td>65 Sec.</td>
                            </tr>
                            </tbody>
                        </table>
                   </div>
                   <div className="analyze-status-second-table">
                   <table className="table">
                        <thead>
                        <tr> 
                            <th>DEVICE</th>
                            <th>VIEWED</th>
                            <th>STARTED</th>
                            <th>COMPLETED</th>
                            <th>COMPLETION</th>
                            <th>AVERAGE TIME TO COMPLETE</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>PC &amp; Laptop</td>
                            <td>5</td>
                            <td>5</td>
                            <td>5</td>
                            <td>100%</td>
                            <td>65 Sec.</td>
                        </tr>
                        <tr>
                            <td>Tablet</td>
                            <td>5</td>
                            <td>5</td>
                            <td>5</td>
                            <td>100%</td>
                            <td>65 Sec.</td>
                        </tr>
                        <tr>
                            <td>Smartphone</td>
                            <td>5</td>
                            <td>5</td>
                            <td>5</td>
                            <td>100%</td>
                            <td>65 Sec.</td>
                        </tr>
                    </tbody>
                    </table>
                   </div>
                </div>
                
                <div className="clear-fix"></div>
            </div>
        </>
    )
}
