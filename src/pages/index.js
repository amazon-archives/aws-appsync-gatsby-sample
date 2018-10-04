import React from "react"
import EventList from "../components/EventList"

const Index = ({ data }) => (
    <div>
        <h1>Events</h1>
        <EventList events={data.events.listEvents.items} />
    </div>
)

export default Index;

export const query = graphql`
    query ListEvents {
        events {
            listEvents {
                items {
                    id
                    name
                    when
                    where
                }
            }
        }
    }
`
