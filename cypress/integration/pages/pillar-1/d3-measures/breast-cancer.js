/// <reference types="Cypress" />

export class BreastCancer {

    // Measure title
    measureTitle() {
        cy.get('h1')
            .should('contain', 'Breast Cancer Screening');
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
            .should('contain', 'Median - 54.6%');
    }

    // Rate List


    // State Specific Comments
    stateSpecificWV() {
        cy.get('.bar').eq(0).trigger('mouseover')
            .then(() => {

                cy.get('.tooltip-text')
                    .should('contain', "WV: Rate includes FFS and managed care populations (4 MCOs). Rate includes paid claims only.")
            })
    }
}

export const breastCancer = new BreastCancer();