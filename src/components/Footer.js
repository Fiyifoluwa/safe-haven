import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        {/* footer */}
        <section className="footer wrapper">
          <a href>
            <img src="./images/icons/subtract-logo.svg" alt="" />
          </a>
          <div>
            <ul>
              <li className="head">Safe Haven</li>
              <li>
                <a href>Why Safehaven?</a>
              </li>
              <li>
                <a href>For sale</a>
              </li>
              <li>
                <a href>For rent</a>
              </li>
            </ul>
            <ul>
              <li className="head">Legal</li>
              <li>
                <a href>Terms and Conditions</a>
              </li>
              <li>
                <a href>Privacy Policy</a>
              </li>
              <li>
                <a href>Cookies</a>
              </li>
            </ul>
            <ul>
              <li className="head">Get in touch</li>
              <li>
                <a href="mailto:info@safehaven.com">info@safehaven.com</a>
              </li>
              <li>
                <a href="tel:+2347056824910">+2347056824910</a>
              </li>
            </ul>
            <ul>
              <li className="head">Resources</li>
              <li>
                <a href>Become an agent</a>
              </li>
              <li>
                <a href>Blog</a>
              </li>
            </ul>
            <ul>
              <li className="head">Follow us</li>
              <li>
                <a href="https://twitter.com">Twitter</a>
              </li>
              <li>
                <a href="https://facebook.com">Facebook</a>
              </li>
              <li>
                <a href="https://instagram.com">Instagram</a>
              </li>
            </ul>
          </div>
        </section>
        <div className="footer-footer wrapper">
          2021 Safe Haven by <a href="https://twitter.com/_thefeyi_">Feyi</a>{" "}
          and <a href="https://github.com/Fiyifoluwa">Fiyi</a>
        </div>
      </div>
    );
  }
}
