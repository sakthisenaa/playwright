import {test,expect} from '@playwright/test'

 test("login facebook using buildin method",async({page})=>{
    await page.goto("https://www.facebook.com/")
    await expect(page.getByAltText("Facebook")).toBeVisible()
    await page.getByPlaceholder("Email address or phone number").fill("sakthisenaamech@gmail.com")
    await page.getByPlaceholder("Password").fill('Sakthisenaa@1996')
    await page.getByRole('button',{name:' Log in '}).click()
   
 })