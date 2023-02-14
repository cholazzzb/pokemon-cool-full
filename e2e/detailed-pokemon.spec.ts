import { expect, test } from '@playwright/test';

test('should open detailed-pokemon', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('text=Bulbasaur').click();

  // Render Correctly
  await expect(page).toHaveURL('http://localhost:3000/detailed/1');
  await expect(page.locator('text=Bulbasaur')).toBeVisible();

  // Tab About
  await expect(page.locator('text=Height')).toBeVisible();
  await expect(page.locator('text=7')).toBeVisible();
  await expect(page.locator('text=Overgrow, Chlorophyl')).toBeVisible();

  // Tab Stats
  await page.locator('text=Base Stats').click();
  await expect(page.locator('text=HP')).toBeVisible();

  // Tab Moves
  await page.locator('text=Moves').click();
  await expect(page.locator('text=razor-wind')).toBeVisible();
  await expect(page.locator('text=swords-dance')).toBeVisible();
  await expect(page.locator('text=bind')).toBeVisible();
  await expect(page.locator('text=vine-whip')).toBeVisible();

  // Next pokemon
  await page.getByTestId('icon-next-pokemon').click();
  await expect(page).toHaveURL('http://localhost:3000/detailed/2');
  await expect(page.locator('text=Ivysaur')).toBeVisible();
  await expect(page.locator('text=#2')).toBeVisible();
  await expect(page.locator('text=Catch')).toBeVisible();

  // Tab Moves
  await expect(page.locator('text=headbutt')).toBeVisible();
  await expect(page.locator('text=swords-dance')).toBeVisible();
  await expect(page.locator('text=bind')).toBeVisible();
  await expect(page.locator('text=vine-whip')).toBeVisible();

  // Tab Stats
  await page.locator('text=Base Stats').click();

  // Tab About
  await page.locator('text=About').click();
  await expect(page.locator('text=Height')).toBeVisible();
  await expect(page.locator('text=10')).toBeVisible();
  await expect(page.locator('text=Overgrow, Chlorophyll.')).toBeVisible();

  // Prev pokemon (initial)
  await page.getByTestId('icon-prev-pokemon').click();

  await expect(page).toHaveURL('http://localhost:3000/detailed/1');
  await expect(page.locator('text=Bulbasaur')).toBeVisible();
  await expect(page.locator('text=Poison')).toBeVisible();
  await expect(page.locator('text=Catch')).toBeVisible();

  // Tab About
  await expect(page.locator('text=Height')).toBeVisible();
  await expect(page.locator('text=7')).toBeVisible();
  await expect(page.locator('text=Overgrow, Chlorophyl')).toBeVisible();

  // Tab Stats
  await page.locator('text=Base Stats').click();
  await expect(page.locator('text=HP')).toBeVisible();

  // Tab Moves
  await page.locator('text=Moves').click();
  await expect(page.locator('text=razor-wind')).toBeVisible();
  await expect(page.locator('text=swords-dance')).toBeVisible();
  await expect(page.locator('text=bind')).toBeVisible();
  await expect(page.locator('text=vine-whip')).toBeVisible();
});
