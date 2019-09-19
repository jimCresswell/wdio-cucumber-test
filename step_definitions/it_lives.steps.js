import { assert } from 'chai';
import { Given, When, Then } from 'cucumber';
import { mainPage } from '../pages/main.page';
import { loginPage } from '../pages/login.page';
import { data } from '../data/data';

// It doesn't matter that this is `given` rather than `when`,
// the different step types only exist for human readability.
Given(/^I visit the site$/, () => {
  mainPage.open();
});

Given(/^I want to log in$/, () => {
  loginPage.open();
});

When(/^I try to log in with a (.*) user$/, (userStatus) => {
  loginPage.logIn(data.getUser(userStatus));
});

Then(/^I am shown a (.*)$/, (response) => {
  assert(loginPage.hasResponse(response), "The user should have been " + response);
});

Then(/^The front page is visible$/, () => {
  assert(mainPage.hasLoaded(), "The main page should be visible");
});
