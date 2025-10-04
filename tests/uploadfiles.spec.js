import {test,expect} from '@playwright/test'

test ("single file upload",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//input[@id="singleFileInput"]').setInputFiles("C:/Users/hp/Desktop/AmazonPrimeTV_Dataset.xlsx")

    await page.locator("//button[text()='Upload Single File']").click()

    await expect(page.locator('//p[@id="singleFileStatus"]')).toContainText("Single file selected: AmazonPrimeTV_Dataset.xlsx")
    await page.pause()
})

test.only ("multiple file upload",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//input[@id="multipleFilesInput"]').setInputFiles("C:/Users/hp/Desktop/AmazonPrimeTV_Dataset.xlsx","C:/Users/hp/Desktop/Sample - Superstore - 2025-1.xls")

    await page.locator('//button[text()="Upload Multiple Files"]').click()

    //await expect(page.locator('//p[@id="singleFileStatus"]')).toContainText("Single file selected: AmazonPrimeTV_Dataset.xlsx")
    //await page.pause()
})

