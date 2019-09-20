/// <reference types="Cypress" />

export class ImmunizationsAdolescents {

    // Measure title
    measureTitle() {
        cy.get('h1')
            .should('contain', 'Immunizations for Adolescents');
    }

    // VISIT THE DOMAIN
    visitTheDomain() {
        cy.get('.domainNav')
            .should('contain', 'VISIT THE DOMAIN: ')
            .and('contain', 'Promote Effective Prevention & Treatment of Chronic Diseases');
    }

    // Median Rate
    medianRateHPV() {
        cy.get('.median-text')
            .should('contain', 'Median - 32.3%');
    }

    medianRateCombination() {
        cy.get('.median-text')
            .should('contain', 'Median - 77.3%');
    }

    // Rate List


    // State Specific Comments
    stateSpecificWVHPV() {
        cy.get('.bar').eq(0).trigger('mouseover')
            .then(() => {

                cy.get('.tooltip-text')
                    .should('contain', "WV: Medicaid rates include managed care population (4 MCOs), representing 86 percent of the population. Rates exclude FFS population, representing 14 percent of the population. State applied optional exclusions. Rates include paid claims only. Denominator is the sample size; measure-eligible population is 6,364. CHIP rates include FFS population. State attributes lower rate to transition in data systems, which resulted in incomplete claims data. Population: CHIP only State Rate: 8.9");
            })
    }

    stateSpecificWVCombination() {
        cy.get('.bar').eq(0).trigger('mouseover')
            .then(() => {

                cy.get('.tooltip-text')
                    .should('contain', "WV: Medicaid rates include managed care population (4 MCOs), representing 86 percent of the population. Rates exclude FFS population, representing 14 percent of the population. State applied optional exclusions. Rates include paid claims only. Denominator is the sample size; measure-eligible population is 6,364. CHIP rates include FFS population. State attributes lower rate to transition in data systems, which resulted in incomplete claims data. Population: CHIP only State Rate: 39.1");
            })
    }
}

export const immunizationsAdolescents = new ImmunizationsAdolescents();