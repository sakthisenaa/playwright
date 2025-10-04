import {test,expect} from  '@playwright/test'

test.beforeAll("try to login all the user",async()=>{
    console.log("test has been started sucessfully");
    
})
test.beforeEach("navigate to the page",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
})
test("login 1",async({page})=>{

    await page.locator('//input[@placeholder="Username"]').fill('standard_user')

})
test("login 2",async({page})=>{
   await page.locator('//input[@placeholder="Username"]').fill('problem_user') 
})
test("login 3",async({page})=>{
   await page.locator('//input[@placeholder="Username"]').fill("performance_glitch_user")
})
test.afterEach("logout",async({page})=>{
    await page.locator('//input[@placeholder="Password"]').fill('secret_sauce')
    await page.click('//input[@id="login-button"]')
    await page.click('//button[@id="react-burger-menu-btn"]')
    await page.click('//a[@id="logout_sidebar_link"]')
})
test.afterAll("test ending",async()=>{
    console.log("test has been sucessfully excecuted");
    
})