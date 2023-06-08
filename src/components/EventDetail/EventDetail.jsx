import { useState} from 'react'
import EditEventForm from './EditEventForm/EditEventForm'
import EventDate from '../EventDate/EventDate';



export default function EventDetail({event, handleDelete, setEvent}){
    const [editFormIsOpen, setEditFormIsOpen] = useState(false)
    const eventDate = new Date(event.date);
    const monthName = eventDate.toLocaleString(undefined, { month: 'long', });
    
    function toggleEditForm(){
        setEditFormIsOpen((prevState) => {
            return !prevState
            }
        )
    }
    return (
        <>
            <div>
                <h3>{event.event}</h3>
                <h4>Category: {event.category}</h4>
                <h4>Date: <EventDate event={eventDate} /></h4>
                <h4>Time: {event.time}</h4>
                <h4>Company/Person Name: {event.name}</h4>
                <h4>Phone #: {event.phone_number}</h4>
                <h4>Email: {event.email}</h4>
                <h4>Website: {event.website}</h4>
                <h4>Importance Level: {event.importance}</h4>
                <h4>Notes: {event.notes}</h4>

                <button onClick={handleDelete}>DELETE {event.event}</button>
                <button onClick={toggleEditForm}>
                    {editFormIsOpen ? "Close Editor" : "Edit"}
                </button>
                { editFormIsOpen && 
                    <EditEventForm event={event} setEvent={setEvent} setEditFormIsOpen={setEditFormIsOpen}></EditEventForm>
                }
            </div>
        </>
    )
}