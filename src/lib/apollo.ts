import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl5ny3mvg191b01t8g9e38618/master',
  cache: new InMemoryCache()
})