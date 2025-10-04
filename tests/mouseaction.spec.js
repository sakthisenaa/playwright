import {test,expect} from '@playwright/test'

 test.only("drag and drop",async({page})=>{
    await page .goto ("https://testautomationpractice.blogspot.com/")
    const drag=await page.locator('//div[@id="draggable"]')
    const drop=await page.locator('//div[@id="droppable"]')

    await drag.dragTo(drop)
    await page.waitForTimeout(3000)


 })

 test("right and left click",async({page})=>{
    await page .goto ("https://testautomationpractice.blogspot.com/")
    await page.locator('//button[@name="start"]',{button:'right'})
     await page.locator('//button[@name="start"]',{button:'left'})
    await page.waitForTimeout(3000)


 })
 test("hover ",async({page})=>{
    await page .goto ("https://testautomationpractice.blogspot.com/")
    await page.hover('//button[@class="dropbtn"]')
     
    await page.waitForTimeout(3000)


 })
  test("double click ",async({page})=>{
    await page .goto ("https://testautomationpractice.blogspot.com/")
    await page.dblclick('//button[@ondblclick="myFunction1()"]')
     
    await page.waitForTimeout(3000)


 })
 test("wheel ",async({page})=>{
    await page .goto ("https://testautomationpractice.blogspot.com/")
    await page.mouse.wheel(1000,2000)
    await page.mouse.wheel(0,-100)
     
    await page.waitForTimeout(3000)


 })