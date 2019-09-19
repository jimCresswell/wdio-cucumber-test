/**
 * Interface to test data.
 */

class Data {

  constructor() {
    this.validUser = {
      email: "wgabrieldapaixao@gmx.com",
      password: "12345678"
    };
    this.invalidUser = {
      email: "NotAUser@1.1",
      password: "Not a password"
    };
  }

  getUser(userType) {
    switch (userType) {
      case 'valid':
        return this.validUser;
        break;
      case 'invalid':
        return this.invalidUser;
        break;
      default:
        throw new TypeError("Unsupported user type " + userType);
    }
  }
}

export const data = new Data();
