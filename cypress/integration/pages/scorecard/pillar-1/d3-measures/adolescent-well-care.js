/// <reference types="Cypress" />

export class AdolescentWell {

    // Measure title
    measureTitle() {
        cy.get('h1')
            .should('contain', 'Adolescent Well-Care Visits');
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
            .should('contain', 'Median - 48.9%');
    }

    // Rate List
    rateList() {
        cy.get('.chart-axisRight')
            .should('contain', '27.2%')
            .and('contain', '46.7%')
            .and('contain', '38.1%')
            .and('contain', '39.2%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '70.9%')
            .and('contain', '55.9%')
            .and('contain', '57.2%')
            .and('contain', '57.0%')
            .and('contain', '44.0%')
            .and('contain', '47.5%')
            .and('contain', '38.0%')
            .and('contain', 'NR')
            .and('contain', '48.7%')
            .and('contain', '64.2%')
            .and('contain', '53.3%')
            .and('contain', '50.0%')
            .and('contain', '54.2%')
            .and('contain', '67.8%')
            .and('contain', '63.5%')
            .and('contain', '48.7%')
            .and('contain', '56.8%')
            .and('contain', '36.0%')
            .and('contain', '44.2%')
            .and('contain', '40.0%')
            .and('contain', '52.9%')
            .and('contain', '39.5%')
            .and('contain', 'NR')
            .and('contain', '43.0%')
            .and('contain', '61.2%')
            .and('contain', '60.2%')
            .and('contain', '39.4%')
            .and('contain', '48.9%')
            .and('contain', '68.3%')
            .and('contain', '50.4%')
            .and('contain', '25.2%')
            .and('contain', '49.4%')
            .and('contain', '63.0%')
            .and('contain', '64.5%')
            .and('contain', '39.4%')
            .and('contain', '32.3%')
            .and('contain', '53.1%')
            .and('contain', '66.7%')
            .and('contain', '44.0%')
            .and('contain', '55.6%')
            .and('contain', '51.6%')
            .and('contain', '48.0%')
            .and('contain', '43.3%')
            .and('contain', '23.3%')
            .and('contain', '40.1%')

    }

    // State Specific Comments
    stateSpecificWV() {
        cy.get('.bar').eq(0).trigger('mouseover')
            .then(() => {

                cy.get('.tooltip-text')
                    .should('contain', "WV: Medicaid rate includes FFS and managed care populations (4 MCOs). Rate includes paid claims only. CHIP rate includes FFS population. Population: CHIP only State Rate: 47.8");
            })
    }
}

export const adolescentWell = new AdolescentWell();