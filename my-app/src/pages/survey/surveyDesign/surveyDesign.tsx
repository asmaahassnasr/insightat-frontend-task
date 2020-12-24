import {SurveyNavBar} from '../components/surveyNavBar';
import {SurveyDesignSideBar} from './surveyDesignSideBar';

export const SurveyDesign = () =>{
    return (
        <>
        
        <SurveyNavBar />
        <div className="container-fluid design design-content-sec">
        <div className="row">
        <SurveyDesignSideBar />
            <div className="col-lg-9 col-md-8 col-sm-8 col-xs-8">
                <h1> Desing </h1>
            </div>
            </div>
            </div>
        </>
    )
}
