/// <reference types="Cypress" />

export class PrenatalPostpartum {

    // Measure title
    measureTitle() {
        cy.get('h1')
            .should('contain', 'Prenatal & Postpartum Care: Postpartum Care');
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
            .should('contain', 'Median - 61.3%');
    }

    // Rate List
    rateList() {
        cy.get('.chart-axisRight')
            .should('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '61.3%')
            .and('contain', 'NR')
            .and('contain', '66.4')
            .and('contain', '42.2%')
            .and('contain', '63.8%')
            .and('contain', '64.5%')
            .and('contain', 'NR')
            .and('contain', '52.4%')
            .and('contain', '36.4%')
            .and('contain', 'NR')
            .and('contain', '56.0%')
            .and('contain', 'NR')
            .and('contain', '61.1%')
            .and('contain', '56.4%')
            .and('contain', '64.0%')
            .and('contain', '67.7%')
            .and('contain', '73.8%')
            .and('contain', 'NR')
            .and('contain', '57.6%')
            .and('contain', '40.5%')
            .and('contain', '42.1%')
            .and('contain', '57.1%')
            .and('contain', 'NR')
            .and('contain', '68.7%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '65.4%')
            .and('contain', '62.7%')
            .and('contain', '57.2%')
            .and('contain', '60.6%')
            .and('contain', '71.1%')
            .and('contain', '64.4%')
            .and('contain', '21.2%')
            .and('contain', '49.9%')
            .and('contain', '67.7%')
            .and('contain', '76.8%')
            .and('contain', '57.8%')
            .and('contain', 'NR')
            .and('contain', '60.3%')
            .and('contain', '67.7%')
            .and('contain', '65.7%')
            .and('contain', '64.5%')
            .and('contain', 'NR')
            .and('contain', '58.8%')
            .and('contain', '67.3%')
            .and('contain', '65.4%')
            .and('contain', '28.3%');
    }

    // State Specific Comments
    stateSpecificWY() {
        cy.get('.bar-alt').eq(0).trigger('mouseover')
            .then(() => {

                cy.get('.tooltip-text')
                    .should('contain', "WY: Rate includes FFS population.")
            })
    }
}

export const prenatalPostpartum = new PrenatalPostpartum();