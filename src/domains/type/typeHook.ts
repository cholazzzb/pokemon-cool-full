import { useQuery } from '@apollo/client';

import { getListTypesQuery } from './typeService.gql';

export const useListTypes = () =>
  useQuery(getListTypesQuery, { fetchPolicy: 'cache-first' });
