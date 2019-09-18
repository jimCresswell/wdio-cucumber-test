import { assert } from 'chai';
import { Given, When, Then } from 'cucumber';
import { mainPage } from '../pages/main.page';

// It doesn't matter that this is `given` rather than `when`,
// the different step types only exist for human readability.
Given(/^I visit the site$/, () => {
  mainPage.open();
});

Then(/^The front page is visible$/, () => {
  assert(mainPage.hasLoaded(), "The main page should be visible");
});
