import React from 'react';
import {Route,Switch} from 'react-router-dom';
import {Home} from './pages/home/home';
import {ContactUs} from './pages/contactUs/contactUs';
import {Terms} from './pages/terms/terms';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';

function App() {
  return (   
    <React.Fragment>
      <Switch>
      <Route exact path="/" component={Terms}/>
      </Switch>
    </React.Fragment>
  );
}
export default App;
