const { Builder, By, Key, until } = require('selenium-webdriver');
require('chromedriver');

// Configuración de Selenium
const driver = new Builder().forBrowser('chrome').build();

async function loginToFirebase() {
  try {

    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('C:/Users/HP/Desktop/EPN/METODOLOGIAS AGILES/proy/Metodologias-Agiles/views/index.html');
  
    let btnLog = await driver.findElement(By.id('btnLogNav'));
  
    await btnLog.click();
    console.log('Se hizo clic en el botón de Log In');
  
    await driver.sleep(1000); // Esperar 1 segundo

    // Ingresar credenciales de inicio de sesión
    const emailInput = await driver.findElement(By.id('email'));
    await emailInput.sendKeys('stalin.narvaez02@epn.edu.ec'); 
    await emailInput.sendKeys(Key.TAB);

    const passwordInput = await driver.findElement(By.id('password'));
    await passwordInput.sendKeys('pain070900'); 
    await passwordInput.sendKeys(Key.RETURN);

    await driver.sleep(7000); 

    // Verificar el inicio de sesión exitoso
    const currentUrl = await driver.getCurrentUrl();
    console.log(currentUrl)
     if (currentUrl === 'file:///C:/Users/HP/Desktop/EPN/METODOLOGIAS%20AGILES/proy/Metodologias-Agiles/views/index.html') { 
       console.log('Inicio de sesión exitoso');
     } else {
       console.log('Error en el inicio de sesión');
     }
  } finally {
    // Cerrar el navegador y finalizar el script
    await driver.quit();
  }
}

loginToFirebase();
