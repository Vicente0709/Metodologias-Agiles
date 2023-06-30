const { Builder, By, Key } = require('selenium-webdriver');
require('chromedriver');

async function test_case() {
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('C:/Users/HP/Desktop/EPN/METODOLOGIAS AGILES/proy/Metodologias-Agiles/views/index.html');

  let btnRegister = await driver.findElement(By.id('btnRegisterNav'));

  await btnRegister.click();
  console.log('Se hizo clic en el botón de Register');

  await driver.sleep(1000); // Esperar 1 segundo
  await driver.navigate().back();
  await driver.quit();
}

test_case();
