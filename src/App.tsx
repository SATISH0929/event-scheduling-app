import React, { useState } from "react";

import "./styles.css";

// Define the Event type
interface Event {
  name: string;
  date: string;
  time: string;
  description: string;
}

export default function App() {
  const [eventName, setEventName] = useState<string>("");
  const [eventDate, setEventDate] = useState<string>("");
  const [eventTime, setEventTime] = useState<string>("");
  const [eventDes, setEventDes] = useState<string>("");

  // State to store the list of events
  const [events, setEvents] = useState<Event[]>([]);

  const addEvent = (newEvent: Event) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
    console.log("Event added:", newEvent); // For debugging
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addEvent({
      name: eventName,
      date: eventDate,
      time: eventTime,
      description: eventDes,
    });
    // Clear form inputs
    setEventName("");
    setEventDate("");
    setEventTime("");
    setEventDes("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="formCont">
        <input
          className="input"
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
        />
        <input
          className="input"
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          required
        />
        <input
          className="input"
          type="time"
          value={eventTime}
          onChange={(e) => setEventTime(e.target.value)}
          required
        />
        <input
          className="input"
          type="text"
          placeholder="Event Description"
          value={eventDes}
          onChange={(e) => setEventDes(e.target.value)}
          required
        />
        <button type="submit" className="btn">
          Add Event
        </button>
      </form>

      <h2 className="event-list-head">Events:</h2>
      <div className="eventsList">
        {events.map((event, index) => (
          <div key={index} className="eventItem">
            <h3>{event.name}</h3>
            <p>
              {event.date} at {event.time}
            </p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
