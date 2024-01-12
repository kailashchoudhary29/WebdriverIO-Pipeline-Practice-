

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get dashboardTitle () {
        return $('//h2[text()="Dashboard"]');
    }
}

export default new SecurePage();
