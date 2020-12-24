import { SurveyNavBar } from '../components/surveyNavBar';
import { SurveyBuildSideBar } from './surveyBuildSideBar';
import logic from '../components/icon/logic.svg';
import move from '../components/icon/move.svg';
import icon_duplicate from '../components/icon/icon_duplicate.svg';
import icon_trash from '../components/icon/icon_trash.svg';
import {RadioGroupQuestion} from '../components/radioGroupQuestion';
import {BooleanQuestion} from '../components/booleanQuestion';
import Rectangle_18 from "../components/icon/Rectangle_18.svg" ;
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
                                <span className="welcomebox">
                                    <span className="pt-3">W</span> </span>
                                <div className="user-data-input" id="wlcome-screan" >
                                    <p>Welocme screan</p>
                                </div>
                            </div>
                            <div className="user-data">
                                <div className="numberBox">
                                    <span className="pt-4"> 1</span>
                                </div>
                                <div className="user-data-input" id="wlcome-screan" >
                                    <p>What is your name</p>
                                    <div className="iconbox">
                                        <img src={logic} className="accordion" alt="" />
                                        <img src={move} alt="" />
                                        <img src={icon_duplicate} alt="" />
                                        <img src={icon_trash} alt="" />
                                    </div>
                                </div>

                            </div>
                            <div className="panel">
                                <p> course 1</p>
                                <p> course 2</p>
                                <p> course 3</p>
                            </div>
                            <div className="user-data">
                                <div className="numberBox">
                                    <span className="pt-4"> 2</span>
                                </div>
                                <div className="user-data-input" id="wlcome-screan" >
                                    <p>How old are you</p>
                                    <div className="iconbox">
                                        <img src={logic} className="accordion" alt="" />
                                        <img src={move} alt="" />
                                        <img src={icon_duplicate} alt="" />
                                        <img src={icon_trash} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="panel">
                                <p> course 1</p>
                                <p> course 2</p>
                                <p> course 3</p>
                            </div>
                            <div className="information">
                                <div className="user-data">
                                    <div className="user-data-option" id="wlcome-screan" >
                                        <div className="activeOption">
                                            <BooleanQuestion theLabel="Add other option"/>
                                        </div>
                                        <div className="activeOption">
                                        <BooleanQuestion theLabel="Required"/>
                                        </div>
                                        <div className="activeOption">
                                        <BooleanQuestion theLabel="Randomized"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="color-section">
                                    <div className="color-header color-radio-header">
                                        <RadioGroupQuestion />
                                    </div>
                                </div>
                               
                               
                               
                                <div className="line-color">
                                    <button className="cancel-btn">Cancel</button>
                                    <button className="save-btn">Save</button>

                                </div>



                            </div>
                            <div className="user-data">
                                <div className="numberBox">
                                    <span className="pt-4"> 4</span>
                                </div>
                                <div className="user-data-input" id="wlcome-screan" >
                                    <p>In which department do you work?</p>
                                    <div className="iconbox">
                                        <img src={logic} className="accordion" alt="" />
                                        <img src={move} alt="" />
                                        <img src={icon_duplicate} alt="" />
                                        <img src={icon_trash} alt="" />
                                    </div>
                                </div>

                            </div>
                            <div className="panel">
                                <p> course 1</p>
                                <p> course 2</p>
                                <p> course 3</p>
                            </div>
                            <div className="user-data">
                                <div className="numberBox">
                                    <span className="pt-4"> 5</span>
                                </div>
                                <div className="user-data-input " id="wlcome-screan" >
                                    <p>Which of these courses have you already attended?</p>
                                    <div className="iconbox ">
                                        <img src={logic} className="accordion" alt="" />
                                        <img src={move} alt="" />
                                        <img src={icon_duplicate} alt="" />
                                        <img src={icon_trash} alt="" />
                                    </div>
                                </div>

                            </div>
                            <div className="panel">
                                <p> course 1</p>
                                <p> course 2</p>
                                <p> course 3</p>
                            </div>
                            <div className="user-data">
                                <span className="welcomebox thanksbox">
                                    <span className="pt-3">T</span> </span>
                                <div className="user-data-input" id="wlcome-screan" >
                                    <p>Thank you Screan</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
