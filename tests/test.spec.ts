import { test, expect } from "@playwright/test";

test("sandboxed iframe", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  page.on("console", (msg) => console.log("CONSOLE:", msg.text()));

  await page.goto("http://localhost:3000");
  await page.waitForTimeout(1000);

  await page.locator("#playButton").click();
  await page.waitForTimeout(1000);

  const video = page.locator("video").nth(1);
  await expect(video).toHaveJSProperty("paused", false);

  await context.close();
  await browser.close();
});
