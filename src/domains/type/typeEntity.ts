import * as t from 'runtypes';
import { BaseNameSchema } from '../entity';

export const typeSchema = t.Record({
  slot: t.Number,
  type: BaseNameSchema,
});

export type type = t.Static<typeof typeSchema>;
