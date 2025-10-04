import {test,expect} from '@playwright/test'

 test("built in assertiiontask",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator('//input[@name="username"]').fill('student')
    await page.locator('//input[@name="password"]').fill('Password123')
    await page.locator('//button[@id="submit"]').click()
    await expect (page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/")
    await expect(page.locator('//p[@class="has-text-align-center"]')).toHaveText("Congratulations student. You successfully logged in!") 
    await expect(page.locator('//a[@style="color:#ffffff"]')).toBeVisible("Log out")
    //Log out
    ////a[@style="color:#ffffff"]
    //https://practicetestautomation.com/logged-in-successfully/
    ////p[@class="has-text-align-center"]

 })
  test("built in assertiiontask2",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator('//input[@name="username"]').fill('incorrectUser')
    await page.locator('//input[@name="password"]').fill('Password123')
    await page.locator('//button[@id="submit"]').click()
    //await expect (page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/")
    await expect(page.locator('//div[@id="error"]')).toHaveText("Your username is invalid!") 
   // await expect(page.locator('//a[@style="color:#ffffff"]')).toBeVisible("Log out")
  })
  test("built in assertiiontask3",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator('//input[@name="username"]').fill('student')
    await page.locator('//input[@name="password"]').fill('incorrectpassword')
    await page.locator('//button[@id="submit"]').click()
    //await expect (page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/")
    await expect(page.locator('//div[@id="error"]')).toHaveText("Your password is invalid!") 
  })