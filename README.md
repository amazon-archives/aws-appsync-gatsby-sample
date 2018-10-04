## AWS AppSync and Gatsby

This sample demonstrates how Gatsby can query an AWS AppSync GraphQL API to display a list of events. It leverages Gatsby's ability to [natively query third-party GraphQL APIs](https://www.gatsbyjs.org/blog/2018-09-25-announcing-graphql-stitching-support/). 

[AWS AppSync](https://aws.amazon.com/appsync/) is a [serverless backend for web and mobile apps](https://www.youtube.com/watch?v=x6s34ecJvik) powered by GraphQL that also provides real-time and offline capabilities to apps. 

## Get started

### Set up the AWS AppSync Events backend

1. Login to the [AWS AppSync console](https://us-west-2.console.aws.amazon.com/appsync/home?region=us-west-2#/).
1. Click `Create API`.
1. Select the `Event App` sample project. Click `Start`.
1. Enter a friendly name or keep the default (`"My AppSync API"`). Click `Create`.
1. The API and resources will be created in a few seconds and the console will take you to the `Queries` pane with a pre-filled query and mutation.
1. Run the `CreateEvent` mutation a few times with different names and details for events.
1. Run the `ListEvents` query to view the events that were created.
1. Go to the `Settings` pane and copy the `API URL` and the `API Key`.

### Run Gatsby

1. `npm i -g gatsby-cli # install the Gatsby CLI`
1. Clone this repository and navigate into the directory.
1. `npm install # install node dependencies`
1. `AWS_APPSYNC_API_URL="<API url from Settings>" AWS_APPSYNC_API_KEY="<API key from settings>" gatsby develop`

## Credits

This sample is based on [gatsby-starter-hello-world](https://github.com/gatsbyjs/gatsby-starter-hello-world) and [gatsby-github-displayer](https://github.com/freiksenet/gatsby-github-displayer).

## License Summary

This sample code is made available under a modified MIT license. See the LICENSE file.
