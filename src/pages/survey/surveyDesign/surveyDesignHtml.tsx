
import React from 'react';
import { SurveyNavBar } from '../components/surveyNavBar';
import { SurveyDesignSideBar } from './surveyDesignSideBar';
import Rectangle_141 from '../components/icon/Rectangle_141.svg';
import aaron_burden_363695_unsplash from '../components/icon/aaron_burden_363695_unsplash.svg';
import shifaaz_shamoon_1113388_unsplash from '../components/icon/shifaaz_shamoon_1113388_unsplash.svg'
import hd_wallpaper_landscape_mountain_peak_51387 from '../components/icon/hd_wallpaper_landscape_mountain_peak_51387.svg';
import  fernando_paredes_murillo_462122_unsplash from '../components/icon/fernando_paredes_murillo_462122_unsplash.svg';
import  fog_foggy_forest_4827 from '../components/icon/fog_foggy_forest_4827.jpg';
import chuttersnap_617671_unsplash from '../components/icon/chuttersnap_617671_unsplash.svg';
import './surveydesign.css';
export const SurveyDesignHtml = () => {
    return (
        <>
            <SurveyNavBar />
            <hr className="survey-hr"></hr>
            <div className="container-fluid design design-content-sec">
                <div className="row">

                    <SurveyDesignSideBar />
      <div className="col-lg-9 col-md-8 col-sm-8 col-xs-8">
        <div className="build-content-detailes">
          <div className="user-data">
            <span className="welcomebox cs">
              <span className="pt-3">CS</span> </span>
            <div className="user-data-input" id="wlcome-screan" >
               <p>EXTFOX - Web Development Agency</p> 
             </div>
          </div>
          <div className="user-data user-informaion-container">
            <div className="numberBox number-user-data-container">
              <span className="pt-4"> 1</span>
              <img src={Rectangle_141} alt="" />
            </div>
            <div className="user-data-input design-user-data-container" id="wlcome-screan" >
               <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore 
                 et dolore magna aliquyam erat, sed diam voluptua.
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.</p> 
             </div>
          </div>
          <div className="user-data user-informaion-container">
            <div className="numberBox number-user-data-container">
              <span className="pt-4"> 2</span>
              <img src={Rectangle_141} alt="" />
            </div>
            <div className="user-data-input design-user-data-container favourite-artist-container" id="wlcome-screan" >
              <p>Who is your favorite artist?</p>
              <input type="text" name="" id="favourite-artist" placeholder="Type your answer here..." />
             </div>
          </div>
          <div className="user-data user-informaion-container">
            <div className="numberBox number-user-data-container">
              <span className="pt-4"> 3</span>
              <img src={Rectangle_141} alt="" />
            </div>
            <div className="user-data-input design-user-data-container favourite-artist-container" id="wlcome-screan" >
              <p>Do you have any further comments?</p>
              <input type="text" name="" id="favourite-artist" placeholder="Type your comment here..." />
             </div>
          </div>
          <div className="user-data user-informaion-container ">
            <div className="numberBox number-user-data-container color-container-boxex-number">
              <span className="pt-4"> 4</span>
              <img src={Rectangle_141} alt="" />
            </div>
            <div className="user-data-input design-user-data-container color-container-boxex-text favourite-artist-container" id="wlcome-screan" >
              <p>What is your favorite color?</p>
              <div className="user-informaion-continer-box-color">
                <div className="user-informaion-continer-box-color-inside-content">
                  <span>a</span>
                  <span >red</span>
                </div>
                <div className="user-informaion-continer-box-color-inside-content">
                  <span>b</span>
                  <span >black</span>
                </div>
                <div className="user-informaion-continer-box-color-inside-content">
                  <span>c</span>
                  <span >blue</span>
                </div>
                <div className="user-informaion-continer-box-color-inside-content">
                  <span>d</span>
                  <span >white</span>
                </div>
               
              </div>
             </div>
          </div>
          <div className="user-data user-informaion-container ">
            <div className="numberBox number-user-data-container color-container-boxex-number">
              <span className="pt-4"> 5 </span>
              <img src={Rectangle_141} alt="" />
            </div>
            <div className="user-data-input design-user-data-container color-container-boxex-text favourite-artist-container" id="wlcome-screan" >
                 <span className="color-container-boxex-text-header">Which of these courses have you already attended?</span>
                 <span className="color-container-boxex-text-span">You can select multiple options.</span>
              <div className="user-informaion-continer-box-color">
                <div className="user-informaion-continer-box-color-inside-content">
                  <span>a</span>
                  <span >course A</span>
                </div>
                <div className="user-informaion-continer-box-color-inside-content">
                  <span>b</span>
                  <span >course b<bdo dir=""></bdo></span>
                </div>
                <div className="user-informaion-continer-box-color-inside-content">
                  <span>c</span>
                  <span >course c</span>
                </div>
                <div className="user-informaion-continer-box-color-inside-content">
                  <span>d</span>
                  <span >course d</span>
                </div>
               
              </div>
             </div>
          </div>
          <div className="user-data user-informaion-container">
            <div className="numberBox number-user-data-container">
              <span className="pt-4"> 6</span>
              <img src={Rectangle_141} alt="" />
            </div>
            <div className="user-data-input design-user-data-container favourite-artist-container" id="wlcome-screan" >
              <p>In which department do you work?</p>
              <input type="text" name="" id="favourite-artist" placeholder="Select an option..." />
             </div>
          </div>
          <div className="user-data user-informaion-container">
            <div className="sub-middle-height numberBox number-user-data-container recommended-section-text">
              <span className="pt-4"> 7</span>
              <img src={Rectangle_141} alt="" />
            </div>
            <div className="sub-middle-height user-data-input design-user-data-container favourite-artist-container recommended-section-text"
             id="wlcome-screan">
              
              <p>How likely is it that you would recommend the event to a friend or colleague?</p>
              <div className="cobtainer-recommended-box">
                <div className="recommended-box">
                  <div className="recommended-box-content"><span>0</span></div>
                </div>
                <div className="recommended-box">
                  <div className="recommended-box-content"><span>1</span></div>
                </div>
                <div className="recommended-box">
                  <div className="recommended-box-content"><span>2</span></div>
                </div>
                <div className="recommended-box">
                  <div className="recommended-box-content"><span>3</span></div>
                </div>
                <div className="recommended-box">
                  <div className="recommended-box-content"><span>4</span></div>
                </div>
                <div className="recommended-box">
                  <div className="recommended-box-content"><span>5</span></div>
                </div>
                <div className="recommended-box">
                  <div className="recommended-box-content"><span>6</span></div>
                </div>
                <div className="recommended-box">
                  <div className="recommended-box-content"><span>7</span></div>
                </div>
                <div className="recommended-box">
                  <div className="recommended-box-content"><span>8</span></div>
                </div>
                <div className="recommended-box">
                  <div className="recommended-box-content"><span>9</span></div>
                </div>
                <div className="recommended-box">
                  <div className="recommended-box-content"><span>10</span></div>
                </div>
              </div>
                  
               <div className="recommended-agree">
                <p>Disagree</p>
                <p></p>
                <p>Agree</p>
              </div> 
              </div>
          </div>
          <div className="user-data user-informaion-container">
            <div className="numberBox number-user-data-container">
              <span className="pt-4"> 8</span>
              <img src={Rectangle_141} alt="" />
            </div>
            <div className="user-data-input design-user-data-container favourite-artist-container" id="wlcome-screan" >
              <p>How would you rate our product?</p>
              <div className="star-cotent">
                <i className="fa  fa-star rate"></i>
                <span>1</span>
              </div>
              <div className="star-cotent">
                <i className="fa  fa-star rate"></i>
                <span>2</span>
              </div>
              <div className="star-cotent">
                <i className="fa  fa-star rate"></i>
                <span>3</span>
              </div>
              <div className="star-cotent">
                <i className="fa  fa-star rate"></i>
                <span>4</span>
              </div>
              <div className="star-cotent">
                <i className="fa  fa-star rate"></i>
                <span>5</span>
              </div>
             </div>
          </div>
          <div className="user-data user-informaion-container ">
            <div className="numberBox number-user-data-container color-container-boxex-number table-container-box">
              <span className="pt-4"> 9 </span>
              <img src={Rectangle_141} alt="" />
            </div>
            <div className="user-data-input design-user-data-container color-container-boxex-text favourite-artist-container table-container-box" id="wlcome-screan" >
              <p>How often do you use following features:</p>
              <div className="user-informaion-continer-box-color table">
              <div className="table-content">
                <div className="table-content-box">
                  <span></span>
                  <span>Strongly <br />Agree</span>
                  <span>Somewhat agree</span>
                  <span>Neither agree nor disagree</span>
                  <span>Somewhat disagree</span>
                  <span>Strongly disagree</span> 
                </div>
                <div className="table-content-box">
                    <span className="sub-title-table">Feature A </span>
                    <span><input type="radio" name="first" id="" /></span>
                    <span><input type="radio" name="first" id="" /></span>
                    <span><input type="radio" name="first" id="" /></span>
                    <span><input type="radio" name="first" id="" /></span>
                    <span><input type="radio" name="first" id="" /></span> 
                </div>
                <div className="table-content-box table-content-box-with-background">
                  <span className="sub-title-table">Feature b </span>
                  <span><input type="radio" name="second" id="" /></span>
                  <span><input type="radio" name="second" id="" /></span>
                  <span><input type="radio" name="second" id="" /></span>
                  <span><input type="radio" name="second" id="" /></span>
                  <span><input type="radio" name="second" id="" /></span> 
              </div>
              <div className="table-content-box">
                <span className="sub-title-table">Feature c</span>
                <span><input type="radio" name="third" id="" /></span>
                <span><input type="radio" name="third" id="" /></span>
                <span><input type="radio" name="third" id="" /></span>
                <span><input type="radio" name="third" id="" /></span>
                <span><input type="radio" name="third" id="" /></span> 
            </div>
            <div className="table-content-box">
              <span className="sub-title-table">Feature A </span>
              <span><input type="radio" name="four" id="" /></span>
              <span><input type="radio" name="four" id="" /></span>
              <span><input type="radio" name="four" id="" /></span>
              <span><input type="radio" name="four" id="" /></span>
              <span><input type="radio" name="four" id="" /></span> 
          </div>
              </div>    
              </div>
             </div>
             
          </div>
          <div className="user-data user-informaion-container ">
            <div className="numberBox number-user-data-container color-container-boxex-number">
              <span className="pt-4"> 10 </span>
              <img src={Rectangle_141} alt="" />
              </div>
              <div className="user-data-input design-user-data-container color-container-boxex-text favourite-artist-container" id="wlcome-screan" >
                 <span className="color-container-boxex-text-header">On which days do you use the following products</span>
                 <span className="color-container-boxex-text-span">You can select multiple options per row.</span>
                 <div className="days-box">
                   <div className="viual-container-grid">
                    <div className="vitual"></div>
                    <div className="day-name-container-header ">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                    </div>
                   </div>
                   
                  <div className="days-box-caption">
                    <span>Product A</span>
                    <div className="day-name-container">
                      <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                      <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                      <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                      <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                      <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                      <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                      <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                    </div>
                  </div>
                  <div className="days-box-caption">
                    <span>Product b</span>
                    <div className="day-name-container">
                      <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                      <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                      <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                      <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                      <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                      <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                      <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                    </div>
                  </div>
                  <div className="days-box-caption">
                    <span>Product c</span>
                    <div className="day-name-container">
                      <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                      <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                      <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                      <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                      <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                      <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                      <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                    </div>
                  </div>
                 </div>
              </div>
          </div>
          <div className="user-data user-informaion-container ">
            <div className="numberBox number-user-data-container color-container-boxex-number">
              <span className="pt-4"> 11 </span>
              <img src={Rectangle_141} alt="" />
              </div>
              <div className="user-data-input design-user-data-container color-container-boxex-text favourite-artist-container" id="wlcome-screan" >
                 <p>How would you rate the different types of chocolate?</p>
                 <div className="days-box">
                  <div className="days-box-caption">
                    <span>Dark Chocolate</span>
                    <div className="checolate-name-container">
                      <div className="checolate-name-box"><span>-2</span></div>
                      <div className="checolate-name-box"><span>-1</span></div>
                      <div className="checolate-name-box"><span>0</span></div>
                      <div className="checolate-name-box"><span>2</span></div>
                      <div className="checolate-name-box"><span>1</span></div>
                    </div>
                  </div>
                  <div className="days-box-caption">
                    <span>Milk Chocolate</span>
                    <div className="checolate-name-container">
                      <div className="checolate-name-box1"><span>-2</span></div>
                      <div className="checolate-name-box1"><span>-1</span></div>
                      <div className="checolate-name-box1"><span>0</span></div>
                      <div className="checolate-name-box1"><span>2</span></div>
                      <div className="checolate-name-box1"><span>1</span></div>
                    </div>
                  </div>
                  <div className="days-box-caption">
                    <span>Sweet Chocolate</span>
                    <div className="checolate-name-container">
                      <div className="checolate-name-box2"><span>-2</span></div>
                      <div className="checolate-name-box2"><span>-1</span></div>
                      <div className="checolate-name-box2"><span>0</span></div>
                      <div className="checolate-name-box2"><span>2</span></div>
                      <div className="checolate-name-box2"><span>1</span></div>
                    </div>
                  </div>
                 
                  <div className="days-box-caption">
                    <span>White Chocolate</span>
                    <div className="checolate-name-container">
                      <div className="checolate-name-box3"><span>-2</span></div>
                      <div className="checolate-name-box3"><span>-1</span></div>
                      <div className="checolate-name-box3"><span>0</span></div>
                      <div className="checolate-name-box3"><span>2</span></div>
                      <div className="checolate-name-box3"><span>1</span></div>
                    </div>
                  </div>
                 
                 </div>
              </div>
          </div>
          <div className="user-data user-informaion-container ">
            <div className="numberBox number-user-data-container color-container-boxex-number">
              <span className="pt-4"> 12 </span>
              <img src={Rectangle_141} alt="" />
              </div>
              <div className="user-data-input design-user-data-container color-container-boxex-text favourite-artist-container" id="wlcome-screan" >
                 <p> How much did Multiple Choice Grid </p>
                 <div className="days-box">
                
                  <div className="viual-container-grid">
                    <div className="vitual"></div>
                    <div className="day-name-container-header choise-grid-dayes-head">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                    </div>
                   </div>
                 
                 </div>
                 <div className="grid-box-caption">
                  <span className="change-background">Product A</span>
                  <div className="grid-name-container">
                    <div className="grid-name-box "></div>
                    <div className="grid-name-box"></div>
                    <div className="grid-name-box"></div>
                    <div className="grid-name-box"></div>
                    <div className="grid-name-box"></div>
                    <div className="grid-name-box"></div>
                    <div className="grid-name-box"></div>
                  </div>
                </div>
                <div className="grid-box-caption">
                  <span className="change-background">Product b</span>
                  <div className="grid-name-container">
                    <div className="grid-name-box "></div>
                    <div className="grid-name-box"></div>
                    <div className="grid-name-box"></div>
                    <div className="grid-name-box"></div>
                    <div className="grid-name-box"></div>
                    <div className="grid-name-box"></div>
                    <div className="grid-name-box"></div>
                  </div>
                </div>
                <div className="grid-box-caption">
                  <span className="change-background">Product c</span>
                  <div className="grid-name-container">
                    <div className="grid-name-box "></div>
                    <div className="grid-name-box"></div>
                    <div className="grid-name-box"></div>
                    <div className="grid-name-box"></div>
                    <div className="grid-name-box"></div>
                    <div className="grid-name-box"></div>
                    <div className="grid-name-box"></div>
                  </div>
                </div>
                 </div>
          </div>
          <div className="user-data user-informaion-container ">
              <div className="numberBox number-user-data-container color-container-boxex-number">
                <span className="pt-4"> 13 </span>
                <img src={Rectangle_141} alt="" />
              </div>
              <div className="user-data-input design-user-data-container color-container-boxex-text favourite-artist-container" id="wlcome-screan" >
                 <p> How would you rate the popular brands of chocolate? </p>
             <div className="choclate-brand-container">
               <span>1</span>
               <div className="choclate-brand-container-select-img">
                  <select name="" id="">
                    <option value="1"></option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
  
                  </select>
               </div>
              </div>
              <div className="choclate-brand-container">
                <span>2</span>
                <div className="choclate-brand-container-select-img">
                  <select name="" id="">
                    <option value="1"></option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
  
                  </select>
                </div>
              </div>
              <div className="choclate-brand-container">
                <span>3</span>
                <div className="choclate-brand-container-select-img">
                  <select name="" id="">
                    <option value="1"></option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
  
                  </select>
                </div>
              </div>
              </div>
          </div>
          <div className="user-data user-informaion-container ">
            <div className="numberBox number-user-data-container color-container-boxex-number">
              <span className="pt-4"> 14 </span>
              <img src={Rectangle_141} alt="" />
            </div>
            <div className="user-data-input design-user-data-container color-container-boxex-text favourite-artist-container" id="wlcome-screan" >
               <p> How would you rate the popular brands of chocolate?</p>
              <div className="rate-choclate-brand-container">
                <span>Toblerone</span>
                <div className="rate-choclate-brand-container-star">
                <i className="fa  fa-star rate"></i>
                <i className="fa  fa-star rate"></i>
                <i className="fa  fa-star rate"></i>
                <i className="fa  fa-star rate"></i>
                <i className="fa  fa-star rate"></i>
                </div>
              </div>
              <div className="rate-choclate-brand-container">
                <span>Ferrero Rocher</span>
                <div className="rate-choclate-brand-container-star">
                <i className="fa  fa-star rate"></i>
                <i className="fa  fa-star rate"></i>
                <i className="fa  fa-star rate"></i>
                <i className="fa  fa-star rate"></i>
                <i className="fa  fa-star rate"></i>
                </div>
              </div>
              <div className="rate-choclate-brand-container">
                <span>Lindt</span>
                <div className="rate-choclate-brand-container-star">
                <i className="fa  fa-star rate"></i>
                <i className="fa  fa-star rate"></i>
                <i className="fa  fa-star rate"></i>
                <i className="fa  fa-star rate"></i>
                <i className="fa  fa-star rate"></i>
                </div>
            </div>
            <div className="rate-choclate-brand-container">
              <span>Hershey's</span>
              <div className="rate-choclate-brand-container-star">
                <i className="fa  fa-star rate"></i>
                <i className="fa  fa-star rate"></i>
                <i className="fa  fa-star rate"></i>
                <i className="fa  fa-star rate"></i>
                <i className="fa  fa-star rate"></i>
              </div>
            </div>
            <div className="rate-choclate-brand-container">
              <span>Cadbury</span>
              <div className="rate-choclate-brand-container-star">
                <i className="fa  fa-star rate"></i>
                <i className="fa  fa-star rate"></i>
                <i className="fa  fa-star rate"></i>
                <i className="fa  fa-star rate"></i>
                <i className="fa  fa-star rate"></i>
              </div>
            </div>
          
          </div>
        </div>
        <div className="user-data user-informaion-container">
          <div className="sub-middle-height numberBox number-user-data-container recommended-section-text chose-date">
            <span className="pt-4"> 15</span>
            <img src={Rectangle_141} alt="" />
          </div>
          <div className="sub-middle-height user-data-input design-user-data-container favourite-artist-container recommended-section-text chose-date" id="wlcome-screan" >
            <p>Please chose a date</p>
           
      <div className="container-chose-date">
          <div className="container-chose-date-box-item">
            <p>month</p>
            <input type="text" name="" id="" />
          </div>
          <div className="container-chose-date-box-item">
            <p>day</p>
            <input type="text" name="" id="" />
          </div>
          <div className="container-chose-date-box-item container-chose-date-box-item-year">
            <p>year</p>
            <input type="text" name="" id="" />
          </div>
          <div>
            <p className="date-line"> | </p>
          </div>
        <div className="container-chose-date-box-item">
          <p>hour</p>
          <input type="text" name="" id="" />
        </div>
        <div className="date-line"><p>:</p></div>
        <div className="container-chose-date-box-item">
          <p>minute</p>
          <input type="text" name="" id="" />
        </div>

        <div className="am-pm-container">
          <p className="am-pm-container-item"><span>AM</span></p>
          <p className="am-pm-container-item"><span>PM</span></p>

        </div>
      </div>

           </div>
          
        </div>
        <div className="user-data user-informaion-container ">
          <div className="numberBox number-user-data-container  nature-photo-container">
            <span className="pt-4"> 16 </span>
            <img src={Rectangle_141} alt="" />
            </div>
            <div className="user-data-input nature-photo-container" id="wlcome-screan" >
               <p>Who should win the best nature photo of the year?</p>
               <div className="nature-photo-content">
                 <div className="nature-photo-content-item">
                  <div className="nature-photo-content-box">
                    <img src={chuttersnap_617671_unsplash} alt="" />
                    <span className="nature-photo-number"> <span>A</span></span>
                      
                    <span className="nature-photo-address"><span>image 1</span></span>
                  </div>
                  <div className="nature-photo-content-box">
                    <img src={chuttersnap_617671_unsplash} alt="" />
                    <span className="nature-photo-number"> <span>b</span></span>
                    <span className="nature-photo-address"><span>image 2</span></span>
                  </div>
                  <div className="nature-photo-content-box">
                    <img src={fog_foggy_forest_4827} alt="" />
                    <span className="nature-photo-number"> <span>c</span></span>
                      
                    <span className="nature-photo-address"><span>image 3</span></span>
                  </div>
                  <div className="nature-photo-content-box">
                    <img src={fog_foggy_forest_4827} alt="" />
                    <span className="nature-photo-number"> <span>d</span></span>
                      
                    <span className="nature-photo-address"><span>image 4</span></span>
                  </div>
                 </div>
                 <div className="nature-photo-content-item">
                <div className="nature-photo-content-box">
                  <img src={fernando_paredes_murillo_462122_unsplash} alt="" />
                  <span className="nature-photo-number"> <span>e</span></span>
                    
                  <span className="nature-photo-address"><span>image 5</span></span>
                </div>
                <div className="nature-photo-content-box">
                  <img src={hd_wallpaper_landscape_mountain_peak_51387} alt="" />
                  <span className="nature-photo-number"> <span>f</span></span>
                    
                  <span className="nature-photo-address"><span>image 6</span></span>
                </div>
                <div className="nature-photo-content-box">
                  <img src={aaron_burden_363695_unsplash} alt="" />
                  <span className="nature-photo-number"> <span>g</span></span>
                    
                  <span className="nature-photo-address"><span>image 7</span></span>
                </div>
                <div className="nature-photo-content-box">
                  <img src={shifaaz_shamoon_1113388_unsplash} alt="" />
                  <span className="nature-photo-number"> <span>h</span></span>
                    
                  <span className="nature-photo-address"><span>image 8</span></span>
                </div>
                </div>
               </div>
            </div>
        </div>
        <div className="user-data user-informaion-container">
          <div className="sub-middle-height numberBox number-user-data-container recommended-section-text">
            <span className="pt-4"> 17</span>
            <img src={Rectangle_141} alt="" />
          </div>
          <div className="sub-middle-height user-data-input design-user-data-container favourite-artist-container recommended-section-text" id="wlcome-screan" >
            <p>How likely is it that you would recommend the event to a friend or colleague?</p>
            <div className="recommended-box">
              <div className="recommended-box-content"><span>0</span></div>
            </div>
            <div className="recommended-box">
              <div className="recommended-box-content"><span>1</span></div>
            </div>
            <div className="recommended-box">
              <div className="recommended-box-content"><span>2</span></div>
            </div>
            <div className="recommended-box">
              <div className="recommended-box-content"><span>3</span></div>
            </div>
            <div className="recommended-box">
              <div className="recommended-box-content"><span>4</span></div>
            </div>
            <div className="recommended-box">
              <div className="recommended-box-content"><span>5</span></div>
            </div>
            <div className="recommended-box">
              <div className="recommended-box-content"><span>6</span></div>
            </div>
            <div className="recommended-box">
              <div className="recommended-box-content"><span>7</span></div>
            </div>
            <div className="recommended-box">
              <div className="recommended-box-content"><span>8</span></div>
            </div>
            <div className="recommended-box">
              <div className="recommended-box-content"><span>9</span></div>
            </div>
            <div className="recommended-box">
              <div className="recommended-box-content"><span>10</span></div>
            </div>
            <div className="recommended-agree">
              <p>Not at all likely</p>
              <p></p>

              <p>Extremely likely</p>
            </div>
           </div>
          
        </div>
        <div className="container-submit-data">
          <button className="submit-data">submit</button>

        </div>
      </div>
    </div>
            </div>
            </div>
        </>

    )
}
