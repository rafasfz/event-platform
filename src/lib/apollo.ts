import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oyjmfy1g9k01xk9byjhb2h/master',
  cache: new InMemoryCache()
})