import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import { updateEventRequest } from '../../../utilities/events-api';

export default function EditEventForm({event, setEvent, setEditFormIsOpen}){
    const navigate = useNavigate();
    const eventRef = useRef('')
    const categoryRef = useRef('')
    const dateRef = useRef('')
    const timeRef = useRef('')
    const nameRef = useRef('')
    const phoneRef = useRef('')
    const emailRef = useRef('')
    const websiteRef = useRef('')
    const importanceRef = useRef('')
    const notesRef = useRef('')
    const [error, setError] = useState('')

    async function handleSubmit(e){
        e.preventDefault()
        const updatedEvent = {
            event: eventRef.current.value,
            category: categoryRef.current.value,
            date: dateRef.current.value,
            time: timeRef.current.value,
            name: nameRef.current.value,
            phone_number: phoneRef.current.value,
            email: emailRef.current.value,
            website: websiteRef.current.value,
            importance: importanceRef.current.value,
            notes: notesRef.current.value,
        }
        try{
            const newEvent = await updateEventRequest(event._id, updatedEvent)
            setEvent(newEvent)
            setEditFormIsOpen(false)
        }catch(err){
            setError("Bad Update, Man")
        }
    }
    return(
        <>
        <h3>EDIT</h3>
        <h4><span style={{ color: 'red' }}>*</span> Required Field</h4>
        { error && <p>{JSON.stringify(error)}</p>}
        <form onSubmit={handleSubmit}>
                <label htmlFor="event">Event:<span style={{ color: 'red' }}>*</span></label>
                <input type="text" id="event" defaultValue={event.event} required ref={eventRef}/>
                <label htmlFor="category">Category:<span style={{ color: 'red' }}>*</span></label>
                <select name="category" id="category" ref={categoryRef} required defaultValue={event.category}>
                    <option value="Automotive">Automotive</option>
                    <option value="Education">Education</option>
                    <option value="Financial">Financial</option>
                    <option value="Health">Health</option>
                    <option value="Personal">Personal</option>
                    <option value="Work">Work</option>
                </select>
                <label htmlFor="date">Date:<span style={{ color: 'red' }}>*</span> </label>
                <input type="date" id="date" required ref={dateRef} />
                <label htmlFor="time">Time:</label>
                <input type="time" id="time" ref={timeRef} />
                <label htmlFor="name">Company/Person Name:<span style={{ color: 'red' }}>*</span> </label>
                <input type="text" id="name" required defaultValue={event.name} ref={nameRef} />
                <label htmlFor="phone_number">Phone:</label>
                <input type="tel" id="phone_number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    ref={phoneRef} defaultValue={event.phone_number}/>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" ref={emailRef} defaultValue={event.email} /> 
                <label htmlFor="website">Website:</label>
                <input type="text" id="website" ref={websiteRef}defaultValue={event.website}/>   
                <label htmlFor="importance">Importance Level:</label>
                <select name="importance" id="importance" ref={importanceRef} defaultValue={event.importance}>
                    <option value="High">High</option>
                    <option value="Mid">Mid</option>
                    <option value="Low">Low</option>
                </select>
                <label htmlFor="notes">Notes:</label>
                <input type="textarea" rows="5" cols="50" id="notes" ref={notesRef} defaultValue={event.notes}/>
                <button>Edit the Event</button>
            </form>
            <h4><span style={{ color: 'red' }}>*</span> Required Field</h4>

            </>
    )
}