import { Link } from 'react-router-dom';
import EventDate from '../../EventDate/EventDate';

export default function EventsListItem({event}){
    const eventDate = new Date(event.date);
    const monthName = eventDate.toLocaleString(undefined, { month: 'long' });
    console.log(monthName)
    return(
        <>
        
        <h2>{monthName}</h2>
        <p>
            <Link to={`/events/${event._id}`}>
                {event.event} 
            </Link><br />
            <EventDate event={eventDate}/>
            
        </p>

        </>
    )
}