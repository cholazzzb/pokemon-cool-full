import * as t from 'runtypes';
import { BaseNameSchema } from '../entity';

export const VersionGroupDetailSchema = t.Record({
  level_learned_at: t.Number,
  move_learn_method: BaseNameSchema,
  version_group: BaseNameSchema,
});

export type VersionGroupDetail = t.Static<typeof VersionGroupDetailSchema>;
