class LoginPage {
  elements = {
    usernameInput: () => cy.get("input[placeholder='Username']"),
    passwordInput: () => cy.get("input[placeholder='Password']"),
    loginBtn: () => cy.get("button.oxd-button.orangehrm-login-button"),
    pimMenu: () => cy.get("span.oxd-text.oxd-main-menu-item--name"),
    errorMessage: () => cy.get("p.oxd-text.oxd-alert-content-text"),
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  /*clickMenu() {
    this.elements.pimMenu().click();
  }*/

  submitLogin(username,password){
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
    //this.elements.pimMenu().click();
  }
}

export const loginPage = new LoginPage();
