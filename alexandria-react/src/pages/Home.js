import React, { Component } from "react";
import Bootstrap from "react-bootstrap";

class Home extends React.Component {
  render() {
    return (
      <div>
        {/* <!-- Beginning of NavBar --> */}

        {/* <!-- Possible New Navbar Code --> */}
        <div class="container-fluid">
          <nav class="navbar-fixed nav-wrapper teal lighten-2">
            <a href="#" class="main center brand-logo">
              <img
                src="assets/images/Alexandria-logo-BW.png"
                id="alexandria-logo"
                alt="Alexandria Company Logo"
                width="250"
              />
            </a>
            <a href="#" data-target="mobile-links" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
              <li>
                <a class="btn modal-trigger" href="#modal3">
                  Login
                </a>
              </li>

              <li>
                <a class="btn modal-trigger" href="#modal2">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <ul class="sidenav" id="mobile-links">
            <li>
              <a class="modal-trigger" href="#modal3">
                Login
              </a>
            </li>
            <li>
              <a class="modal-trigger" href="#modal2">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- Jumbotron --> */}

        <div class="row">
          <div class="col s12 m6">
            <div class="card transparent">
              <div class="card-content white-text" id="smartest">
                <span class="card-title">
                  {" "}
                  <h2> The Smartest Way to Manage Rental Properties</h2>
                </span>
                <p>
                  <h5>
                    Take your investment to the next level. Use digital
                    information to enhance your real estate decision making and
                    start visualizing your profits.
                  </h5>
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col s12 m6">
              <div class="transparent">
                <div class="card-content white-text">
                  <p>
                    <img
                      id="iphone-x"
                      src="assets/images/backgrounds/iPhone2X.png"
                      alt="image of iphone with housing information"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Login Modal Structure --> */}

          <div id="modal3" class="modal modal-fixed-footer">
            <div class="center-align">
              <img
                src="assets/images/Alexandria-logo-s.png"
                id="alexlogo"
                alt="Alexandria logo"
              />
            </div>
            <div class="modal-content">
              <h4>Login</h4>
              <p class="center-align">Welcome Back!</p>
              <div class="container">
                <form id="login">
                  <label for="username">username</label>
                  <input type="text" id="username" />
                  <br />
                  <label for="password"> password </label>
                  <input type="text" id="password" />
                  <p>
                    <label>
                      <input type="checkbox" />
                      <span>Remember Me</span>
                    </label>
                  </p>
                </form>
                <br />
                <form>
                  <p>
                    New Customer? <a href="signUp.home.html">Create account</a>
                  </p>
                </form>
              </div>
            </div>
            <div class="modal-footer">
              <a href="properties.html">
                <button
                  class="teal btn waves-effect waves-light"
                  type="submit"
                  name="action"
                >
                  Log In <i class="fas fa-sign-in-alt fa-sm"></i>
                </button>
              </a>
              <a href="signUp.home.html">
                <button
                  class="teal btn waves-effect waves-light "
                  type="submit"
                  name="action"
                >
                  {" "}
                  Sign Up <i class="fas fa-user-plus fa-sm"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* <!-- End Login Modal Structure --> */}

        {/* <!--Sign Up Modal--> */}

        {/* <!-- Contact Us Modal Structure --> */}
        <div id="modal2" class="modal modal-fixed-footer">
          <div class="modal-content">
            <h4>Contact Us</h4>
            <p>
              We'd love to hear from you, please drop us a message if you have
              any questions.
            </p>
            <div class="container">
              <form id="contactus">
                <label for="fullname">Full Name</label>
                <input type="text" id="fullname" />
                <br />
                <label for="customeremail"> Email </label>
                <input type="text" id="customeremail" />
                <br />
                <label for="message">Message</label>
                <input type="text" id="message" />
              </form>
            </div>
          </div>
          <div class="modal-footer">
            <a
              href="https://www.instagram.com/alexandria.smart/"
              target="_blank"
              class="fa fa-instagram fa-lg"
            ></a>

            <a href="#!" class="modal-close waves-effect waves-green btn-flat">
              Send
            </a>
          </div>
        </div>
        {/* <!-- End of Contact Us Modal Structure --> */}
      </div>
    );
  }
}
export default Home;
