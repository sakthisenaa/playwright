import {test,expect} from '@playwright/test'

 test("built in assertiion",async({page})=>{
    await page .goto ("https://testautomationpractice.blogspot.com/")
    await expect (page).toHaveURL("https://testautomationpractice.blogspot.com/")
    await expect(page.locator('//h1[@class="title"]')).toBeVisible()
   await expect(page.locator('//p[@class="description"]')).toHaveText("For Selenium, Cypress & Playwright") 
   await expect(page.locator('//p[@class="description"]')).toContainText("Playwright")
   await expect(page.locator('//input[@id="name"]')).toBeEnabled()
   await expect(page.locator('//input[@id="name"]')).toBeEmpty()
   await expect(page.locator('//input[@id="name"]')).toBeEditable()
   await page.locator('//input[@id="name"]').fill("playwright")
   await expect(page.locator('//input[@id="name"]')).toHaveValue("playwright")


  })
