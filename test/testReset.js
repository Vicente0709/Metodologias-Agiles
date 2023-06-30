const { Builder, By, Key, until } = require('selenium-webdriver');

// Configuración de Selenium
const driver = new Builder().forBrowser('chrome').build();

async function resetPassword() {
  try {
    // Navegar a la página de reseteo de contraseña
    await driver.get('C:/Users/HP/Desktop/EPN/METODOLOGIAS AGILES/proy/Metodologias-Agiles/views/reseteo.html');
    await driver.sleep(2000); 

    // Ingresar dirección de correo electrónico
    const emailInput = await driver.findElement(By.id('email'));
    await emailInput.sendKeys('stalin.narvaez02@epn.edu.ec'); 
    await emailInput.sendKeys(Key.RETURN);

    await driver.sleep(3000); 

    // Verificar si el correo de reseteo se envió correctamente
    const alertMessage = await driver.switchTo().alert().getText();
    if (alertMessage === 'Se ha enviado un correo electrónico para restablecer la contraseña.') {
        console.log('Correo de reseteo enviado correctamente');
    } else {
        console.log('Error al enviar el correo de reseteo');
    }
    } finally {
    // Cerrar el navegador y finalizar el script
    await driver.quit();
    }
}

resetPassword();
