import {test,expect} from '@playwright/test'

 test("keyboard handeling",async({page})=>{
    await page .goto ("https://testautomationpractice.blogspot.com/")
    await page.fill('#name','trend@gmail.com')
    await page.keyboard.press('Control+a')
    await page.keyboard.press('Control+x')
    await page.keyboard.down('Tab')
    await page.keyboard.press('Control+v')
    await page.keyboard.press('Shift+Tab')
    await page.keyboard.insertText("trendnologies")
    await page.keyboard.down('Tab')
    await page.keyboard.down('Tab')
    await page.keyboard.insertText("9486086975")
    await page.waitForTimeout(3000)

 })