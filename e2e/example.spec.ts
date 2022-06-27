import { test, expect } from "@playwright/test";

test("should show pokemon list", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.locator("button", { hasText: "Owned" }).click();
  await expect(page.locator("div")).toContainText(
    "You don't have any pokemon yet"
  );
});
