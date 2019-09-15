/// <reference types="Cypress" />

describe("Testing Mediciad.gov", () => {

    it("login into medicaid gov", () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.visit("/?ACA=JMwCeGV1O8");

        cy.visit('/state-health-system-performance');

        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard')
            .and('contain', 'State Health System Performance');


        cy.get('h1')
            .should('contain', 'State Health System Performance');



        cy.get('.explore_measures_container')
            .should('contain', 'Visit a Domain');


        // cy.get('.chosen_container').click().then(() => {

        //     cy.get('input[type=text]').type('Making Care Affordable {enter}')
        // })


        // cy.get('.chosen-single').click().then(() => {
        //     cy.get('.chosen-results')
        //         .contains('Promote Effective Prevention & Treatment of Chronic Diseases')
        //         .click();

        // })

        cy.get('tbody>tr').eq(0)
            .should('contain', 'Use of Multiple Concurrent Antipsychotics in Children & Adolescents')
            .and('contain', 'Promote Effective Communication & Coordination of Care');

        cy.get('tbody>tr').eq(0)
            .should('contain', 'States')
            .and('contain', 'Reporting')
            .and('contain', '39')
            .and('contain', '2.9%')
            .and('contain', 'Median')
            .and('contain', 'Rate');

    })

})