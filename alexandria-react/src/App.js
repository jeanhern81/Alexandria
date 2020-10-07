import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import "./App.css";
import Home from "./pages/Home";
import SignUp from './components/SignUpModal';


function App() {




    return (

    <Router>
    <Home />

      <div class='App'>

        <Nav />

          <Route exact path='/home' component={Home} />

        
        

      </div>
    </Router>





    )

  
    

  }

  



export default App;
