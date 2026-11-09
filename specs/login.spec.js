// #1 Feature: Log in
//   Scenario: Log in with valid credentials
//     Given the user is on the login page
//     When the user logs in with valid credentials
//     Then the user should be redirected to “My Account” page
//     And the user's name should be displayed in the profile

import { test } from '../fixtures/index.js';
import users from '../testdata/users.json' with {type: 'json'};

test('should log in a Customer with valid credentials successfully', async ({ homePage, loginPage, accountPage }) => {
  const user = users.customer2;
  
  await homePage.open();
  await homePage.header.goToSignIn();
  
  await loginPage.waitForPageToLoad();
  await loginPage.login(user.email, user.password);

  await accountPage.expectToBeOpened();
  await accountPage.header.expectUserMenuToHaveText(user.name);
});