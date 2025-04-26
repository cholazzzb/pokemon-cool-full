import { Params } from 'next/dist/server/request/params';
import { useSearchParams } from 'next/navigation';
import qs from 'query-string';

import { queryStringFallback } from '../fallback';

export function useSafeParams<T extends Params>(fallback: T) {
  const searchParams = useSearchParams();
  const params = qs.parse(searchParams.toString());

  return queryStringFallback(params, fallback);
}
