import { Paper } from '@mui/material';
import ticketImage from '../files/concertphotos/test1.jpg';

export default function Ticket() {
    return(
        <div className="custom-ticket-section">
            <p className="custom-ticket-text"> Your Ticket</p>
            <Paper className="custom-ticket-paper">
                <img src={ticketImage} alt="ticket stub" className="custom-ticket-image"/>
            </Paper>
            <p className="custom-ticket-text"> Your Ticket </p>
        </div>
    )
}