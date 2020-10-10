import React, { Component } from "react";

//Pages
import NavBarHome from "../components/NavBarHome";
import Footer from '../components/Footer';
import HomeBody from "../components/HomeBody";
//Style Sheet
import '../index.css';

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
