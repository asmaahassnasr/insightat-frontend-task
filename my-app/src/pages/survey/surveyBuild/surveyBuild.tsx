import { SurveyNavBar } from '../components/surveyNavBar';
import { SurveyBuildSideBar } from './surveyBuildSideBar';
import '../skeleton.css';
import './surveyBuild.css';
export const SurveyBuild = () => {
    return (
        <>
            <SurveyNavBar />

            <div className="container-fluid build-content-sec">
                <div className="row">
                    <SurveyBuildSideBar />
                    <div className="col-lg-10 col-md-8 col-sm-8 col-xs-8">
                        <div className="build-content-detailes">
                            <div className="user-data">
                                <h1> Build </h1>
                            </div>
                        </div>
                    </div>
                </div>
  </div>
        </>
    )
}
