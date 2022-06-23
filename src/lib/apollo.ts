import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri:'https://api-sa-east-1.graphcms.com/v2/cl4oyodfj1eyb01z48p2l769d/master',
  cache: new InMemoryCache()
})
