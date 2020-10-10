import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import { Properties } from "./pages/Properties";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/properties" component={Properties} />
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
