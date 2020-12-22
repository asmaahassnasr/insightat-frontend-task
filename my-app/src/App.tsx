import React from 'react';
import {Route,Switch} from 'react-router-dom';
import {Home} from './pages/home/home';
import {Footer} from './components/footer/footer';
import {Terms} from './pages/terms/terms';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';

function App() {
  return (   
    <React.Fragment>
      <Switch>
      <Route exact path="/" component={Terms}/>
      </Switch>
      <Footer />
    </React.Fragment>
  );
}
export default App;
