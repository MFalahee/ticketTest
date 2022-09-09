import * as React from "react"
import elephantLogo from "../files/svgs/elephantLogo.svg"

export default function Footer() {
  const footerRef = React.useRef(null)
  function linkOnClick(link: string, e: React.MouseEvent) {
    e.preventDefault()
    window.open(link)
  }

  return (
    <div ref={footerRef} id='moving-footer' className='footer-container'>
      <div className='footer-elephant-logo-container'>
        <img
          className='footer-elephant-logo'
          src={elephantLogo}
          alt='mini-elephant-logo'
        />
      </div>
      <div className='footer-background'></div>
      <div className='footer-item-container'>
        <span
          className='footer-item'
          onClick={(e) => {
            linkOnClick("http://www.elephantemusic.com/", e)
          }}
        >
          {" "}
          ELEPHANTEMUSIC.COM{" "}
        </span>
        <span className='footer-item'> LEGAL TERMS </span>
      </div>
    </div>
  )
}
