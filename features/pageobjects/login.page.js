
import Page from "./page.js";


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $('//input[@name="userName"]');
  }

  get inputPassword() {
    return $('//input[@name="password"]');
  }

  get btnSubmit() {
    return $('[type="submit"]');
  }
  get dashboardSummaryIcon() {
    return $('//a[@href="/dashboard/summary"]');
  }
  get clickOnOrderScreen() {
    return $('//span[text()="Orders"]');
  }
  async clickOnOrderType(orderType) {
    return await $(`//span[text()='${orderType}']`);
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }
  async hoverOnDashbaordEle() {
    await this.dashboardSummaryIcon.moveTo();
  }
  async selectSubMenuItem(getOrderTypeName) {
    await this.clickOnOrderScreen.click();
   const clickOnSubOrderScreen  = await this.clickOnOrderType(getOrderTypeName)
   await clickOnSubOrderScreen 
   .click()
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open();
  }
}

export default new LoginPage();
