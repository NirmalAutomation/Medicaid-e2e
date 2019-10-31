/// <reference types="Cypress" />

export class WellChildThird {

    // Measure title
    measureTitle() {
        cy.get('h1')
            .should('contain', 'Well-Child Visits in the Third, Fourth, Fifth, and Sixth Years of Life');
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
            .should('contain', 'Well-Child Visits in the Third, Fourth, Fifth, and Sixth Years of Life');
    }

    // Median Rate
    medianRate() {
        cy.get('.median-text')
            .should('contain', 'Median - 69.3%');
    }

    // Rate List
    rateList() {
        cy.get('.chart-axisRight')
            .should('contain', '45.2%')
            .and('contain', '63.8%')
            .and('contain', '57.7%')
            .and('contain', '60.7%')
            .and('contain', '75.4%')
            .and('contain', 'NR')
            .and('contain', '88.9%')
            .and('contain', '72.5%')
            .and('contain', '77.4%')
            .and('contain', '77.6%')
            .and('contain', '64.3%')
            .and('contain', '74.9%')
            .and('contain', '65.0%')
            .and('contain', 'NR')
            .and('contain', '71.1%')
            .and('contain', '73.9%')
            .and('contain', '71.0%')
            .and('contain', '66.7%')
            .and('contain', '68.1%')
            .and('contain', '83.3%')
            .and('contain', '79.0%')
            .and('contain', '68.9%')
            .and('contain', '75.2%')
            .and('contain', '59.2%')
            .and('contain', '65.7%')
            .and('contain', '58.1%')
            .and('contain', '64.5%')
            .and('contain', '69.7%')
            .and('contain', 'NR')
            .and('contain', '59.7%')
            .and('contain', '76.4%')
            .and('contain', '79.6%')
            .and('contain', '61.0%')
            .and('contain', '71.6%')
            .and('contain', '85.1%')
            .and('contain', '69.8%')
            .and('contain', '57.1%')
            .and('contain', '65.8%')
            .and('contain', '78.4%')
            .and('contain', '80.1%')
            .and('contain', '58.2%')
            .and('contain', '45.7%')
            .and('contain', '72.6%')
            .and('contain', '79.4%')
            .and('contain', '63.1%')
            .and('contain', '78.8%')
            .and('contain', '76.7%')
            .and('contain', '66.7%')
            .and('contain', '66.0%')
            .and('contain', '47.6%')
            .and('contain', '53.6%');
    }

    // State Specific Comments
    stateSpecificWV() {
        cy.get('.bar').eq(0).trigger('mouseover')
            .then(() => {

                cy.get('.tooltip-text')
                    .should('contain', "WV: Medicaid rate includes FFS and managed care populations (4 MCOs). Rate includes paid claims only. CHIP rate includes FFS population. Population: CHIP only State Rate: 87.0");
            })
    }
}

export const wellChildThird = new WellChildThird();