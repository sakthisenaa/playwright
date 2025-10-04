import {test,expect} from '@playwright/test'

 test("try to visit facebook",async({page})=>{
    await page.setViewportSize({width: 350,height:660})
    await page.goto("https://www.facebook.com/")
    await page.locator('//input[@name="email"]').fill("sakthisenaamech@gmail.com")
    await page.locator('//input[@type="password"]').fill("Sakthisenaa@1996")
    await page.locator('//button[text()="Log in"]').click()
    await page.waitForTimeout(3000)
 })
