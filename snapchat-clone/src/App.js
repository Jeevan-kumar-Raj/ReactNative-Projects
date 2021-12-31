import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Preview from './Preview';
import WebcamCaputre from './WebcamCaputre'
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <div className='app__body'>

          <Switch>
      
            <Route  path="/preview">
            <Preview />
            </Route>
            <Route exact path="/">
            <WebcamCaputre />
            </Route>
          </Switch>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
