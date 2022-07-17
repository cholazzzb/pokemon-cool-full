import * as t from 'runtypes';
import { BaseNameSchema } from '../entity';

export const StatSchema = t.Record({
  base_stat: t.Number,
  effort: t.Number,
  stat: BaseNameSchema,
});

export type Stat = t.Static<typeof StatSchema>;
