import React from 'react';
import {Route,Switch} from 'react-router-dom';
import {Home} from './pages/home/home';
import {ContactUs} from './pages/contactUs/contactUs';
import {HowItWorks} from './pages/howItWorks/howItWorks';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';

function App() {
  return (   
    <React.Fragment>
      <Switch>
      <Route exact path="/" component={HowItWorks}/>
      </Switch>
    </React.Fragment>
  );
}
export default App;
