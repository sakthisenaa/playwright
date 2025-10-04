import {test,expect} from '@playwright/test'
// skip ,fixme,fail,only,slow

// test("demo test 1",async()=>{
//     await expect(2).toBe(2)

// })
// test.fixme('demo test 2',async()=>{
//     await expect(2).toBe(2)
// })
// test.fail("demo test 3",async()=>{
//     await expect(2).toBe(2)

// })
// test.fail("demo test 4",async()=>{
//     await expect(2).toBe(0)

// })
test('navigation',async ({page}) => {
    //test.slow()
    await page.goto("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")
    
})