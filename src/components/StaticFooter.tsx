import * as React from "react"
import elephantLogo from "../files/svgs/elephantLogo.svg"
import headerImg from "../files/svgs/header.svg"

export default function StaticFooter() {
  function linkOnClick(link: string, e: React.MouseEvent) {
    e.preventDefault()
    window.open(link)
  }
  return (
    <div className='footer-container'>
      <img
        src={headerImg}
        className='footer-art'
        alt='duplicate art to the header to designate the end of your journey'
      />
    </div>
  )
}
