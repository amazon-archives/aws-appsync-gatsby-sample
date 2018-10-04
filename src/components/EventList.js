import React from "react"

const EventList = ({ events }) => (
    <div>
        {events.map((event, i) => (
            <div key={i}>
                <h2>{event.name}</h2>
                <ul>
                    <li>When: {event.when}</li>
                    <li>Where: {event.where}</li>
                </ul>
            </div>
        ))}
    </div>
)

export default EventList;
