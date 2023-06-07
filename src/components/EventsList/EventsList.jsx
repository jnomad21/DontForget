import EventsListItem from "./EventListItem/EventListItem"

export default function EventsList({events}){
    const eventsComponents = events.map(event => <EventsListItem key={event._id} event={event}/>)
    return (
        <>
            {eventsComponents}
        </>
    )
}