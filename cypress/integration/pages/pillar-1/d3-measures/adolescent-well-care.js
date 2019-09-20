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