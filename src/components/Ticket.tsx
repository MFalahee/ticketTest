import * as React from "react"
import { TicketProps } from "../files/customTypes"

export default function Ticket(props: TicketProps) {
  return (
    <div className='custom-ticket-section'>
      <img
        src={`${props.ticketURL}`}
        alt='ticket stub from the concert'
        className='custom-ticket-image'
      />
    </div>
  )
}
