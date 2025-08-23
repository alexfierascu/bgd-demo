import {Homepage} from "../../support/pages/HomePage";

describe('AUTOVIT web app tests', () => {

    const homepage = new Homepage();
    const baseURL = 'https://www.autovit.ro/'

    it('Test that user successfully accessed the web application', () => {
        cy.url().should('eq', baseURL);
        cy.title().should('eq', homepage.homepageTexts.title);
    });

    it('Test landing page main elements', () => {
        for (const elementKey in homepage.homepageElements.mainPageElements) {
            cy.get(homepage.homepageElements.mainPageElements[elementKey]).should('exist')
        }
        cy.get(homepage.homepageElements.mainPageElements.button_cauta_anunturi).contains(/Caută.*anunțuri/);
    });

    it('Test that a non registered user can perform a search by using the search form', () => {
        cy.log("testing test 3");

    });

    xit('Test header elements', () => {
        cy.log("testing test 4");
    });

    xit('Test footer elements', () => {
        cy.log("testing test 5");
    });
})
