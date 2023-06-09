import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect, useState } from "react";
import { eventsIndexRequest } from "../../utilities/events-api";
import moment from "moment";

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

  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="date"
      endAccessor="date"
      titleAccessor="event" // Use titleAccessor to specify the title field
      style={{ height: "700px" }}
    />
  );
}
