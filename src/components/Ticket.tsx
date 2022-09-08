import { TicketProps } from "../files/customTypes"

export default function Ticket(props?: TicketProps) {
  const apiLink = "https://ticketimagebucket.s3.us-west-1.amazonaws.com/tickets"
  const ticketImage = () => {
    let l
    props?.city
      ? (l = `${apiLink}/${props?.city}.png`)
      : (l = `${apiLink}/nyc.png`)
    return l
  }
  return (
    <div className='custom-ticket-section'>
      <img
        src={ticketImage()}
        alt='ticket stub'
        className='custom-ticket-image'
      />
    </div>
  )
}
// TODO ADD TO MONGO FOR FASTER LOAD
