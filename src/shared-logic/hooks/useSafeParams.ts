import { Params } from 'next/dist/server/request/params';
import { useParams } from 'next/navigation';

import { objFallback } from '../fallback';

export function useSafeParams<T extends Params>(fallback: T) {
  const params = useParams<T>();

  return objFallback(params, fallback);
}
