import EventsListItem from "./EventListItem/EventListItem"

export default function EventsList({events}){
    const eventDate = new Date(events.date);
    const monthName = eventDate.toLocaleString(undefined, { month: 'long', });
    const eventsComponents = events.map(event => <EventsListItem key={event._id} event={event}/>)
    console.log(eventsComponents)
    return (
        <>
            {eventsComponents}
            
        </>
    )
}