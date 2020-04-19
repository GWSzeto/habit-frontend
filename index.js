import React from 'react'
import ReactDOM from 'react-dom'
import { 
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client'
import { Reset } from 'styled-reset'

import App from './src/app'

console.log("graphql endpoint: ", process.env.GRAPHQL_ENDPOINT)

// graphql
const cache = new InMemoryCache()
const httpLink = createHttpLink({
  uri: process.env.GRAPHQL_ENDPOINT,
})

const client = new ApolloClient({
  link: httpLink,
  cache,
})

ReactDOM.render((
  <ApolloProvider client={client}>
    <Reset/>
    <App/>
  </ApolloProvider>
), document.getElementById("root"))
