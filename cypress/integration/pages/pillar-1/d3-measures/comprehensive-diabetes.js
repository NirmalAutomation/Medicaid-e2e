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
    rateList() {
        cy.get('.chart-axisRight')
            .should('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '34.9%')
            .and('contain', 'NR')
            .and('contain', '38.8%')
            .and('contain', '48.0%')
            .and('contain', '45.8%')
            .and('contain', '40.9%')
            .and('contain', '94.7%')
            .and('contain', '41.0%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '47.3%')
            .and('contain', '50.8%')
            .and('contain', '35.7%')
            .and('contain', '37.8%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '56.1%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '32.5%')
            .and('contain', '39.9%')
            .and('contain', '48.4%')
            .and('contain', '43.2%')
            .and('contain', '31.5%')
            .and('contain', '49.4%')
            .and('contain', 'NR')
            .and('contain', '23.6%')
            .and('contain', '34.7%')
            .and('contain', '28.8%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '37.2%')
            .and('contain', 'NR')
            .and('contain', '32.3%')
            .and('contain', '39.8%')
            .and('contain', '31.5%')
            .and('contain', '37.4%')
            .and('contain', 'NR')
            .and('contain', '40.5%')
            .and('contain', 'NR')
    }

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