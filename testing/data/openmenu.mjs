// import { By, Key, until } from 'selenium-webdriver'
// import chai from 'chai'
// import chaiWebdriver from 'chai-webdriver'

// chai.use(chaiWebdriver(browser));

export const testName = 'open_menu';
export async function run (browserUtils, resultUtils) {
    const { browser, By, Key } = browserUtils
    const { chai, transitionTime, takeScreenshot } = resultUtils

    
    await browser.get("https://secrets-cockpit.extensivlyon.coffee/")
    await transitionTime()
    await takeScreenshot(0)

    const settingspageContent = await browser.findElement(By.css("#settingspage-content"))
    
    chai.assert(settingspageContent.isDisplayed(), false)
    // await chai.expect().dom.not.to.be.visible()

    
    await browser.findElement(By.id("header-right")).click()
    await transitionTime()
    await takeScreenshot(1)
    chai.assert(settingspageContent.isDisplayed(), true)
    // await chai.expect("#settingspage-content").dom.to.be.visible()

    await browser.findElement(By.css(".active > .slideinframe-back-button")).click()
    await transitionTime()
    await takeScreenshot(2)
    chai.assert(settingspageContent.isDisplayed(), false)
    // await chai.expect("#settingspage-content").dom.not.to.be.visible()

}