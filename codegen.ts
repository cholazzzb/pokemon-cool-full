import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  generates: {
    './src/__generated__/pokeapi/gql/': {
      schema: 'https://beta.pokeapi.co/graphql/v1beta',
      documents: ['src/domains/**/*.gql.ts'],
      preset: 'client',
      plugins: [],
    },
  },
};
export default config;
