import {test,expect} from '@playwright/test'

// test("single select dropdown",async({page})=>{
  //  await page .goto ("https://testautomationpractice.blogspot.com/")
    //await expect (page).toHaveURL("https://testautomationpractice.blogspot.com/")
    //const cnt=await page.locator('//select[@id="country"]/option').count()
    //console.log ("count of dropdown :",cnt)

    //const text=await page.locator('//select[@id="country"]').textContent()
    //console.log(text)

    //await page.locator('//select[@id="country"]').selectOption("India")
    //await page.locator('//select[@id="country"]').selectoption({value:"uk"})
    //await page.locator('//select[@id="country"]').selectoption({index:4})
    ////select[@id="country"]
    //await page.pause()
 //})
 test("multi select dropdown",async({page})=>{
    await page .goto ("https://testautomationpractice.blogspot.com/")

    await page.locator('//select[@id="colors"]').selectOption(["Red","Green","Yellow"])

    await page.pause()
 })