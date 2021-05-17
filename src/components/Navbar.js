import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="nav-container">
          <div className="wrapper">
            <nav>
              <img
                src="./images/icons/subtract-logo.svg"
                alt="safe haven home"
              />

              <ul className="nav-items">
                <li>
                  <a href className="current">
                    Home
                  </a>
                </li>
                <li>
                  <a href>Categories</a>
                  <img src="./images/icons/arrow-down.svg" alt="" />
                </li>
                <li>
                  <a href>About Us</a>
                </li>
                <li>
                  <a href>Agents</a>
                </li>
                <li>
                  <a href>Blog</a>
                </li>
                <li>
                  <a href>Contact Us</a>
                </li>
              </ul>

              <ul className="nav-cta">
                <li>
                  <a className="login-btn" href>
                    LOG IN
                  </a>
                </li>
                <li>
                  <a className="signup-btn" href>
                    SIGN UP
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
