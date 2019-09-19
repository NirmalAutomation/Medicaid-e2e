/// <reference types="Cypress" />

export class ScorecardLanding {

    breadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard');
    }

    scorecardLogo() {
        cy.get('.landing-page-logo')
            .should('have.attr', 'src', '/themes/custom/medicaid/images/medicaid_scorecard.png');
    }

    // National Context
    ncIcon() {
        cy.get('.pillar_icon1')
            .click();
    }

    ncLinkText() {
        cy.get('.pillar_landing')
            .eq(0)
            .contains('National Context').click();
    }

    // State Health System Performance
    shspIcon() {
        cy.get('.pillar_icon2')
            .click();
    }

    shspLinkText() {
        cy.get('.pillar_landing')
            .eq(1)
            .contains('System Health System Performance').click();

    }

    // State Administrative Accountability
    saaIcon() {
        cy.get('.pillar_icon3')
            .click();
    }

    saaLinkText() {
        cy.get('.pillar_landing')
            .eq(2)
            .contains('State Administrative Accountability').click();
    }

    // Federal Administrative Accountability
    faaIcon() {
        cy.get('.pillar_icon4')
            .click();
    }

    faaLinkText() {
        cy.get('.pillar_landing')
            .eq(3)
            .contains('Federal Administrative Accountability').click();
    }

    // Find a Measure
    findAMeasureText() {
        cy.get('.explore_measures_container')
            .should('contain', 'Find a Measure');
    }

    typeMeasureName() {
        cy.get('.chosen_container').click().then(() => {

            cy.get('input[type=text]').type('Breast Cancer Screening {enter}')
        })
    }

    selectMeasureName() {
        cy.get('.chosen-single').click().then(() => {
            cy.get('.chosen-results')
                .contains('Adolescent Well-Care Visits')
                .click();

        })
    }

    textAssertionScorecard() {
        cy.get('.scorecard_desc')
            .should('contain', 'What is Scorecard?');
    }

}