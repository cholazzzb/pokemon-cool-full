export const NAV = {
  HOME: '/',
  POKE_DETAIL: (id: string) => `/poke/detail/${id}` as const,

  TEAM_BUILDING: '/team-builder',
} as const;

type ExtractNavigationValue<T> = T extends (...args: unknown[]) => infer R
  ? R
  : T;
type ExtractPaths<T> = {
  [K in keyof T]: ExtractNavigationValue<T[K]>;
}[keyof T];

export type Navigation = ExtractPaths<typeof NAV>;
