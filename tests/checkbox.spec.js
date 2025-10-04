import {test,expect} from '@playwright/test'

 test("try to check",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//input[@id="monday"]').check()

    await expect(page.locator('//input[@id="monday"]')).toBeChecked()
   // await expect(page.locator('//input[@id="male"]')).not.toBeChecked()
    await page.locator('//input[@id="monday"]').uncheck()

   //test("multiple  checkbox")
 })
 