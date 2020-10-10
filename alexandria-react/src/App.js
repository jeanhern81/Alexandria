import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import "./App.css";
import Home from "./pages/Home";
import { Properties } from './pages/Properties';



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/properties' component={Properties} />

        </Switch>
      </div>
    </Router>

  );
}

export default App;
