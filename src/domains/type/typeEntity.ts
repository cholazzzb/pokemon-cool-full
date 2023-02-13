import * as t from 'runtypes';
import { BaseNameSchema } from '../entity';

export const typeSchema = t.Record({
  slot: t.Number,
  type: BaseNameSchema,
});

export type type = t.Static<typeof typeSchema>;

export const EffectivityMap = {
  200: 'Super Effective',
  100: 'Normal',
  50: 'Not Very Effective',
  0: 'No Effect',
} as const;

export type EffectivityMapKey = keyof typeof EffectivityMap;
export type EffectivityMapVal = (typeof EffectivityMap)[EffectivityMapKey];
