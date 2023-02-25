import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './style.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const defaultOptions = {
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
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});

const withProvider = (StoryFn) => (
  <ApolloProvider client={client}>
    <StoryFn />
  </ApolloProvider>
);

export const decorators = [withProvider];
