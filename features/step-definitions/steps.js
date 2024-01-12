import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';


const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
    await browser.pause(5000)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

Then(/^I should able to see "([^"]*)" screen$/, async (getScreenName) => {
    await expect(SecurePage.dashboardTitle).toBeExisting();
    await expect(SecurePage.dashboardTitle).toHaveTextContaining(getScreenName);
    await expect(SecurePage.dashboardTitle).toBeDisplayed();
});


Then(/^I hover on the dashboard summary screen$/, async () => {
    await LoginPage.hoverOnDashbaordEle()
    
});

Then(/^I clicked on the order and selects the "([^"]*)" option$/, async (getOrderScreenName) => {
    await LoginPage.selectSubMenuItem(getOrderScreenName)
    await browser.pause(5000)
});


//a[@href='/dashboard/summary']
