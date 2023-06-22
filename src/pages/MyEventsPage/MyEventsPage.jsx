import { eventsIndexRequest, deleteEventRequest } from '../../utilities/events-api';
import { useEffect, useState } from 'react'
import EventsList from '../../components/EventsList/EventsList';
import side from '../../side.jpg'
import sideRight from '../../sideRight.jpg'



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
        
      <div><img id="left-side" src={side} alt="" />
      <img id="right-side" src={sideRight} alt="" />
      </div>
        <h1>Upcoming Events</h1>
        <div className="myEvents">
        <EventsList events={events} handleDelete={handleDelete}/>
        </div>
        
        </>
    )
}