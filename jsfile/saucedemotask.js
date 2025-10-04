class Sauce{
    constructor(page){
        this.page=page
        this.username=page.locator('//input[@placeholder="Username"]')
        this.password=page.locator('//input[@id="password"]')
        this.log=page.locator('//input[@id="login-button"]')

        
    }
    async login(uname,pword){
        await this.username.fill(uname)
        await this.password.fill(pword)
        await this.log.click()
    }
}
export default Sauce;
   