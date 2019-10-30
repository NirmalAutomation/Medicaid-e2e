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

    // Viz Title
    vizTitle() {
        cy.get('h2')
            .should('contain', 'Breast Cancer Screening');
    }

    // Median Rate
    medianRate() {
        cy.get('.median-text')
            .should('contain', 'Median - 54.6%');
    }

    // Rate List
    rateList() {
        cy.get('.chart-axisRight')
            .should('contain', 'NR')
            .and('contain', '42.1%')
            .and('contain', 'NR')
            .and('contain', '56.1%')
            .and('contain', '54.5%')
            .and('contain', 'NR')
            .and('contain', '63.1%')
            .and('contain', '61.7%')
            .and('contain', '52.4%')
            .and('contain', '58.2%')
            .and('contain', '38.0%')
            .and('contain', '59.5%')
            .and('contain', '59.1%')
            .and('contain', 'NR')
            .and('contain', '52.4%')
            .and('contain', 'NR')
            .and('contain', '47.0%')
            .and('contain', '52.9%')
            .and('contain', '55.2%')
            .and('contain', '69.9%')
            .and('contain', '66.1%')
            .and('contain', 'NR')
            .and('contain', '60.8%')
            .and('contain', '58.5%')
            .and('contain', '45.8%')
            .and('contain', '54.5%')
            .and('contain', 'NR')
            .and('contain', '29.5%')
            .and('contain', 'NR')
            .and('contain', '34.9%')
            .and('contain', '60.2%')
            .and('contain', '58.5%')
            .and('contain', '49.5%')
            .and('contain', '54.3%')
            .and('contain', '66.9%')
            .and('contain', '53.2%')
            .and('contain', '43.5%')
            .and('contain', 'NR')
            .and('contain', '58.4%')
            .and('contain', '63.5%')
            .and('contain', '56.7%')
            .and('contain', 'NR')
            .and('contain', '53.8%')
            .and('contain', '50.9%')
            .and('contain', '46.7%')
            .and('contain', '58.3%')
            .and('contain', '54.6%')
            .and('contain', '55.3%')
            .and('contain', '65.4%')
            .and('contain', '52.1%')
            .and('contain', '22.7%');
    }

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