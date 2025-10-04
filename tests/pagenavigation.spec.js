//page navigation
import {test,expect} from  '@playwright/test'

test.only ("page navigation",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.waitForTimeout(1000)

    await page.goto("https://ui.vision/demo/webtest/frames/")

    await page.waitForTimeout(1000)

    await page.goBack()

    await page.waitForTimeout(2000)

    await page.goForward()

    await page.waitForTimeout(3000)
})

//hooks method




