import React, { Component } from "react";
import SignUpForm from "../components/SignUpForm";
import Footer from "../components/Footer";

class SignUp extends React.Component {
  render() {
    return (
      <div>
        <SignUpForm />
        <Footer />
      </div>
    );
  }
}
export default SignUp;
