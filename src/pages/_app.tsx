import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  DefaultOptions,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
config.autoAddCss = false;

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

const pokeapiMazipanLink = new HttpLink({
  uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
});

const pokeapiLink = new HttpLink({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
});

const client = new ApolloClient({
  link: ApolloLink.split(
    (operation) => operation.getContext().clientName === 'mazipan',
    pokeapiMazipanLink,
    pokeapiLink,
  ),
  cache,
  defaultOptions,
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Pokemon Cool</title>
        <meta name="description" content="Unofficial Pokedex" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1, initial-scale=1"
        />
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
export default MyApp;
