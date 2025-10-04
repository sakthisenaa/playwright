import {test,expect} from  '@playwright/test'

test ("iframe method", async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")

    //const frame=await page.frames()

    //console.log("frame count :", frame.length)

    //for(let URL of frame)
      //  console.log("URL :",URL.url());
    const frame=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
    await frame.locator('//input[@name="mytext1"]').fill("playwright")
    await page.pause()

    // frame (name/url)
    //framelocator(locator)

    //const frame=await page.frame(iframe-name)
    //const frame=await page.frame({name:iframe-name})
//const frame=await page.frame({url:url link})
//const frame=await page.framelocator (locator)) 
    })
    //nested frames
 test.only('child frame', async({page})=>{
  await page.goto("https://ui.vision/demo/webtest/frames/")

  const frame=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})

  await frame.locator('//input[@name="mytext3"]').fill("playwright") 

  let child=await frame.childFrames()
  await child[0].locator('(//div[@class="AB7Lab Id5V1"])[2]').click()
  })