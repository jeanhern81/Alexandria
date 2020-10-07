import React, { Component } from "react";
import NavBarHome from "../components/NavBarHome";
import Footer from '../components/Footer';

import '../index.css';
import HomeBody from "../components/HomeBody";

class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBarHome />

        <HomeBody />

        <Footer />
      </div>
    );
  }
}
export default Home;
