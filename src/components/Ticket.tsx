import * as React from "react"
import { TicketProps } from "../files/customTypes"

export default function Ticket(props?: TicketProps) {
  let linkURL = `https://ticketimagebucket.s3.us-west-1.amazonaws.com/tickets`
  return (
    <div className='custom-ticket-section'>
      <img
        src={`${linkURL}/${props?.city}.png`}
        alt='ticket stub'
        className='custom-ticket-image'
      />
    </div>
  )
}
// TODO ADD TO MONGO FOR FASTER LOAD
