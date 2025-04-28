class LoginPage {
  // 👉 Define locators separately at the top
  static usernameField = '#user-name';
  static passwordField = '#password';
  static loginButton = '[data-test="login-button"]';
  static errorMessage = '[data-test="error"]';
  static productsTitle = '.title';

  static visit() {
    cy.visit('/');
  }

  static assertLoginPageLoaded() {
    cy.get(this.loginButton).should('be.visible');
  }

  static login(username, password) {
    cy.get(this.usernameField).clear().type(username);
    cy.get(this.passwordField).clear().type(password);
    cy.get(this.loginButton).click();
  }

  static assertSuccessfulLogin() {
    cy.get(this.productsTitle).should('have.text', 'Products');
  }

  static assertLoginErrorVisible() {
    cy.get(this.errorMessage).should('be.visible');
  }
}

export default LoginPage;
