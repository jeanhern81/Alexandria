import React, { Component } from "react";
import NavBarHome from "../components/NavBarHome";
import Footer from '../components/Footer';

class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBarHome />

        <Footer />
      </div>
    );
  }
}
export default Home;
