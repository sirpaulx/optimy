const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

(async function testOptimyApp() {
  // Configure Chrome in headless mode
  const options = new chrome.Options();
  options.addArguments('--headless', '--disable-gpu', '--no-sandbox');

  // Create driver instance
  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    const url = 'http://localhost:8083/';
    console.log(`🔍 Navigating to: ${url}`);
    await driver.get(url);

    // Wait for <p> tag to appear
    await driver.wait(until.elementLocated(By.tagName('p')), 10000);

    // Get all <p> tags and extract text
    const elements = await driver.findElements(By.tagName('p'));
    const texts = await Promise.all(elements.map(el => el.getText()));

    // Assertion: Ensure we have at least 1 line of meaningful text
    assert(texts.length > 0, '❌ No <p> elements found.');
    assert(texts[0].trim().length > 0, '❌ First <p> element is empty.');

    console.log("✅ Test Passed:");
    texts.forEach((t, i) => console.log(`  • <p>[${i + 1}]: ${t}`));

  } catch (err) {
    console.error(`❌ Test Failed: ${err.message}`);
    process.exitCode = 1;
  } finally {
    await driver.quit();
  }
})();
