import * as t from 'runtypes';
import { BaseNameSchema } from '../entity';

export const AbilitySchema = t.Record({
  ability: BaseNameSchema,
  is_hidden: t.Boolean,
  slot: t.Number,
});

export type Ability = t.Static<typeof AbilitySchema>;
