import {test,expect} from '@playwright/test'
//test("simple ok alert",async({page})=>{
    //await page.goto("https://demo.automationtesting.in/Alerts.html")

 //page.on('dialog',async dialog=>{
   // console.log(dialog.type())
    //console.log(dialog.message())
    //expect (dialog.message("I am an alert box!"))
    //await dialog.accept()
 //})
 //await page.click('//a[@href="#OKTab"]')

// })
 //test("confirmation alert",async({page})=>{
    //await page.goto("https://demo.automationtesting.in/Alerts.html")
   //page.on('dialog',async dialog=>{
    //console.log(dialog.type())
    //await dialog.dismiss()
  //})
    //await page.click('//a[@href="#CancelTab"]')
    //await page.click('//button[@class="btn btn-primary"]')
    //await expect(page.locator('//p[@id="demo"]')).toHaveText("You Pressed Cancel")

    //await page.pause()
//})
test("promt alert",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html")

    page.on('dialog',async dialog=>{
        console.log(dialog.type())
        await dialog.accept("sakthi")
    })
    await page.click('//a[@href="#Textbox"]')
    await page.click('//button[@class="btn btn-info"]')
    await expect(page.locator('//p[@id="demo1"]')).toHaveText("Hello sakthi How are you today")


 })

