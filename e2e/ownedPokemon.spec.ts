// https://github.com/uchagani/new-project/blob/main/tests/example.spec.ts

import OwnedPokemon from '@/utils/OwnedPokemon';
import { test } from '@playwright/test';

test('should show pokemon list', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  let ownedPokemonMem = new OwnedPokemon([]);
  ownedPokemonMem.addPokemon(1, 'Bulbasaur', 'dino');
  await page.evaluate((ownedPokemon) => {
    window.sessionStorage.setItem('ownedPokemon', JSON.stringify(ownedPokemon));
  }, ownedPokemonMem.data);

  await page.reload();
  await page.locator('text=Owned').click();
  page.locator('text=Your owned pokemon');
  page.locator('text=Bulbasaur');
});

test('should show no pokemon', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('text=Owned').click();
  page.locator("text=You don't have any pokemon yet");
});
