/**
*  Page Object for main page.
*/

class MainPage {
  open() {
    browser.url('/');
  }

  get mainPageBody() {
    return $('#index');
  }
  
  hasLoaded() {
    return this.mainPageBody.isExisting();
  }
}

export const mainPage = new MainPage();
