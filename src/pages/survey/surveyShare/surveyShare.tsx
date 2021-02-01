import { SurveyNavBar } from '../components/surveyNavBar';
export const SurveyShare = () => {
    return (
        <>
        <div className="survey-share">
        <SurveyNavBar />
        <hr className="survey-hr"></hr>
        <div className="share-content">
            <p className="share-ques">How do you want to share your survey?</p>
            <div className="share-ways">
                <div className="web-share">
                    <p className="share-main-p">Web Link</p>
                    <p className="share-second-p">Share it with people so they can visit and respond to your survey</p>
                    <div className="share-generatedText"><span>https://loremipsum.com/random/a3ghtrtp</span></div>
                    <button className="sign-up-for-free copy-btn">copy</button>
                    <button className="share-btn">
                    <i className="fas fa-arrow-down"></i>
                         Download QR Code
                         </button>
                </div>
                <div className="other-share-ways">
                    <div className="social-media-share">
                        <p  className="share-main-p">Social media and email</p>
                        <p className="share-second-p">Share your survey on social media or send it in an email</p>
                        <div className="social-media-box">
                            <span><i className="fa fa-facebook"></i></span>
                            <span><i className="fa fa-linkedin"></i></span>
                            <span><i className="fa fa-twitter"></i></span>
                            <span><i className="fa fa-google"></i></span>
                            <span><i className="fa fa-envelope"></i></span>
                        </div> 
                    </div>
                    <div className="web-page-share">
                        <p className="share-main-p">Embed in a web page</p>
                        <p className="share-second-p">Paste this into your HTML wherever you want the embedded survey to appear on your page.</p>
                        <button className="share-btn">Copy Code</button>
                    </div>
                    <div className="add-profile-share">
                        <p  className="share-main-p">Add to Profile Page</p>
                        <p  className="share-second-p">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
                        <button className="share-btn">add</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
