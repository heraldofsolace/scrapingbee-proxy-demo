const webdriver = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const proxy = require('selenium-webdriver/proxy');
const { Builder } = webdriver;

(async function() {
    const options = new firefox.Options();
    // options.addArguments('--headless');
    // Ignore SSL errors
    options.addArguments('--ignore-certificate-errors');
    options.addArguments('--ignore-ssl-errors');
    options.addArguments('--allow-running-insecure-content');
    options.addArguments('--disable-web-security');

    const driver = new Builder()
      .forBrowser('firefox')
      .setFirefoxOptions(options)
      .setProxy(proxy.manual({ https: 'localhost:80' }))
      .build();
    
      await driver.get('https://www.scrapingbee.com');
      const headers = await driver.findElements(webdriver.By.css('h2'));
      headers.forEach(async (header) => {
        const text = await header.getText();
        console.log(text);
      })
})()