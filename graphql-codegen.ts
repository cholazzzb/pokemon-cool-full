import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://beta.pokeapi.co/graphql/v1beta',
  documents: ['src/logic/**/*.gql.ts'],
  ignoreNoDocuments: true,
  generates: {
    './src/__generated__/pokeapi/gql/': {
      preset: 'client',
      config: {
        documentMode: 'string',
      },
    },
    './src/__generated__/pokeapi/gql/schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true,
      },
    },
    './src/__generated__/pokeapi/graphql.schema.json': {
      plugins: ['introspection'],
      config: {},
    },
  },
};

export default config;
