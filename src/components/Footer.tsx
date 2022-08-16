import * as React from "react";
import elephantLogo from "../files/svgs/elephantLogo.svg";

export default function Footer() {
  function linkOnClick(link: string, e: React.MouseEvent) {
    e.preventDefault();
    window.open(link);
}
  return (
    <div className="footer-container">
      <span className="footer-item"
            onClick={(e) => {
              linkOnClick('http://www.elephantemusic.com/', e)
            }}
      > ELEPHANTEMUSIC.COM </span>
      <span className="footer-item">
        {" "}
        <img
          className="footer-elephant-logo"
          src={elephantLogo}
          alt="mini-elephant-logo"
        />
      </span>
      <span className="footer-item"> LEGAL TERMS </span>
    </div>
  );
}
