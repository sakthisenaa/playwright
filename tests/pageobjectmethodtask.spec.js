import {test,expect} from "@playwright/test";
import Sauce from "../jsfile/saucedemotask";


test("page objectmodel task",async({page})=>{

    await page.goto("https://www.saucedemo.com/")

    const print=new Sauce(page)
    print.login("standard_user","secret_sauce")

    //await page.
})