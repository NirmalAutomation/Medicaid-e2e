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
    rateListHPV() {
        cy.get('.chart-axisRight')
            .should('contain', 'NR')
            .and('contain', '39.4%')
            .and('contain', 'NR')
            .and('contain', '40.4%')
            .and('contain', '41.3')
            .and('contain', 'NR')
            .and('contain', '36.7%')
            .and('contain', '58.6%')
            .and('contain', '47.2%')
            .and('contain', '33.1%')
            .and('contain', '31.9%')
            .and('contain', '28.1%')
            .and('contain', '7.5%')
            .and('contain', 'NR')
            .and('contain', '33.5%')
            .and('contain', '32.6%')
            .and('contain', '31.9%')
            .and('contain', '23.0%')
            .and('contain', '41.1%')
            .and('contain', '35.8%')
            .and('contain', '45.1%')
            .and('contain', 'NR')
            .and('contain', '37.7%')
            .and('contain', '56.1%')
            .and('contain', '20.9%')
            .and('contain', '19.3%')
            .and('contain', '16.5%')
            .and('contain', '25.6%')
            .and('contain', 'NR')
            .and('contain', '21.6%')
            .and('contain', '29.1%')
            .and('contain', '31.3%')
            .and('contain', '29.0%')
            .and('contain', '40.1%')
            .and('contain', '45.7%')
            .and('contain', 'NR')
            .and('contain', '12.6%')
            .and('contain', '22.7%')
            .and('contain', '36.8%')
            .and('contain', '50.9%')
            .and('contain', '12.3%')
            .and('contain', '26.0%')
            .and('contain', '24.6%')
            .and('contain', '30.1%')
            .and('contain', '32.9%')
            .and('contain', '60.3%')
            .and('contain', '21.5%')
            .and('contain', '40.6%')
            .and('contain', '35.2%')
            .and('contain', '25.2%')
            .and('contain', '8.7%')
    }

    rateListCombination() {
        cy.get('.chart-axisRight')
            .should('contain', 'NR')
            .and('contain', '79.8%')
            .and('contain', 'NR')
            .and('contain', '86.2%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '89.5%')
            .and('contain', '78.2%')
            .and('contain', '82.0%')
            .and('contain', '71.7%')
            .and('contain', '87.3%')
            .and('contain', '58.9%')
            .and('contain', '46.9%')
            .and('contain', 'NR')
            .and('contain', '83.8%')
            .and('contain', '81.9%')
            .and('contain', '72.0%')
            .and('contain', '77.3%')
            .and('contain', '88.9%')
            .and('contain', '83.3%')
            .and('contain', '87.1%')
            .and('contain', 'NR')
            .and('contain', '85.1%')
            .and('contain', '78.8%')
            .and('contain', '49.2%')
            .and('contain', '49.5%')
            .and('contain', '51.3%')
            .and('contain', '70.5%')
            .and('contain', 'NR')
            .and('contain', '64.3%')
            .and('contain', '72.3%')
            .and('contain', '86.5%')
            .and('contain', '65.2%')
            .and('contain', '83.4%')
            .and('contain', '84.4%')
            .and('contain', 'NR')
            .and('contain', '22.5%')
            .and('contain', '66.3%')
            .and('contain', '86.4%')
            .and('contain', '86.9%')
            .and('contain', '40.4%')
            .and('contain', '57.6%')
            .and('contain', '70.6%')
            .and('contain', '77.4%')
            .and('contain', '85.3%')
            .and('contain', '73.0%')
            .and('contain', '57.8%')
            .and('contain', '75.9%')
            .and('contain', '75.4%')
            .and('contain', '83.4%')
            .and('contain', '28.2%')

    }

     // HPV
     toggleHPV() {
        cy.get('.radio-button-text')
            .contains('HPV')
            .click();
    }

    // Combination 1
    toggleCombination() {
        cy.get('.radio-button-text')
        .contains('Combination 1')
        .click();
    }

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