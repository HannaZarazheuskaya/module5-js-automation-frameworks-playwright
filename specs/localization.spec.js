// #4 Feature: Localization
//   Scenario: Change localization to German
//     Given the user is on the home page
//     When the user switches the language to German
//     Then the user should remain on the same page
//     And the labels should be translated into German

import {test, expect} from '../fixtures/index.js';

test('should translate header elements into German for a Guest user', async ({homePage}) => {
    
    await homePage.open();
    await homePage.header.switchLanguage('de');
    
    await expect(homePage.header.homeLink).toHaveText('Start');
    await expect(homePage.header.contactLink).toHaveText('Kontakt');
    await expect(homePage.header.signInLink).toHaveText('Einloggen');
});