import { eventsIndexRequest } from '../../utilities/events-api';
import { useEffect, useState } from 'react'
import EventsList from '../../components/EventsList/EventsList';

export default function MyEventsPage(){
    const [events, setEvents] = useState([])
    useEffect(()=>{
        console.log('loading...')
        async function getEvents(){
            const events = await eventsIndexRequest();
            setEvents(events)
        }
        getEvents();
    }, [])
    return(
        <>
        <h1>Upcoming Events</h1>
        <EventsList events={events} />
        </>
    )
}