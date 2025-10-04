import{test,expect} from "@playwright/test"

// test.beforeAll("SauceLab",async({})=>{
//     console.log("Testing Started successfully")
// })

test("Login",async({page})=>{
await page.goto("https://www.saucedemo.com/")
await page.locator('//input[@placeholder="Username"]').fill("standard_user")
await page.locator('//input[@placeholder="Password"]').fill("secret_sauce")
await page.locator('//input[@id="login-button"]').click()
    
})

test("ProductName",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
await page.locator('//input[@placeholder="Username"]').fill("standard_user")
 await page.locator('//input[@placeholder="Password"]').fill("secret_sauce")
    await page.locator('//input[@id="login-button"]').click()
    await page.waitForTimeout(3000)
    let productname=await page.locator('//div[@class="inventory_item_name "]').allTextContents()
    console.log("The product names : "+ productname)
})

test("ProductPrice",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
await page.locator('//input[@placeholder="Username"]').fill("standard_user")
 await page.locator('//input[@placeholder="Password"]').fill("secret_sauce")
    await page.locator('//input[@id="login-button"]').click()
    await page.waitForTimeout(3000)
    let productprice=await page.locator('//div[@class="inventory_item_price"]').allTextContents()
    console.log("The product price is : " + productprice)
})

test("AddToCart",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
await page.locator('//input[@placeholder="Username"]').fill("standard_user")
 await page.locator('//input[@placeholder="Password"]').fill("secret_sauce")
    await page.locator('//input[@id="login-button"]').click()
    await page.waitForTimeout(3000)
    await page.locator('//button[@id="add-to-cart-sauce-labs-backpack"]').click()
    await page.locator('//button[@id="add-to-cart-sauce-labs-bike-light"]').click()
    await page.click('//div[@id="shopping_cart_container"]')
    await expect(page.locator('(//div[@class="inventory_item_price"])[1]')).toHaveText("$29.99")
    await expect(page.locator('(//div[@class="inventory_item_price"])[2]')).toHaveText("$9.99")
    await page.click('//button[@id="checkout"]')
    await page.locator('//input[@placeholder="First Name"]').fill("Sakthi")
await page.locator('//input[@placeholder="Last Name"]').fill("senaa")
await page.locator('//input[@placeholder="Zip/Postal Code"]').fill("638181")
await page.click('//input[@id="continue"]')
await expect(page.locator('//div[@class="summary_total_label"]')).toHaveText("Total: $43.18")
await page.click("//button[@id='finish']")
    await expect(page.getByAltText("Pony Express")).toBeVisible()
    await expect(page.locator('//h2[@class="complete-header"]')).toHaveText("Thank you for your order!")
    await page.click('//button[@id="back-to-products"]')
})

/* test.skip("Address",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
await page.locator('//input[@placeholder="Username"]').fill("standard_user")
 await page.locator('//input[@placeholder="Password"]').fill("secret_sauce")
    await page.locator('//input[@id="login-button"]').click()
      await page.waitForTimeout(3000)
await page.locator('//input[@placeholder="First Name"]').fill("sakthi")
await page.locator('//input[@placeholder="Last Name"]').fill("senaa")
await page.locator('//input[@placeholder="Zip/Postal Code"]').fill("638181")
await page.click('//input[@id="continue"]')
await expect(page.locator('//div[@class="summary_total_label"]')).toHaveText("Total: $43.18")
await page.click("//button[@id='finish']")
await page.waitForTimeout(3000)
}) */


test("Logout",async({page})=>{
     await page.goto("https://www.saucedemo.com/")
await page.locator('//input[@placeholder="Username"]').fill("standard_user")
 await page.locator('//input[@placeholder="Password"]').fill("secret_sauce")
    await page.locator('//input[@id="login-button"]').click()
    await page .click('//button[@id="react-burger-menu-btn"]')
    await page.click('//a[text()="Logout"]')
})

