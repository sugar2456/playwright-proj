import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.yahoo.co.jp/');
  await page.getByRole('searchbox', { name: '検索したいキーワードを入力してください' }).click();
  await page.getByRole('searchbox', { name: '検索したいキーワードを入力してください' }).fill('test');
  await page.getByRole('button', { name: '検索' }).click();
  const homeLink = page.getByRole('link', {
    name: 'Yahoo! JAPAN',
    exact: true,
  });
  await expect(homeLink).toBeVisible();
  await homeLink.click();
});
