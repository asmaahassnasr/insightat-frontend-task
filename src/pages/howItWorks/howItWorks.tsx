import React from 'react';
import create_your_project from '../assets/image/create_your_project.png';
import build_your_project from '../assets/image/build_your_project.png';
import design_your_project from '../assets/image/design_your_project.png';
import {Link} from 'react-router-dom';
import {Footer} from '../footer/footer';
import share_your_project from '../assets/image/share_your_project.png';
import {NavigationBar} from '../MainNavBar/navigationBar';
import analyze_your_project from '../assets/image/analyze_your_project.png';

export const HowItWorks = () => {
    return (
        <> 
        <NavigationBar />
        <div style={{position:'relative'}}>
            <div className="how-it-works">
            <div className="how-it-works__item">
                <div className="how-it-works__item__desc fl-left">
                <h1>Create Your Project</h1>
                <p>
                    Create Your Own Project From Scratch Or Start Using One Of Our Well
                    Crafted Templates
                </p>
                </div>
                <div className="how-it-works__item__image fl-right">
                <img className=" fl-right"  src={create_your_project} />
                </div>
            </div>
            <div className="clear-fix" ></div>
            <div className="how-it-works__item">
                <div className="how-it-works__item__image fl-left">
               <Link to="/build"><img className="fl-left" src={build_your_project} /></Link>
                </div>
                <div className="how-it-works__item__desc fl-right">
                <h1>Build Your Project</h1>
                <p>
                    Build Your Project With 18 Types Of Questions To Help You Get The
                    Answers You Want From Your Audience
                </p>
                </div>
            </div>
            <div className="clear-fix" ></div>
            <div className="how-it-works__item">
                <div className="how-it-works__item__desc fl-left">
                <h1>Design Your Project</h1>
                <p>Make Your Project Looks Beautiful In The Way You Want</p>
                </div>
                <div className="how-it-works__item__image fl-right">
                <Link to="/design"><img className="fl-right" src={design_your_project} /></Link>
                </div>
            </div>
            <div className="clear-fix" ></div>
            <div className="how-it-works__item">
                <div className="how-it-works__item__image  fl-left">
                <Link to="/share"><img className="fl-left" src={share_your_project} /></Link>
                </div>
                <div className="how-it-works__item__desc fl-right">
                <h1>Share Your Project</h1>
                <p>
                    Share Your Project Easily In Many Ways Using A Web Link, QR Code, Email,
                    And Social Media
                </p>
                </div>
            </div>
            <div className="clear-fix" ></div>
            <div className="how-it-works__item">
                <div className="how-it-works__item__desc fl-left">
                <h1>Analyze Your Project</h1>
                <p>
                    Review The Results Of Your Project And Create Your Report Or Download
                    The Results In Many Formats
                </p>
                </div>
                <div className="how-it-works__item__image  fl-right">
                <Link to="/analyze"><img className=" fl-right" src={analyze_your_project} /></Link>
                </div>
            </div>
            <div className="clear-fix" ></div>
            </div>
            <Footer />
            </div>

        </>
    )
}
