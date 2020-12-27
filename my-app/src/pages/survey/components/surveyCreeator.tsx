import React, { Component } from "react";


import * as Survey from "survey-knockout";
import * as SurveyCreator from "survey-creator";


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

                    var creatorOptions = {};
                var creator = new SurveyCreator.SurveyCreator("creatorElement", creatorOptions);
                creator.showToolbox = "right";
                creator.showPropertyGrid = "right";
                creator.rightContainerActiveItem("toolbox");
                

    

    creator.onCanShowProperty.add(function(sender, options){
    if(options.obj.getType() == "survey") {
        options.canShow = options.property.name == "title";
    }
});
    }
    render() {
        return (
            <div id="creatorElement" />
        );
    }
}

export default SurveyComponent;
