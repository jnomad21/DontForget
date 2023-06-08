import { Link } from 'react-router-dom';
import EventDate from '../../EventDate/EventDate';
import { deleteEventRequest } from '../../../utilities/events-api';

export default function EventsListItem({event}){
    const eventDate = new Date(event.date);
    const monthName = eventDate.toLocaleString(undefined, { month: 'long' });
    async function handleDelete(e){
        const deleteResponse = await deleteEventRequest(event._id);
    }
    return(
        <>
        
        <h2>{monthName}</h2>
        <p>
            <Link to={`/events/${event._id}`}>
                {event.event} 
            </Link><br />
            <EventDate event={eventDate}/>
            <button className="delete-button" onClick={handleDelete}>X</button>
            
        </p>

        </>
    )
}