import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import "./App.css";
import Home from "./pages/Home";
import Properties from "./pages/Properties"
import SignUp from './components/SignUpModal';


function App() {


  return (

    <Router>
      <Home />
      <Properties />

      <div class='App'>

        <Nav />

        <Route exact path='/home' component={Home} />
        <Route exact path='/Properties' component={Properties} />




      </div>
    </Router>





  )




}





export default App;
