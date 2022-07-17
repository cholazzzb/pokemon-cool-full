import * as t from 'runtypes';
import { BaseNameSchema } from '../entity';

export const GameIndexSchema = t.Record({
  game_index: t.Number,
  version: BaseNameSchema,
});

export type GameIndex = t.Static<typeof GameIndexSchema>;
