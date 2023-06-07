import { Link } from 'react-router-dom'

export default function EventsListItem({event}){
    const eventDate = new Date(event.date);
    const monthName = eventDate.toLocaleString(undefined, { month: 'long' });

    return(
        <>
        <p>
            <Link to={`/events/${event._id}`}>
                {event.event} 
            </Link><br />
            {monthName}
        </p>
        </>
    )
}