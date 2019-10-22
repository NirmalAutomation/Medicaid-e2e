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
            .should('contain', 'Median - 48.0%');
    }

    // Rate List
    rateList() {
        cy.get('.chart-axisRight')
            .should('contain', '45.7')
            .and('contain', '47.6%')
            .and('contain', '18.3')
            .and('contain', '47.9%')
            .and('contain', '45.9%')
            .and('contain', '52.2%')
            .and('contain', '62.3%')
            .and('contain', '55.8%')
            .and('contain', '47.7%')
            .and('contain', '38.6%')
            .and('contain', '50.8%')
            .and('contain', '45.4%')
            .and('contain', '52.5%')
            .and('contain', '48.9%')
            .and('contain', '44.6%')
            .and('contain', '44.4%')
            .and('contain', '47.5%')
            .and('contain', '47.8%')
            .and('contain', '50.0%')
            .and('contain', '54.1%')
            .and('contain', '54.9%')
            .and('contain', '35.0%')
            .and('contain', '40.5%')
            .and('contain', '38.4%')
            .and('contain', '32.2%')
            .and('contain', '51.5%')
            .and('contain', '50.2%')
            .and('contain', '51.4%')
            .and('contain', '18.4%')
            .and('contain', '53.1%')
            .and('contain', '55.0%')
            .and('contain', '52.2%')
            .and('contain', '53.9%')
            .and('contain', '38.4%')
            .and('contain', '40.2%')
            .and('contain', '36.5%')
            .and('contain', '48.9%')
            .and('contain', '42.9%')
            .and('contain', '47.3%')
            .and('contain', '47.4%')
            .and('contain', '50.3%')
            .and('contain', '48.4%')
            .and('contain', '46.0%')
            .and('contain', '67.6%')
            .and('contain', '53.4%')
            .and('contain', '52.8%')
            .and('contain', '56.1%')
            .and('contain', '56.3%')
            .and('contain', '40.5%')
            .and('contain', '48.0%')
            .and('contain', '49.3%');
    }

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