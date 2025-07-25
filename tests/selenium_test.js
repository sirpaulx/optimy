const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function testOptimyApp() {
  const options = new chrome.Options();
  options.addArguments('--headless'); 
  options.addArguments('--disable-gpu');
  options.addArguments('--no-sandbox');

  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    await driver.get('http://localhost:8083/');
    await driver.wait(until.elementLocated(By.tagName('p')), 10000);
    let content = await driver.findElement(By.tagName('p')).getText();
    if (content) {
      console.log("✅ Test Passed: Found content ->", content);
    } else {
      console.log("❌ Test Failed: No content found");
    }
  } finally {
    await driver.quit();
  }
})();