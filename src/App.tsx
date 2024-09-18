import React, { useState } from "react";

import "./styles.css";

export default function App() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventDes, setEventDes] = useState("");

  const addEvent = {};

  const handleSubmit = (event) => {
    event.preventDefault();
    addEvent({
      name: eventName,
      date: eventDate,
      time: eventTime,
      description: eventDes,
    });
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
    </div>
  );
}
