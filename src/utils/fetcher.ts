import getConfig from 'next/config';
import { Runtype } from 'runtypes';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
export const apiEndpoint = serverRuntimeConfig?.apiEndpoint;
export const pokeApiEndpoint = publicRuntimeConfig?.pokeApiEndpoint;

export const fetcher = async <VariablesData, VariablesType extends object>(
  query: string,
  variables: VariablesType,
  runtypesSchema: Runtype<VariablesData>,
): Promise<VariablesData | null> => {
  const res = await fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error(`fetcher error: ${json.errors}`);
  }

  try {
    return runtypesSchema.check(json.data);
  } catch (error) {
    return null;
  }
};
