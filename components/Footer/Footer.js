import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../Logo";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__bar">
        {/* <h2 className="nintendo-logo">
          Nintendo<small>&copy;</small>
        </h2> */}
        <Logo id={"footer-logo"} />
        <div className="footer__bar--socials">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faYoutube} />
        </div>
      </div>
      <div className="footer__links">
        <div className="box grid-row-span-2">
          <p className="footer__links--title">About Nintendo</p>
          <p className="footer__links--link">Careers</p>
          <p className="footer__links--link">Corporate Responsibility</p>
        </div>
        <div className="box grid-row-span-2">
          <p className="footer__links--title">Shop</p>
          <p className="footer__links--link">Games</p>
          <p className="footer__links--link">Hardware</p>
          <p className="footer__links--link">Merchandise</p>
          <p className="footer__links--link">Sales & deals</p>
          <p className="footer__links--link">Exclusives</p>
          <p className="footer__links--link">Online Service</p>
          <p className="footer__links--link">Nintendo NY Store</p>
        </div>
        <div className="box grid-row-span-2">
          <p className="footer__links--title">My Orders</p>
          <p className="footer__links--link">Order details</p>
          <p className="footer__links--link">Shipping Info</p>
          <p className="footer__links--link">Returns and Exchanges</p>
          <p className="footer__links--link">FAQ</p>
        </div>
        <div className="box grid-row-span-2">
        <p className="footer__links--title">Support</p>
          <p className="footer__links--link">Nintendo Switch</p>
          <p className="footer__links--link">Nintendo Account</p>
          <p className="footer__links--link">Other systems</p>
          <p className="footer__links--link">Repairs</p>
          <p className="footer__links--link">Nintendo product recycling</p>
        </div>
        <div className="box">
        <p className="footer__links--title">Parents</p>
          <p className="footer__links--link">Info for parents</p>
          <p className="footer__links--link">Parental Controls</p>
        </div>
        <div className="box">
        <p className="footer__links--title">Privacy</p>
          <p className="footer__links--link"> Privacy Policy</p>
          <p className="footer__links--link">Cookies and interest-based ads</p>
        </div>
        <div className="box">
        <p className="footer__links--title">Community</p>
          <p className="footer__links--link">Community guidelines</p>
          <p className="footer__links--link">Online Safety</p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© Nintendo. Games are property of their respective owners. Nintendo of America Inc. Headquarters are in Redmond, Washington, USA</p>
        <div className="footer__bottom--links">
            <p>Contact Us</p>
            <p>Feedback</p>
            <p>Terms of Use</p>
            <p>Documents and Policy</p>
        </div>
      </div>
    </div>
  );
}
