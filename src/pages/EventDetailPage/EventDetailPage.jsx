import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getEventRequest, deleteEventRequest } from "../../utilities/events-api";
import EventDetail from "../../components/EventDetail/EventDetail";

export default function EventDetailPage(){
    let { eventId } = useParams();
    const [event, setEvent] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    useEffect(()=>{
        async function getEvent(){
            const event = await getEventRequest(eventId);
            if(event){
                setEvent(event)
                setTimeout(()=>{
                    setLoading(false)
                }, 100)
            }else{
                setError('No event Found')
                setLoading(false)
            }
        }
        getEvent()
    }, [])


async function handleDelete(e){
    const deleteResponse = await deleteEventRequest(event._id);
    if(deleteResponse.data === 'success'){
        navigate('/events')
    }
}
return (
    <>
    <h1>Don't Forget your event!</h1>
    { loading ? <p>Loading....</p>
    :
    error ? <p>{error}</p> 
    :
    <EventDetail event={event} handleDelete={handleDelete} setEvent={setEvent}></EventDetail>
    }
    </>
)
}
