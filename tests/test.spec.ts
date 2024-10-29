import { test, expect } from "@playwright/test";

test("sandboxed iframe", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("http://localhost:3000");

  await page.locator("button").click();
  await page.pause();
});
