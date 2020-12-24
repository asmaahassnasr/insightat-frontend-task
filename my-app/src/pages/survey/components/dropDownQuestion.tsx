import React, { Component } from 'react';
import * as Survey from "survey-react";
import "survey-react/survey.css";
interface IProps{
    theTitle:string,
    theVal:string[],
    theName:string
}


export const DropDownQuestion:React.SFC<IProps>  = ({theTitle,theVal,theName}) =>{
    const json = {
        questions: [
            {
                type: "dropdown",
                name: theName,
                title: theTitle,
                colCount: 1,maxSelectedChoices:3,
                choices: [...theVal]
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

