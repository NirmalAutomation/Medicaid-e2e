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

    // Viz Title
    vizTitle() {
        cy.get('h2')
            .should('contain', 'Well-Child Visits in the First 15 Months of Life');
    }

    // Median Rate
    medianRate() {
        cy.get('.median-text')
            .should('contain', 'Median - 63.2%');
    }

    // Rate List
    rateList() {
        cy.get('.chart-axisRight')
            .should('contain', '69.1%')
            .and('contain', '57.8%')
            .and('contain', '46.3%')
            .and('contain', '59.5%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '85.9%')
            .and('contain', '56.6%')
            .and('contain', '68.4%')
            .and('contain', '69.5%')
            .and('contain', '54.0%')
            .and('contain', '71.5%')
            .and('contain', '60.0%')
            .and('contain', 'NR')
            .and('contain', '58.6%')
            .and('contain', '72.7%')
            .and('contain', '60.7%')
            .and('contain', '59.9%')
            .and('contain', '57.3%')
            .and('contain', '81.9%')
            .and('contain', '72.2%')
            .and('contain', '71.8%')
            .and('contain', '71.9%')
            .and('contain', '54.1%')
            .and('contain', '61.8%')
            .and('contain', '43.0%')
            .and('contain', '63.2%')
            .and('contain', '63.9%')
            .and('contain', 'NR')
            .and('contain', '45.9%')
            .and('contain', '72.1%')
            .and('contain', '63.6%')
            .and('contain', '63.5%')
            .and('contain', '64.5%')
            .and('contain', '67.6%')
            .and('contain', '58.1%')
            .and('contain', '65.6%')
            .and('contain', '60.2%')
            .and('contain', '70.1%')
            .and('contain', '77.8%')
            .and('contain', '54.8%')
            .and('contain', '45.1%')
            .and('contain', '66.9%')
            .and('contain', '64.1%')
            .and('contain', '61.7%')
            .and('contain', '63.1%')
            .and('contain', '72.8%')
            .and('contain', '67.7%')
            .and('contain', '57.0%')
            .and('contain', '49.6%')
            .and('contain', '37.4%');
    }

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