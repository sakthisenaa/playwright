import {test,expect} from '@playwright/test'

 test("login using buildin method",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page.getByAltText("company-branding")).toBeVisible()
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill('admin123')
    await page.getByRole('button',{name:' Login '}).click()
   
 })