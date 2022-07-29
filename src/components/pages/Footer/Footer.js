import './Footer.css';
import React from 'react';
import { Button } from '../../Button/Button';

function Footer() {
  return (
    <>
      <div className="footer-container">
        <section className="footer-subscription">
          <p className="footer-subscription-heading">
            Sign up to our beta form
          </p>
          <p className="footer-subscription-text">
            Sign up to our mailing list to find out more information and keep up
            to date about our activities
          </p>
          <div className="input-areas">
            <form>
              <input
                className="footer-input"
                name="email"
                type="email"
                placeholder="email"
              />
              <Button buttonStyle="btn--primary">Subscribe</Button>
            </form>
          </div>
        </section>
      </div>

      <div className="footer-container2">
        <section className="social-media">
          <div className="social-media-wrap">
            <small className="website-rights">
              © 2020 Whichride - All rights reserved.
            </small>
            <small className="website-rights">
              Privacy Policy Terms and Conditions.
            </small>
          </div>
        </section>
      </div>
    </>
  );
}

export default Footer;
