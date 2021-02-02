import React from 'react';
import { NavigationBar } from '../MainNavBar/navigationBar';
import {Footer} from '../footer/footer';
export const Template = () => {
    return (
        <> 
            <div className="template-container">
        <NavigationBar />
            <div className="template-data">
            <p> 
            template-page works!
            </p>
            </div>
        <Footer/>
        </div>
        </>
     )
}
