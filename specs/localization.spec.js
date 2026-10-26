// #4 Feature: Localization
//   Scenario: Change localization to German
//     Given the user is on the home page
//     When the user switches the language to German
//     Then the user should remain on the same page
//     And the labels should be translated into German

import {test, expect} from '../pages/fixtures.js';

test('should translate header elements into German for a Guest user', async ({headerComponent, homePage}) => {
    
    await homePage.open();
    await headerComponent.switchLanguage('de');
    
    await expect(headerComponent.homeLink).toHaveText('Start');
    await expect(headerComponent.contactLink).toHaveText('Kontakt');
    await expect(headerComponent.signInLink).toHaveText('Einloggen');
});