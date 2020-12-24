import React, { Component } from 'react';
import * as Survey from "survey-react";
import "survey-react/survey.css";
interface IProps{
    theTitle:string,
    theMin:string,
    theMax:string
}


export const RatingQuestion:React.SFC<IProps>  = ({theTitle,theMin,theMax}) =>{
    const json = {
        questions: [
            {
                type: "rating",
                name: "satisfaction",
                title: theTitle,
                minRateDescription: theMin,
                maxRateDescription: theMax,
                rateValues:10
            }
        ]
    };
        return (
            <>
                 <Survey.Survey json={json} 
                  applyTheme="modern"
                 showNavigationButtons={false} 
                 />; 
            </>
        )
}

