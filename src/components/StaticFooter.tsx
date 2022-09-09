import * as React from "react"
// import elephantLogo from "../files/svgs/elephantLogo.svg"
import staticCustom from "../files/svgs/staticCustom.svg"

export default function StaticFooter() {
  return (
    <div id='static-footer' className='static-footer'>
      <img
        src={staticCustom}
        className='static-footer-art'
        alt='duplicate art to the header to designate the end of your journey'
      />
    </div>
  )
}
