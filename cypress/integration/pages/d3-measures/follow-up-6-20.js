/// <reference types="Cypress" />

export class FollowUp6To20 {

    toggle30DayFollow() {
        cy.get('.radio-button-text')
            .contains('30-Day Follow-Up Rate')
            .click();
    }

}