/**
*  Page Object for login page.
*/

class LoginPage {
  open() {
    browser.url('/index.php?controller=authentication&back=my-account');
  }

  get userEmailEl() {
    return $('#email');
  }

  get userPasswordEl() {
    return $('#passwd');
  }

  get userSubmitEl() {
    return $('#SubmitLogin');
  }

  get userWelcomeEl() {
    return $('.info-account');
  }

  get userRejectionEl() {
    return $('#authentication .alert-danger');
  }

  logIn(user) {
    this.userEmailEl.waitForExist();
    this.userEmailEl.setValue(user.email);
    this.userPasswordEl.setValue(user.password);
    this.userSubmitEl.click();
  }

  hasResponse(response) {
    switch (response) {
      case 'welcome':
        return this.userWelcomeEl.waitForExist();
        break;
      case 'rejection':
        return this.userRejectionEl.waitForExist();
        break;
      default:
        throw new TypeError('Unsupported log in response type' + response);
    }
  }
}

export const loginPage = new LoginPage();
