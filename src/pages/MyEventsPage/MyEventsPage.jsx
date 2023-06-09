import { eventsIndexRequest, deleteEventRequest } from '../../utilities/events-api';
import { useEffect, useState } from 'react'
import EventsList from '../../components/EventsList/EventsList';

export default function MyEventsPage(){
    const [events, setEvents] = useState([])
    useEffect(()=>{
        async function getEvents(){
            const events = await eventsIndexRequest();
            setEvents(events)
        }
        getEvents();
    }, [])

    async function handleDelete(eventToDelete){
        await deleteEventRequest(eventToDelete);
        const updatedEvents = events.filter(event => event._id !== eventToDelete);
        setEvents(updatedEvents);
    } 
  
        
    return(
        <>
        <h1>Upcoming Events</h1>
        <EventsList events={events} handleDelete={handleDelete}/>
        </>
    )
}