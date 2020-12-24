import React from 'react';
import { SurveyNavBar } from '../components/surveyNavBar';
import { SurveyAnalyzeSideBar } from './surveyAnalyzeSideBar';
import './surveyAnalyze.css';
export const SurveyAnalyze = () => {
    return (
        <>
            <SurveyNavBar />
            <div className="container-fluid analyze">
                <div className="row">
                    <SurveyAnalyzeSideBar />
                    <div className="col-lg-10">
                        <div className="container-fluid analyze-body-header">
                            <h1>Analyze</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
