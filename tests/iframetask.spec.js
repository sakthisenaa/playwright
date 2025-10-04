import {test,expect} from  '@playwright/test'

test ("iframe methodtask", async({page})=>{
    await page.goto("https://letcode.in/frame")

    //const frame=await page.frames()

    //console.log("frame count :", frame.length)

    //for(let URL of frame){
      //  console.log("URL :",URL.url());
    //}
    //const frame_1=await page.frame(firstFr)
    const frame_1=await page.frame({url:"https://letcode.in/frameui"})
    await frame_1.locator('//input[@name="fname"]').fill("sakthi")
    await frame_1.locator('//input[@name="lname"]').fill("senaa")
    await page.pause()
    
    })
  test.only('child frametask', async({page})=>{
  await page.goto("https://letcode.in/frame")

  const frame_3=await page.frame({url:"https//letcode.in/innerframe"})

  await frame_3.locator('//input[@class="input"]').fill("sakthisenaapathyme@gmail.com") 

  //let child=await frame.childFrames()
  //await child[0].locator('(//div[@class="AB7Lab Id5V1"])[2]').click()
  })