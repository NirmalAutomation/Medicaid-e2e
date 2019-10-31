/// <reference types="Cypress" />

export class LiveBirths {

    // Measure title
    measureTitle() {
        cy.get('h1')
            .should('contain', 'Live Births Weighing Less Than 2,500 Grams');
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
            .should('contain', 'Live Births Weighing Less Than 2,500 Grams');
    }

    // Median Rate
    medianRate() {
        cy.get('.median-text')
            .should('contain', 'Median - 9.1%');
    }

    // Rate List
    rateList() {
        cy.get('.chart-axisRight')
            .should('contain', '7.3%')
            .and('contain', '8.9%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '10.0%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '6.8%')
            .and('contain', 'NR')
            .and('contain', '9.8%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '10.9%')
            .and('contain', '12.1%')
            .and('contain', '8.8%')
            .and('contain', 'NR')
            .and('contain', '8.7%')
            .and('contain', '8.8%')
            .and('contain', '7.8%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '10.3%')
            .and('contain', 'NR')
            .and('contain', '9.1%')
            .and('contain', '8.3%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '10.6%')
            .and('contain', '7.6%')
            .and('contain', '10.5%')
            .and('contain', '9.4%')
            .and('contain', 'NR')
            .and('contain', '9.9%')
            .and('contain', 'NR')
            .and('contain', '11.5%')
            .and('contain', 'NR')
            .and('contain', '10.9%')
            .and('contain', '9.1%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '8.3%')
            .and('contain', '7.3%')
            .and('contain', 'NR')
            .and('contain', '10.8%')
            .and('contain', 'NR');
    }

    // State Specific Comments
    stateSpecificWV() {
        cy.get('.bar').eq(0).trigger('mouseover')
            .then(() => {

                cy.get('.tooltip-text')
                    .should('contain', "WV: Rate includes FFS and managed care populations (4 MCOs).")
            })
    }
}

export const liveBirths = new LiveBirths();