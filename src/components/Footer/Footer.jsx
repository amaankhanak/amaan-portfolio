import React from "react";
import "./Footer.css";

const Footer = ({ footerClass }) => {
  return (
    <div className={`footer ${footerClass}`}>
      <a href="mailto:sameeramaan2014@gmail.com">sameeramaan2014@gmail.com</a>
    </div>
  );
};

export default Footer;
