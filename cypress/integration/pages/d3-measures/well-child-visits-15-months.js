/// <reference types="Cypress" />

export class WellChild15 {

    // Measure title
    measureTitle() {
        cy.get('h1')
            .should('contain', 'Well-Child Visits in the First 15 Months of Life');
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
            .should('contain', 'Median - 63.2%');
    }

    // Rate List
    // rateList() {
    //     cy.get('.chart-axisRight')
    //         .should('contain', '7.3%')
    //         .and('contain', '8.9%')
    //         .and('contain', 'NR')
    //         .and('contain', 'NR')
    //         .and('contain', 'NR')
    //         .and('contain', 'NR')
    //         .and('contain', 'NR')
    //         .and('contain', 'NR')
    //         .and('contain', 'NR')
    //         .and('contain', '10.0%')
    //         .and('contain', 'NR')
    //         .and('contain', 'NR')
    //         .and('contain', '6.8%')
    //         .and('contain', 'NR')
    //         .and('contain', '9.8%')
    //         .and('contain', 'NR')
    //         .and('contain', 'NR')
    //         .and('contain', '10.9%')
    //         .and('contain', '12.1%')
    //         .and('contain', '8.8%')
    //         .and('contain', 'NR')
    //         .and('contain', '8.7%')
    //         .and('contain', '8.8%')
    //         .and('contain', '7.8%')
    //         .and('contain', 'NR')
    //         .and('contain', 'NR')
    //         .and('contain', 'NR')
    //         .and('contain', '10.3%')
    //         .and('contain', 'NR')
    //         .and('contain', '9.1%')
    //         .and('contain', '8.3%')
    //         .and('contain', 'NR')
    //         .and('contain', 'NR')
    //         .and('contain', '10.6%')
    //         .and('contain', '7.6%')
    //         .and('contain', '10.5%')
    //         .and('contain', '9.4%')
    //         .and('contain', 'NR')
    //         .and('contain', '9.9%')
    //         .and('contain', 'NR')
    //         .and('contain', '11.5%')
    //         .and('contain', 'NR')
    //         .and('contain', '10.9%')
    //         .and('contain', '9.1%')
    //         .and('contain', 'NR')
    //         .and('contain', 'NR')
    //         .and('contain', '8.3%')
    //         .and('contain', '7.3%')
    //         .and('contain', 'NR')
    //         .and('contain', '10.8%')
    //         .and('contain', 'NR');
    // }

    // State Specific Comments
    stateSpecificWV() {
        cy.get('.bar').eq(0).trigger('mouseover')
            .then(() => {

                cy.get('.tooltip-text')
                    .should('contain', "WV: Medicaid rate includes FFS and managed care populations (4 MCOs). State is unable to implement the enrollment requirement based on the anchor date. Rate includes paid claims only. CHIP rate includes FFS population. Population: CHIP only State Rate: #");
            })
    }
}

export const wellChild15 = new WellChild15();