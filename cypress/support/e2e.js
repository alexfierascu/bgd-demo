// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

beforeEach(() => {
    const baseURL = 'https://www.autovit.ro/'
    cy.visit(baseURL);
    // Wait a bit for the page to fully load, then check for cookies popup
    cy.wait(2000) // Give the page time to load
    cy.get('body').then(($body) => {
        if ($body.find('#onetrust-accept-btn-handler').length > 0) {
            cy.get('#onetrust-accept-btn-handler', { timeout: 5000 })
                .should('be.visible')
                .click()
                .wait(500) // Wait for popup to disappear
        }
    });

})

// Import commands.js using ES2015 syntax:
import './commands'