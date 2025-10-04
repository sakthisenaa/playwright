import {test,expect} from '@playwright/test'
 test("try to visit whatsapp",async({page})=>{
    await page.goto("https://web.whatsapp.com/")
    await page.waitForTimeout(3000)
    await page.getByRole('button',{name:' Log in with phone number '}).click()
    await page.waitForTimeout(30000)
    await page.getByPlaceholder("Log in with phone number").fill("6380743787")
    
    
   
 })