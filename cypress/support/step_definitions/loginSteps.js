import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pages/LoginPage"; 
import UrlLoader from "../utils/UrlLoader";

Given('I am on the login page', () => {
  LoginPage.assertLoginPageLoaded();
});

When('I enter username {string} and password {string}', (username, password) => {
  LoginPage.login(username, password);
});

Then('I should see {string}', (result) => {
  if (result === 'Products page') {
    LoginPage.assertSuccessfulLogin();
  } else if (result === 'error message') {
    LoginPage.assertLoginErrorVisible();
  } else {
    throw new Error(`Unknown expected result: ${result}`);
  }
});
