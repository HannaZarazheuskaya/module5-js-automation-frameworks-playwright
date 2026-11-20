## Task Description
<details>
<summary><b> Please click here to expand the full task</b></summary>

Task description
1. Walk through the provided materials (official documentation, video) to understand how Playwright works and the main benefits of the tool.
2. Create an initial setup of Playwright on the local machine
3. Create Playwright config if it does not exist and familiarize
4. Create first specs using the existing BDD scenario created in Module 2 (automate only 4 of BDD scenarios)
5. Execute these tests using CLI in different browsers (Chrome, Firefox, Safari) in headless mode
6. Execute tests in parallel using 2 instances
7. Add the option to run tests 2 times before marking it as failed
8. Push the code to remote repository and create Merge Request


Assessment criteria (pass rate is 70%)
Here’s the list of actions which result in reduction of overall mark for a completed task:
1. Playwright set up with triavial mistatkes (-10%)
2. Not all scenarios from Module 1 are codded (each test -5%)
3. Tests are not run in all mentioned browsers (-10%)
4. Tests are not run in parallel (-5%)
5. Tests are not run in headless mode (-5%)
6. Retry to auto rerun test option isn’t added (-5%)

</details>


## Scenarios Under Test 

<details>
<summary><b> Please click here to expand the scenarios</b></summary>

### Scenario 1: Log in with valid credentials

    Given the user is on the login page
    When the user logs in with valid credentials
    Then the user should be redirected to “My Account” page
    And the user's name should be displayed in the profile

### Scenario 2: Add products to cart from the product details page

    Given the user is on the home page
    When the user views a product detail page 
    And the user adds 3 items of this product to cart
    And user opens cart
    Then the cart should contain 3 items of this product

### Scenario 3: Remove a product from the shopping cart
    
    Background: 
    
        Given the user is on the home page
        And the user opens a product detail page
        And the user adds the product to cart
        And the user opens the cart

    Scenario: Remove a product from the shopping cart

        Given the user is on the cart page 
        When the user removes the product from the cart
        Then the cart should contain no products
        And the message “The cart is empty. Nothing to display.” should be displayed

### Scenario 4: Change localization to German

    Given the user is on the home page  
    When the user switches the language to German
    Then the user should remain on the same page
    And the labels should be translated into German

### API Test Suite (Service Layer) for Restful-Booker API

Automated API tests for the Restful-Booker service to verify CRUD test case:
* **Authentication**: generate session token using credentials.
* **Booking CRUD**: validate booking creation (`POST`), retrieval (`GET`), partial update (`PATCH`), deletion (`DELETE`).
* **Data Verification**: payloads from `apiData.js` for checking HTTP statuses, headers and response body.

</details>

## Project structure
```
module5-js-automation-frameworks-playwright/
├── api                 api client and methods for backend interaction
├── fixtures            fixtures for components and pages
├── pages/              page objects
│   └── components/     page object components
├── playwright-report/  html-report
├── specs/              tests
├── testdata/           credentials, address, api payload data
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── playwright.config.js
```
* **pageobjects**: page classes with locators as per playwright practices, getters and methods.
* **components**: components, such as header, sidebar and product card.
* **playwright-report**: html-report generated upon test run (added to .gitignore)
* **specs**: test flow .
* **testdata**: contains user and admin credentials.
* **api** : api client and methods for backend interaction, api payload data.
* **playwright.config.js**: base url, testIdAttribute, browsers, specs, retries and workers.


## Project Layers
According to the task requirements, there are the following layers:

### 1. Core Layer
General framework functionality and test setups
* **`pages/page.js`**: the base Page Object class.
* **`fixtures folder`**: custom Playwright fixtures that help with dependency injection.

### 2. Business Layer
Business logic, locators:
* **`pages/` and `pages/components/`**: page objects implementing the Page Object Model (POM).

### 3. Service Layer
Backend interaction and api client:
* **`api/`**: API client implementing the service layer for backend requests.

### 4. Tests Layer
Contains test suites, test configurations, test data:
* **`specs/`**: end-to-end ui scenarios, backend api test suite.
* **`testdata/`**: test data.
* **`playwright.config.js`**: framework configuration (retries, parallel workers).


## Tools 
* **Core Framework**: Playwright v1.64.1
* **Design Pattern**: Page Object Model
* **Test Runner**: Playwright test runner
* **Test Framework**: Playwright
* **Assertions**: Playwright assertions (expect)
* **Extension**: Playwright test for VSCode (to run tests and debug)
* **Selectors**: CSS selectors, page.getByTestId(`data-testid`)
* **Browsers**: Google Chrome, Firefox, Webkit - Safari (parallel run)
* **Reporters**: HTML-reporter, link built-in reporter

## Instructions to run 

As a prerequisite, you need to have Node.js installed. 

**1. Install the dependencies**

Open the project folder and run in terminal:
`npm install`
`npx playwright install`

**2. Run all tests**

To run all tests simultaneously in all browsers:

`npx playwright test`

**3. Run a specific test**

To run only one spec file, e.g. `login.spec.js`:

`npx playwright test specs/login.spec.js`

**4. Run tests in a specific browser**

To run tests in only one browser use:

`npx playwright test --project=chromium`

`npx playwright test --project=firefox`

`npx playwright test --project=webkit`

**5. Open last HTML report**

To open the HTML report generated after the latest run:

`npx playwright show-report`