// https://github.com/uchagani/new-project/blob/main/tests/example.spec.ts

import { test } from '@playwright/test';
import { addPokemon } from '@/domains/ownedPokemon/ownedPokemonUtil';

test('should show pokemon list', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const ownedPokemons = {};
  const { result } = addPokemon(ownedPokemons, 1, 'Bulbasaur', 'dino');
  await page.evaluate((ownedPokemon) => {
    window.sessionStorage.setItem('ownedPokemon', JSON.stringify(ownedPokemon));
  }, result);

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
