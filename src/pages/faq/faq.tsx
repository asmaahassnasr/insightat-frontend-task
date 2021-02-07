import React from 'react';
import {NavigationBar} from '../MainNavBar/navigationBar';

// import './faq.css'; 


export const FAQ = () => {
    return (
        <>
        <NavigationBar />
        <div className="container">
    <br />
    <br />
    

    <br />

    <div className="" id="accordion">
        <div className="faqHeader">FAQ | Frequently Asked Questions</div>
        <div className="card ">
            <div className="card-header">
                <h4 className="card-header">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" style={{color: "red"}}>What Is Insightat?</a>
                </h4>
            </div>
         
            <div id="collapseOne" className="panel-collapse collapse in">
                <div className="card-block">
                     Paperform Is An Online Platform That Enables Anyone To Create Online Forms Or 
                     Product Pages Quickly, Intuitively, And To Brand Them As They Like, All Without 
                     Writing Code. Whether You’re Involved Involved With Organising Events, Sporting 
                     Groups, Marketing Agencies, Tech Startups, Or Any Other Project, Paperform Is A 
                     Beautiful.
                 </div>
            </div>
        </div>
       
</div>
</div>

        </>
     )
}
