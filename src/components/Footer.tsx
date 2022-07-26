import * as React from 'react';
import elephantLogo from '../files/svgs/elephantLogo.svg';

export default function Footer() {
    return(
        <div className="footer-container">
            <span className="footer-item"> ELEPHANTMUSIC.COM </span>
            <span className="footer-item"> <img className="footer-elephant-logo" src={elephantLogo} alt="mini-elephant-logo" /></span>
            <span className="footer-item"> LEGAL TERMS </span>
        </div>
    )
}