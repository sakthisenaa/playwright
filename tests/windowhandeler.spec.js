
import {test,expect,chromium} from '@playwright/test'

test.skip("multiple tabs",async()=>{
    const browser=await chromium.launch()
    const context=await browser.newContext()
    const page1=await context.newPage()
    const page2=await context.newPage()
    
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page1.waitForTimeout(3000)
    console.log(await page1.title())

    await page2.goto("https://testautomationpractice.blogspot.com/")
    await page2.waitForTimeout(3000)
    console.log(await page2.title())
})
test.only("multiple tabs handle",async()=>{
    const browser=await chromium.launch()
    const context=await browser.newContext()
    const page=await context.newPage()

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.waitForTimeout(3000)

    console.log(await page.title())

    const [newPage]=await Promise.all([
        context.waitForEvent('page'),
        page.locator("//a[text()='OrangeHRM, Inc']").click()
    ])
    await newPage.waitForLoadState()
    console.log(await newPage.title());
        
})
