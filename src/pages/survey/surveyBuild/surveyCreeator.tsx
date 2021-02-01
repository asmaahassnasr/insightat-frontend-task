import React, { Component, createRef } from "react";
import * as Survey from "survey-knockout";
import * as SurveyCreator from "survey-creator";
import { SurveyNavBar } from '../components/surveyNavBar';
import icon_grid from '../components/icon/icon_grid.svg';
import icon_cog from '../components/icon/icon_cog.svg';
import 'bootstrap/dist/css/bootstrap.css';
import "survey-knockout/survey.css";
import "survey-creator/survey-creator.css";
SurveyCreator.StylesManager.applyTheme("bootstrap");

class SurveyComponent extends Component {
    
    componentDidMount() {

        //remove a property to the page object. You can't set it in JSON as well
        Survey.Serializer.removeProperty("page", "visibleIf");
        //remove a property from the base question class and as result from all questions 
        Survey.Serializer.removeProperty("question", "visibleIf");
        var creatorOptions = { showJSONEditorTab: false, showTestSurveyTab: true };
        var creator = new SurveyCreator.SurveyCreator("creatorElement", creatorOptions);
        creator.showToolbox = "left";
        creator.showPropertyGrid = "left";
        creator.rightContainerActiveItem("toolbox");
        creator.onCanShowProperty.add(function (sender, options) {
            if (options.obj.getType() == "survey") {
                options.canShow = options.property.name == "title";
            }
        });


        const build = document.querySelector<HTMLElement>("ul.editor-tabs li:first-child .svd-tab-text");
        if (!build) {
            throw new ReferenceError("Craft weight section not found.");
        }
        build.innerHTML = "Build";


        const design = document.querySelector<HTMLElement>("ul.editor-tabs li:last-child .svd-tab-text ");
        if (!design) {
            throw new ReferenceError("Craft weight section not found.");
        }
        design.innerHTML = "Design";
        design.addEventListener('click', function() {
            // this.style.width = "5000px";    
             this.style.backgroundColor = 'green';
            //  window.open("/design", "_self");
          });

    }
    render() {
        return (
            <>
                <SurveyNavBar />
                <hr className="survey-hr" />
                {/* <div className="build-user-data creator-welcom">
                    <span className="build-welcomebox">
                        <span className="pt-3">W</span> </span>
                    <div className="build-user-data-input" id="build-wlcome-screan" >
                        <p>Welocme screan</p>
                    </div>
                </div> */}
                
                <div className="header-sidebar-creator">   
                        <p>
                            <img src={icon_grid} alt="" />
                        </p> 
                        <p>
                            <img  src={icon_cog} alt="" />
                        </p>
                    </div>
                <div id="creatorElement" />
            </>
        );
    }
}
export default SurveyComponent;
