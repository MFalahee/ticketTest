import ticketImage from "../files/svgs/ticket.svg"

export default function Ticket() {
  return (
    <div className='custom-ticket-section'>
      <img
        src={ticketImage}
        alt='ticket stub'
        className='custom-ticket-image'
      />
    </div>
  )
}
// TODO ADD TO MONGO FOR FASTER LOAD
