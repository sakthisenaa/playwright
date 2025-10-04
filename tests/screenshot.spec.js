import {test,expect} from '@playwright/test'

test(" home page screenshot",async ({page}) => {
    await page.goto("https://www.amazon.in/")
    await page.screenshot({path :'E:/playwright/screenshot.js'+'home page.png'})
})
test(" full page screenshot",async ({page}) => {
    await page.goto("https://www.amazon.in/")
    await page.screenshot({path :'E:/playwright/screenshot.js'+'full page.png',fullPage:true})

    
})
test.skip(" element screenshot",async ({page}) => {
    await page.goto("https://www.amazon.in/")
    await page.locator('//img[@alt="Pack of 50 - Mixed Vintage Stickers - Retro Stickers for Scrapbooks, Laptops, Guitars, Phones, Pads, Skateboards,..."').screenshot({path :'E:/playwright/screenshot.js'+'element .png'})

    
})