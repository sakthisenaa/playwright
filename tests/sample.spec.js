import {test,expect} from '@playwright/test'
 test("try to visit facebook",async({page})=>{
    await page.goto("https://www.facebook.com/")
    await page.locator('#email').fill("sakthisenaamech@gmail.com")
    await page.locator("[placeholder='Password']").fill("Sakthisenaa@1996")
    await page.locator('[type="submit"]').click()
   
 })

 