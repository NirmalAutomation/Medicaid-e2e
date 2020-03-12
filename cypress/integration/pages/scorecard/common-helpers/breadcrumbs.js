/// <reference types="Cypress" />

export class Breadcrumbs {

    clickHome() {
        cy.get('.breadcrumb')
            .contains('Home')
            .click();
    }

    clickStateOverviews() {
        cy.get('.breadcrumb')
            .contains('State Overviews')
            .click();
            
    }

}

export const breadcrumbs = new Breadcrumbs();