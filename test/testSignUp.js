const { Builder, By, Key, until } = require('selenium-webdriver');

const driver = new Builder().forBrowser('chrome').build();

async function signUp() {
  try {
    // Navegar a la página de registro
    await driver.get('C:/Users/HP/Desktop/EPN/METODOLOGIAS AGILES/proy/Metodologias-Agiles/views/signup.html'); 
    await driver.sleep(2000); 

    // Ingresar nombre
    const nombreInput = await driver.findElement(By.id('nombre'));
    await nombreInput.sendKeys('test user'); 
    await nombreInput.sendKeys(Key.TAB);

    // Ingresar dirección de correo electrónico
    const emailInput = await driver.findElement(By.id('email'));
    await emailInput.sendKeys('testUser@example.com');
    await emailInput.sendKeys(Key.TAB);

    // Ingresar contraseña
    const passwordInput = await driver.findElement(By.id('password'));
    await passwordInput.sendKeys('hola12345'); 
    await passwordInput.sendKeys(Key.TAB);

    // Volver a ingresar contraseña
    const password2Input = await driver.findElement(By.id('password2'));
    await password2Input.sendKeys('hola12345'); 
    await password2Input.sendKeys(Key.RETURN);

    await driver.sleep(3000);

    const alertMessage = await driver.switchTo().alert().getText();
    if (alertMessage.includes('Usuario creado exitoso')) {
      console.log('Cuenta creada exitosamente');
    } else {
      console.log('Error al crear la cuenta');
    }
  } finally {

    await driver.quit();
  }
}

signUp();
