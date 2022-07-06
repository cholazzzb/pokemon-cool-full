import test from '@playwright/test';

test('should show pokemon list', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  page.locator('text=Bulbasaur');
  page.locator('text=Poison');
  page.locator('Grass');
});
