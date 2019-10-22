/// <reference types="Cypress" />

export class FederalAdministrativeSub {

    visitThePillar() {
        cy.get('.visit-section')
            .should('contain', 'VISIT THE PILLAR:')
            .and('contain', 'Federal Administrative Accountability');
    }

    // 1
    firstSubTitle() {
        cy.get('h1')
            .should('contain', 'State Plan Amendment and 1915 Waiver Processing');

    }

    firstSubBreadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard')
            .and('contain', 'State Plan Amendment and 1915 Waiver Processing');
    }

    firstMeasureList() {
        cy.get('tbody')
        .should('contain', 'Medicaid State Plan Amendments')
        .and('contain', '1915(b) Waiver Requests, Amendments, and Renewals')
        .and('contain', '1915(c) Waiver Amendments ')
        .and('contain', '1915(c) Waiver Renewals');
    }

    // 2 
    secondSubTitle() {
        cy.get('h1')
            .should('contain', 'Section 1115 Demonstrations: Time from Submission to Approval');

    }

    secondSubBreadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard')
            .and('contain', 'Section 1115 Demonstrations: Time from Submission to Approval');
    }

    secondMeasureList() {
        cy.get('tbody')
        .should('contain', 'Status of Applications')
        .and('contain', 'Approval within Six Months')
        .and('contain', 'Time from Submission to Approval ')
        .and('contain', 'Time Under Review ');

    }

    // 3
    thirdSubTitle() {
        cy.get('h1')
            .should('contain', 'Managed Care Capitation  Rate Review: Total Days to Approve Rates');
    }

    thirdSubBreadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard')
            .and('contain', 'Managed Care Capitation  Rate Review: Total Days to Approve Rates');
    }

    thirdMeasureList() {
        cy.get('tbody')
        .should('contain', 'Managed Care Capitation Rate Review: Total Days to Approve Rates');
    }

    // 4
    fourthSubTitle() {
        cy.get('h1')
            .should('contain', 'Managed Care Capitation Rate Review: Days Under CMS Review');
    }

    fourthSubBreadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard')
            .and('contain', 'Managed Care Capitation Rate Review: Days Under CMS Review');
    }

    fourthMeasureList() {
        cy.get('tbody')
        .should('contain', 'Managed Care Capitation Rate Review: Days Under CMS Review');
    }

    // 5
    fifthSubTitle() {
        cy.get('h1')
            .should('contain', 'Managed Care  Contract Review');
    }

    fifthSubBreadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard')
            .and('contain', 'Managed Care  Contract Review');
    }

    fifthMeasureList() {
        cy.get('tbody')
        .should('contain', 'Managed Care Contract Review');
    }
}

export const federalAdministrativeSub = new FederalAdministrativeSub();