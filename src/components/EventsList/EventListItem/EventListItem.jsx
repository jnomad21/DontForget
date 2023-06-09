import { Link } from 'react-router-dom';
import EventDate from '../../EventDate/EventDate';


export default function EventsListItem({event, handleDelete}){
    const eventDate = new Date(event.date);
    const monthName = eventDate.toLocaleString(undefined, { month: 'long' });
    
    function deleteThisItem(){
        handleDelete(event._id)
    }

    return(
        <>
        
        <h2>{monthName}</h2>
        <p>
            <Link to={`/events/${event._id}`}>
                {event.event} 
            </Link><br />
            <EventDate event={eventDate}/>
            <button className="delete-button" onClick={deleteThisItem}>X</button>
            
        </p>

        </>
    )
}