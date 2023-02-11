import {
  ApolloClient,
  ApolloProvider,
  DefaultOptions,
  InMemoryCache,
} from '@apollo/client';
import type { AppProps } from 'next/app';

import { globalStyles } from '@/presentational/theme';

const cache = new InMemoryCache({
  typePolicies: {
    BaseName: {
      keyFields: ['name'],
    },
  },
});

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  cache,
  defaultOptions,
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
export default MyApp;
