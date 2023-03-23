// https://github.com/uchagani/new-project/blob/main/tests/example.spec.ts

import { expect, test } from '@playwright/test';

import { addPokemon } from '@/domains/ownedPokemon/ownedPokemonUtil';

test('should show owned pokemon', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Set session storage in a new context
  const ownedPokemons = {};
  const { result } = addPokemon(ownedPokemons, 1, 'bulbasaur', 'dino');

  await page
    .evaluate(async (newPokemon) => {
      // Template from Zustand to sessionStorage
      const zustandPersist = {
        state: {
          ownedPokemons: newPokemon,
        },
        version: 0,
      };
      localStorage.ownedPokemons = JSON.stringify(zustandPersist);
      await new Promise((f) => setTimeout(f, 0));
    }, result)
    .catch((err) => {
      throw `failed to evaluate sessionStorage: ${err}`;
    });

  await page.reload();
  await page.locator('text=Owned').click();
  await expect(page.locator('text=Your owned pokemon')).toBeVisible();
  await expect(page.locator('text=Bulbasaur')).toBeVisible();
});

test('should show no pokemon', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('text=Owned').click();
  await expect(
    page.locator("text=You don't have any pokemon yet"),
  ).toBeVisible();
});
