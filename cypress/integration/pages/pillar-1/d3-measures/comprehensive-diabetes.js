/// <reference types="Cypress" />

export class ComprehensiveDiabetes {

    // Measure title
    measureTitle() {
        cy.get('h1')
            .should('contain', 'Comprehensive Diabetes Care: Hemoglobin A1c (HbA1c) Poor Control (>9.0%)');
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
            .should('contain', 'Median - 39.8%');
    }

    // Rate List


    // State Specific Comments
    stateSpecificWV() {
        cy.get('.bar').eq(0).trigger('mouseover')
            .then(() => {

                cy.get('.tooltip-text')
                    .should('contain', "WV: Rate includes managed care population (4 MCOs), representing 80 percent of the population. Rate excludes FFS population, representing 20 percent of the population, and Medicare-Medicaid Dual Eligibles. Denominator is the sample size; measure-eligible population is 20,171. Rate was validated by the state’s EQRO.")
            })
    }
}

export const comprehensiveDiabetes = new ComprehensiveDiabetes();