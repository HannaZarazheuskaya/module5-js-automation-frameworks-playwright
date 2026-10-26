// #1 Feature: Log in
//   Scenario: Log in with valid credentials
//     Given the user is on the login page
//     When the user logs in with valid credentials
//     Then the user should be redirected to “My Account” page
//     And the user's name should be displayed in the profile

import { test, expect } from '../pages/fixtures.js';
import users from '../testdata/users.json' with {type: 'json'};

test('should log in a Customer with valid credentials successfully', async ({ page, homePage, headerComponent, loginPage }) => {
  const user = users.customer1;
  
  await homePage.open();
  await headerComponent.goToSignIn();
  await page.waitForURL(loginPage.url);
  await loginPage.login(user.email, user.password);

  await expect(page).toHaveURL('/account');
  await expect(headerComponent.userMenu).toHaveText(user.name);

});