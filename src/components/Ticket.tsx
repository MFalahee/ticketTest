import * as React from "react"
import { TicketProps } from "../files/customTypes"
import SwitchCityName from "../files/switchCityName"

export default function Ticket(props?: TicketProps) {
  let c
  let linkURL = `https://dxwo1d2zr23r.cloudfront.net/tickets`
  if (props?.city) {
    c = SwitchCityName(props.city)
  } else {
    c = "nyc"
  }
  return (
    <div className='custom-ticket-section'>
      <img
        src={`${linkURL}/${c}.png`}
        alt='ticket stub'
        className='custom-ticket-image'
      />
    </div>
  )
}
// TODO ADD TO MONGO FOR FASTER LOAD
