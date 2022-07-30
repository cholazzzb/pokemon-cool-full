import getConfig from 'next/config';
import { Runtype } from 'runtypes';

const { serverRuntimeConfig } = getConfig();

export const fetcher = async <VariablesData, VariablesType extends {}>(
  query: string,
  variables: VariablesType,
  runtypesSchema: Runtype<VariablesData>,
): Promise<VariablesData | null> => {
  const res = await fetch(serverRuntimeConfig?.apiEndpoint, {
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
    console.error(json.errors);
    throw new Error(`fetcher error: ${json.errors}`);
  }

  try {
    return runtypesSchema.check(json.data);
  } catch (error) {
    console.error({ error });
    return null;
  }
};
