import React from "react"
import EventList from "../components/EventList"

const Index = ({ data }) => (
    <div>
        <h1>AWS AppSync Events</h1>
        <p><a href="https://aws.amazon.com/appsync/">AWS AppSync</a> is a serverless backend for web and mobile apps powered by GraphQL that provides real-time and offline data access. <a href="https://github.com/aws-samples/aws-appsync-gatsby-sample">This sample</a> renders a list of events retrieved from an AWS AppSync GraphQL API into a Gatsby site.<hr /></p>
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
