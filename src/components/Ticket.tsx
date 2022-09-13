import * as React from "react"
import { TicketProps } from "../files/customTypes"
import SwitchCityName from "../files/switchCityName"

export default function Ticket(props?: TicketProps) {
  let c
  let linkURL = `http://elephantetix.imgix.net/tickets/`
  if (props?.city) {
    c = SwitchCityName(props.city, "ticket")
  } else {
    return null
  }
  return (
    <div className='custom-ticket-section'>
      <img
        src={`${linkURL}${c}.png?w=690&h=690&fit=crop&crop=entropy&auto=format&q=60`}
        alt='ticket stub'
        className='custom-ticket-image'
      />
    </div>
  )
}
// TODO ADD TO MONGO FOR FASTER LOAD
