import { expect, test } from '@playwright/test';

test('should show pokemon list', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Mobile Screen
  await page.setViewportSize({ width: 640, height: 800 });
  await expect(page.locator('text=Bulbasaur')).toBeVisible();
  page.mouse.move(50, 200);
  page.mouse.wheel(0, 300);
  await expect(page.locator('text=Charmander')).toBeVisible();
  page.mouse.wheel(0, 300);
  await expect(page.locator('text=Squirtle')).toBeVisible();
  page.mouse.wheel(0, 300);
  await expect(page.locator('text=Blastoise')).toBeVisible();
  await expect(page.locator('text=Bulbasaur')).toBeHidden();
  page.mouse.wheel(0, -300);
  await expect(page.locator('text=Charmander')).toBeVisible();
  page.mouse.wheel(0, -300);
  await expect(page.locator('text=Bulbasaur')).toBeVisible();
});
