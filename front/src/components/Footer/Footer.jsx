/* eslint-disable quotes */
import React from "react";
import "./footerStyles.scss";

function Footer() {
  return (
    <footer className="footer">
      <h1 className="footer-title">Copyright 2023</h1>
    </footer>
  );
}

export default React.memo(Footer);
