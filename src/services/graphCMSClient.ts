import { GraphQLClient } from "graphql-request"

const graphCMSClient = new GraphQLClient(
  `${process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT}`,
  {
    headers: {
      Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  },
)

export default graphCMSClient
