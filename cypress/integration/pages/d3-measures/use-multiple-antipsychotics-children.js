/// <reference types="Cypress" />

export class AntipsychoticsChildren {

    // Measure title
    measureTitle() {
        cy.get('h1')
            .should('contain', 'Use of Multiple Concurrent Antipsychotics in Children & Adolescents');
    }

    // Median Rate
    medianRate() {
        cy.get('.median-text')
            .should('contain', 'Median - 2.9%');
    }

    // Rate List
    rateList() {
        cy.get('.chart-axisRight')
            .should('contain', 'NR')
            .and('contain', '4.0%')
            .and('contain', '1.0%')
            .and('contain', '1.1%')
            .and('contain', '3.3%')
            .and('contain', 'NR')
            .and('contain', '2.5%')
            .and('contain', '1.5%')
            .and('contain', '2.8%')
            .and('contain', '1.9%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '2.4%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '0.8%')
            .and('contain', '4.2%')
            .and('contain', '2.2%')
            .and('contain', '1.9%')
            .and('contain', '2.9%')
            .and('contain', 'NR')
            .and('contain', '1.4%')
            .and('contain', '4.6%')
            .and('contain', 'NR')
            .and('contain', '3.6%')
            .and('contain', '0.4%')
            .and('contain', 'NR')
            .and('contain', '3.1%')
            .and('contain', 'NR')
            .and('contain', '4.0%')
            .and('contain', '4.1%')
            .and('contain', '3.1%')
            .and('contain', '3.2%')
            .and('contain', '3.6%')
            .and('contain', '3.2%')
            .and('contain', '3.5%')
            .and('contain', '3.6%')
            .and('contain', 'NR')
            .and('contain', '1.5%')
            .and('contain', '2.0%')
            .and('contain', '0.7%')
            .and('contain', '4.6%')
            .and('contain', '2.3%')
            .and('contain', '2.0%')
            .and('contain', '4.7%')
            .and('contain', '2.9%')
            .and('contain', '3.7%')
            .and('contain', '2.7%')
            .and('contain', 'NR')
            .and('contain', '0.3%')
            .and('contain', '4.2%');
    }

    // State Specific Comments
    stateSpecificWY() {
        cy.get('.bar-alt').eq(0).trigger('mouseover')
            .then(() => {

                cy.get('.tooltip-text')
                    .should('contain', "WY: Rate includes FFS population.");
            })
    }

    stateSpecificWA() {
        cy.get('.bar').eq(1).trigger('mouseover')
            .then(() => {

                cy.get('.tooltip-text')
                    .should('contain', "WA: Rate includes managed care population (5 MCOs), representing 97 percent of the population. Rate excludes FFS and PCCM populations, representing 3 percent of the population. Rate also excludes managed care populations who met the continuous eligibility requirement for Medicaid or CHIP but who were not enrolled in a single plan during the continuous enrollment period.  Rate was audited by the state's EQRO.");
            })
    }

    stateSpecificAL() {
        cy.get('.bar').eq(24).trigger('mouseover')
            .then(() => {

                cy.get('.tooltip-text')
                    .should('contain', "AL: Medicaid rate includes FFS and PCCM populations. CHIP rate includes separate CHIP population. Rate excludes children enrolled in Medicaid-expansion CHIP; these children are included in the state's Medicaid rate. Population: CHIP only State Rate: 1.2");
            })
    }

    stateSpecificCT() {
        cy.get('.bar-alt').eq(22).trigger('mouseover')
            .then(() => {

                cy.get('.tooltip-text')
                    .should('contain', "CT: Rate includes FFS population.");
            })
    }
}

export const antipsychoticsChildren = new AntipsychoticsChildren();