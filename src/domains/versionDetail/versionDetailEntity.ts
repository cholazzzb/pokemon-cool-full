import * as t from 'runtypes';
import { BaseNameSchema } from '../entity';

export const VersionDetailSchema = t.Record({
  rarity: t.Number,
  version: BaseNameSchema,
});

export type VersionDetail = t.Static<typeof VersionDetailSchema>;
