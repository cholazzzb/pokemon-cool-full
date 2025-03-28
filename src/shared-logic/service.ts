import { TypedDocumentString } from '@/__generated__/pokeapi/gql/graphql';

export function createExecutor({ url }: { url: string }) {
  return async function execute<TResult, TVariables>(
    query: TypedDocumentString<TResult, TVariables>,
    ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
  ) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/graphql-response+json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    if (!response.ok) {
      console.warn(JSON.stringify({ response }, null, 2));
      throw new Error('Network response was not ok');
    }

    interface GraphQLResponse<T> {
      data: T;
    }

    const json = (await response.json()) as GraphQLResponse<TResult>;
    return json.data;
  };
}

export const mazipanSvc = createExecutor({
  url: 'https://graphql-pokeapi.vercel.app/api/graphql',
});

export const pokeApiSvc = createExecutor({
  url: 'https://beta.pokeapi.co/graphql/v1beta',
});
