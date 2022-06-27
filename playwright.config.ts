import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: 'e2e',
  timeout: 30000,
  retries: 2,
};
export default config;
