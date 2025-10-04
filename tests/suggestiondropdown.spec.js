import {test,expect} from '@playwright/test'

test("suggestion dropdown",async({page})=>{
    await page.goto ("https://www.google.com/")

    await page.locator('//textarea[@title="Search"]').fill("india")
    const locat=await page.locator('//div[@class="eIPGRd"]')
    await locat.first().waitFor()
    const text=await locat.allTextContents()
    for(let i=0;i<text.length;i++){
        let etext=await text[i]
        if(etext.includes("imdia") && etext.includes("Country in South Asia")){
            await locat.nth(i).click()
        }
    }
    await page.pause()
 })