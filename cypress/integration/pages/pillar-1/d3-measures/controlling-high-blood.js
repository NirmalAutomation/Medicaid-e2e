/// <reference types="Cypress" />

export class ControllingHighBlood {

    // Measure title
    measureTitle() {
        cy.get('h1')
            .should('contain', 'Controlling High Blood Pressure');
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
            .should('contain', 'Median - 57.8%');
    }

    // Rate List


    // State Specific Comments
    stateSpecificWV() {
        cy.get('.bar').eq(0).trigger('mouseover')
            .then(() => {

                cy.get('.tooltip-text')
                    .should('contain', "WV: Rate includes managed care population (4 MCOs), representing 80 percent of the population. Rate excludes FFS population, representing 20 percent of the population, and Medicare-Medicaid Dual Eligibles. Denominator is the sample size; measure-eligible population is 36,459. Rate was validated by the state’s EQRO.")
            })
    }
}

export const controllingHighBlood = new ControllingHighBlood();