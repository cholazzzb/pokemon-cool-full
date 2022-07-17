import * as t from 'runtypes';

import { BaseNameSchema } from '../entity';
import { VersionGroupDetailSchema } from '@/domains/versionGroupDetail/versionGroupDetailEntity';

export const MoveSchema = t.Record({
  move: BaseNameSchema,
  version_group_details: t.Array(VersionGroupDetailSchema),
});

export type Move = t.Static<typeof MoveSchema>;
