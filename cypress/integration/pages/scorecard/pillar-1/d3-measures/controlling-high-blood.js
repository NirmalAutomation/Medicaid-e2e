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

    // Viz Title
    vizTitle() {
        cy.get('h2')
            .should('contain', 'Controlling High Blood Pressure');
    }

    // Median Rate
    medianRate() {
        cy.get('.median-text')
            .should('contain', 'Median - 57.8%');
    }

    // Rate List
    rateList() {
        cy.get('.chart-axisRight')
            .should('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '63.5%')
            .and('contain', 'NR')
            .and('contain', '62.2%')
            .and('contain', '34.0%')
            .and('contain', '46.3%')
            .and('contain', '55.0%')
            .and('contain', 'NR')
            .and('contain', '52.1%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '53.6%')
            .and('contain', '51.7%')
            .and('contain', '37.7%')
            .and('contain', '66.6%')
            .and('contain', '62.4%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '41.9%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '69.7%')
            .and('contain', '55.2%')
            .and('contain', '49.9%')
            .and('contain', '50.0%')
            .and('contain', '59.2%')
            .and('contain', '54.3%')
            .and('contain', 'NR')
            .and('contain', '68.3%')
            .and('contain', '64.3%')
            .and('contain', '71.7%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '57.2%')
            .and('contain', '43.6%')
            .and('contain', '66.4%')
            .and('contain', '61.7%')
            .and('contain', 'NR')
            .and('contain', '59.9%')
            .and('contain', '59.7%')
            .and('contain', '58.4%')
            .and('contain', 'NR');
    }

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