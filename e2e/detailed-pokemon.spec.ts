import { expect, test } from '@playwright/test';

test('should open detailed-pokemon', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('text=Bulbasaur').click();

  // Render Correctly
  await expect(page).toHaveURL('http://localhost:3000/detailed/1');
  await expect(page.locator('text=Bulbasaur')).toBeVisible();
  await expect(page.locator('text=Poison')).toBeVisible();
  await expect(page.locator('text=Catch')).toBeVisible();
  await expect(page.locator('text=Information')).toBeVisible();
  await expect(page.locator('text=About')).toBeVisible();
  await expect(page.locator('text=Base Stats')).toBeVisible();
  await expect(page.locator('text=Moves')).toBeVisible();
  await expect(page.locator('text=Locations')).toBeVisible();
  await expect(page.locator('text=Wait for it soon!')).toBeVisible();

  // Item About
  await page.locator('text=about').click();
  await expect(page.locator('text=Height')).toBeVisible();
  await expect(page.locator('text=7')).toBeVisible();
  await expect(page.locator('text=Overgrow, Chlorophyl')).toBeVisible();
  await page.locator('text=Close').click();

  // Item Stats
  await page.locator('text=Base Stats').click();
  await expect(page.locator('text=HP')).toBeVisible();
  await expect(page.locator('text=SPD')).toBeVisible();
  await page.locator('text=Close').click();

  // Item Moves
  await page.locator('text=Moves').click();
  await expect(page.locator('text=Razor Wind')).toBeVisible();
  await expect(page.locator('text=Swords Dance')).toBeVisible();
  await expect(page.locator('text=Bind')).toBeVisible();
  await expect(page.locator('text=Vine Whip')).toBeVisible();
  await page.locator('text=Close').click();

  // Next pokemon
  await page.getByTestId('icon-next-pokemon').click();
  await expect(page).toHaveURL('http://localhost:3000/detailed/2');
  await expect(page.locator('text=Ivysaur')).toBeVisible();
  await expect(page.locator('text=#2')).toBeVisible();
  await expect(page.locator('text=Catch')).toBeVisible();
  await expect(page.locator('text=Information')).toBeVisible();
  await expect(page.locator('text=About')).toBeVisible();
  await expect(page.locator('text=Base Stats')).toBeVisible();
  await expect(page.locator('text=Moves')).toBeVisible();
  await expect(page.locator('text=Locations')).toBeVisible();
  await expect(page.locator('text=Wait for it soon!')).toBeVisible();

  // Item About
  await page.locator('text=About').click();
  await expect(page.locator('text=Height')).toBeVisible();
  await expect(page.locator('text=10')).toBeVisible();
  await expect(page.locator('text=Overgrow, Chlorophyll.')).toBeVisible();
  await page.locator('text=Close').click();

  // Item Stats
  await page.locator('text=Base Stats').click();
  await expect(page.locator('text=HP')).toBeVisible();
  await expect(page.locator('text=SPD')).toBeVisible();
  await page.locator('text=Close').click();

  // Item Moves
  await page.locator('text=Moves').click();
  await expect(page.locator('text=Swords Dance')).toBeVisible();
  await expect(page.locator('text=Cut')).toBeVisible();
  await expect(page.locator('text=Bind')).toBeVisible();
  await expect(page.locator('text=Vine Whip')).toBeVisible();
  await page.locator('text=Close').click();

  // Prev pokemon (initial)
  await page.getByTestId('icon-prev-pokemon').click();

  await expect(page).toHaveURL('http://localhost:3000/detailed/1');
  await expect(page.locator('text=Bulbasaur')).toBeVisible();
  await expect(page.locator('text=Poison')).toBeVisible();
  await expect(page.locator('text=Catch')).toBeVisible();
  await expect(page.locator('text=Information')).toBeVisible();
  await expect(page.locator('text=About')).toBeVisible();
  await expect(page.locator('text=Base Stats')).toBeVisible();
  await expect(page.locator('text=Moves')).toBeVisible();
  await expect(page.locator('text=Locations')).toBeVisible();
  await expect(page.locator('text=Wait for it soon!')).toBeVisible();

  // Item About
  await page.locator('text=about').click();
  await expect(page.locator('text=Height')).toBeVisible();
  await expect(page.locator('text=7')).toBeVisible();
  await expect(page.locator('text=Overgrow, Chlorophyl')).toBeVisible();
  await page.locator('text=Close').click();

  // Item Stats
  await page.locator('text=Base Stats').click();
  await expect(page.locator('text=HP')).toBeVisible();
  await expect(page.locator('text=SPD')).toBeVisible();
  await page.locator('text=Close').click();

  // Item Moves
  await page.locator('text=Moves').click();
  await expect(page.locator('text=Razor Wind')).toBeVisible();
  await expect(page.locator('text=Swords Dance')).toBeVisible();
  await expect(page.locator('text=Bind')).toBeVisible();
  await expect(page.locator('text=Vine Whip')).toBeVisible();
  await page.locator('text=Close').click();
});
