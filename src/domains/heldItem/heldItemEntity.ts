import * as t from 'runtypes';

import { BaseNameSchema } from '../entity';
import { VersionDetailSchema } from '@/domains/versionDetail/versionDetailEntity';

export const HeldItemSchema = t.Record({
  item: BaseNameSchema,
  version_details: t.Array(VersionDetailSchema),
});
export type HeldItem = t.Static<typeof HeldItemSchema>;
