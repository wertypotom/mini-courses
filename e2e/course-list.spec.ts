import { test, expect } from '@playwright/test'

test('create delete course list', async ({ page }) => {
  await page.locator('body').click()
  await page.goto('/')
  await page.getByPlaceholder('Course name').click()
  await page.getByPlaceholder('Course name').fill('Test course')
  await page.getByPlaceholder('Course description').click()
  await page
    .getByPlaceholder('Course description')
    .fill('Random test description')
  await page.getByRole('button', { name: 'Add' }).click()
  await expect(page.getByText('Test course')).toBeVisible()
  await expect(page.getByText('Random test description')).toBeVisible()

  await page.getByRole('button', { name: 'Delete' }).click()

  await expect(page.getByText('Random test description')).not.toBeVisible()
})
