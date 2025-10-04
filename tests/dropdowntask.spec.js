import {test,expect} from '@playwright/test'

//test("dropdown task",async({page})=>{
    //await page.goto ("https://letcode.in/dropdowns")
    //await page.locator('//select[@id="fruits"]').selectOption({value:"Apple"})
  //   await page.pause()
//})
//test("dropdown multiple selection task",async({page})=>{
  //  await page.goto ("https://letcode.in/dropdowns")
    //await page.locator('//select[@id="superheros"]').selectOption(["Ant-Man","Captain America","Doctor Strange","Black Panther"])
     //await page.pause()
//})
//test("dropdown using index task",async({page})=>{
  //  await page.goto ("https://letcode.in/dropdowns")

    //const text=await page.locator('//select[@id="lang"]').textContent()
    //console.log(text)
    //await page.locator('//select[@id="lang"]').selectOption({index:4})
    //await page.pause()
//})
////select[@id="country"]
//await page.locator('//select[@id="country"]').sele({index:4})

test("dropdown using valueand print task",async({page})=>{
    await page.goto ("https://letcode.in/dropdowns")

    //const text=await page.locator('//select[@id="lang"]').textContent()
    //console.log(text)
    await page.locator('//select[@id="country"]').selectOption({value:"India"})
    const text=await page.locator('//option[@value="India"]').textContent()
    console.log(text)
    
    //await page.pause()
})