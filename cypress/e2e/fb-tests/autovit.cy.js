import {Homepage} from "../../support/pages/HomePage";

describe('autovit tests', () => {

    const homepage = new Homepage();
    const baseURL = 'https://www.autovit.ro/'

    it('verificam ca am navigat pe pagina', () => {
        cy.url().should('eq', baseURL);
        cy.title().should('eq', homepage.homepageTexts.title);
    });

    it('verificam elementele de baza ale pagini', () => {
        for (const elementKey in homepage.homepageElements.mainPageElements) {
            cy.get(homepage.homepageElements.mainPageElements[elementKey]).should('exist')
        }
        cy.get(homepage.homepageElements.mainPageElements.button_cauta_anunturi).contains(/Caută.*anunțuri/);
    });

    it('verificam ca putem completa formularul de login', () => {
        cy.log("ce smecher este testul asta")

    });

    xit('verificam elementele din header', () => {
        // In addition to using the `get` command to get an element by selector,
        // we can also use the `contains` command to get an element by its contents.
        // However, this will yield the <label>, which is lowest-level element that contains the text.
        // In order to check the item, we'll find the <input> element for this <label>
        // by traversing up the dom to the parent element. From there, we can `find`
        // the child checkbox <input> element and use the `check` command to check it.
        cy.contains('Pay electric bill')
            .parent()
            .find('input[type=checkbox]')
            .check()

        // Now that we've checked the button, we can go ahead and make sure
        // that the list element is now marked as completed.
        // Again we'll use `contains` to find the <label> element and then use the `parents` command
        // to traverse multiple levels up the dom until we find the corresponding <li> element.
        // Once we get that element, we can assert that it has the completed class.
        cy.contains('Pay electric bill')
            .parents('li')
            .should('have.class', 'completed')
    });
})
