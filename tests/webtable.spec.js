import {test,expect} from '@playwright/test'

test ("webtable",async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    const table=await page.locator('#productTable')

    //count the column
    // const column=await table.locator('thead tr th')
    //console.log("number of column :" + await column.count());
    //count the rows
    const rows=await table.locator('tbody tr' )
    console.log("number of rows :" + await rows.count());
    
   const chk=rows.filter({
    has: await page.locator('td'),
    hasText: /Tablet|Smartwatch/
   }) 
  // await chk.locator('//input[@type="checkbox"]').check()
//})
    for(let i=0;i<count;i++){
        await check.nth(i).locator('//input[@type="checkbox"]').check()
    }
    await page.pause()
})
//for (let i=0;i<count;i++)
//    let row=tablerow.nth(i)
       