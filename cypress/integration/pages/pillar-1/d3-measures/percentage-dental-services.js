/// <reference types="Cypress" />

export class PercentageDentalServices {

    // Measure title
    measureTitle() {
        cy.get('h1')
            .should('contain', 'Percentage of Eligibles Who Received Preventive Dental Services');
    }

    // VISIT THE DOMAIN
    visitTheDomain() {
        cy.get('.domainNav')
            .should('contain', 'VISIT THE DOMAIN: ')
            .and('contain', 'Promote Effective Prevention & Treatment of Chronic Diseases');
    }

    // Median Rate
    medianRate() {
        cy.get('.median-text')
            .should('contain', 'Median - 48%');
    }

    // Rate List


    // State Specific Comments
    stateSpecificWV() {
        cy.get('.bar').eq(0).trigger('mouseover')
            .then(() => {

                cy.get('.tooltip-text')
                    .should('contain', "WV: None")
            })
    }
}

export const percentageDentalServices = new PercentageDentalServices();