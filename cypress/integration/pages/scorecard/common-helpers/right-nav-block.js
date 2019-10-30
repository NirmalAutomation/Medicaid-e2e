/// <reference types="Cypress" />

export class RightNavBlock {

    rightNavElements() {
        cy.get('.pillarNavContainer')
            .should('contain', 'National Context')
            .and('contain', 'State Health System Performance')
            .and('contain', 'State Administrative Accountability')
            .and('contain', 'Federal Administrative Accountability');
    }

    clickMedicaidLogo() {
        cy.get('.pillarNavLogo')
            .eq(0)
            .click({ force: true });
    }

    selectNCLink() {
        cy.get('.pillarWrapper')
            .contains('National Context')
            .click();
    }

    selectStateHealthLink() {
        cy.get('.pillarWrapper')
            .contains('State Health System Performance')
            .click();
    }

    selectStateAdminLink() {
        cy.get('.pillarWrapper')
            .contains('State Administrative Accountability')
            .click();
    }

    selectFederalAdminLink() {
        cy.get('.pillarWrapper')
            .contains('Federal Administrative Accountability')
            .click();
    }

}

export const rightNavBlock = new RightNavBlock();