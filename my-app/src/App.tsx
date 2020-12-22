import React from 'react';
import {Route,Switch} from 'react-router-dom';
import {NavigationBar} from './components/MainNavBar/navigationBar';
import {Footer} from './components/footer/footer';
import {Home} from './pages/home/home';
import {Privacy} from './pages/privacy/privacy';
import {HowItWorks} from './pages/howItWorks/howItWorks';
import {Terms} from './pages/terms/terms';
import {ContactUs} from './pages/contactUs/contactUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import { ImportsNotUsedAsValues } from 'typescript';

function App() {
  return (   
    <React.Fragment>
      <NavigationBar />
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route  path="/privacy" component={Privacy}/>
      <Route  path="/terms" component={Terms}/>
      <Route  path="/howItWorks" component={HowItWorks}/>
      <Route  path="/contactUs" component={ContactUs}/>
      </Switch>
      <Footer />
    </React.Fragment>
  );
}
export default App;
