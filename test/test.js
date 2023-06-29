// Import the necessary functions and constants
const { fireEvent } = require("@testing-library/dom");

// Import the JavaScript file that contains the functions to be tested
const { btnLog, btnRegister } = require("./your-js-file");

// Mock the window.location.href
delete window.location;
window.location = { href: "" };

// Test the event listeners
describe("Event Listeners", () => {
  test("btnLog click should log message and navigate to login.html", () => {
    console.log = jest.fn(); // Mock console.log function
    fireEvent.click(btnLog); // Trigger click event

    // Expectations
    expect(console.log).toHaveBeenCalledWith(
      "Se hizo clic en el botón de Log In"
    );
    expect(window.location.href).toBe("../views/login.html");
  });

  test("btnRegister click should log message and navigate to signup.html", () => {
    console.log = jest.fn(); // Mock console.log function
    fireEvent.click(btnRegister); // Trigger click event

    // Expectations
    expect(console.log).toHaveBeenCalledWith(
      "Se hizo clic en el botón de Register"
    );
    expect(window.location.href).toBe("../views/signup.html");
  });
});
