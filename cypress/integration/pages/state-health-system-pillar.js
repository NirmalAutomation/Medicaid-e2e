/// <reference types="Cypress" />

export class SystemHealthSystemPillar {

    breadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard')
            .and('contain', 'State Health System Performance');
    }

    pillarTtile() {
        cy.get('h1')
            .should('contain', 'State Health System Performance');

    }

    // Visit a Domain
    visitADomainText() {
        cy.get('.explore_measures_container')
            .should('contain', 'Visit a Domain');
    }

    typeDomainName() {
        cy.get('.chosen_container').click().then(() => {

            cy.get('input[type=text]').type('Making Care Affordable {enter}')
        })
    }

    selectDomainName() {
        cy.get('.chosen-single').click().then(() => {
            cy.get('.chosen-results')
                .contains('Promote Effective Prevention & Treatment of Chronic Diseases')
                .click();

        })

    }

    // Table
    antipsychoticsChildrenAdolescents() {
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
    }

    followup6_20() {
        cy.get('tbody>tr').eq(1)
            .should('contain', 'Follow-Up After Hospitalization for Mental Illness: Ages 6-20')
            .and('contain', 'Promote Effective Communication & Coordination of Care');

        cy.get('tbody>tr').eq(1)
            .should('contain', 'States')
            .and('contain', 'Reporting')
            .and('contain', '44')
            .and('contain', '67.1%')
            .and('contain', 'Median')
            .and('contain', 'Rate');
    }

}