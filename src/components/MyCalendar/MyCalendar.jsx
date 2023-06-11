import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect, useState } from "react";
import { eventsIndexRequest } from "../../utilities/events-api";
import moment from "moment";
import { Link } from "react-router-dom";

const localizer = momentLocalizer(moment);

export default function MyCalendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function getEvents() {
      const events = await eventsIndexRequest();
      setEvents(events);
    }
    getEvents();
  }, []);

  const handleEventClick = (events) => {
    window.location.href = `/events/${events._id}`;
        }
  return (
    <>
    <h1>My Calendar</h1>
    <Calendar 
      localizer={localizer}
      events={events}
      startAccessor="date"
      endAccessor="date"
      titleAccessor="event" 
      style={{ height: "600px" }}
      onSelectEvent={handleEventClick}/>
      </>
  );
}
