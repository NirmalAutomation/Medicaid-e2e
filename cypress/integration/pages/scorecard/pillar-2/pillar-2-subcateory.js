/// <reference types="Cypress" />

export class StateAdministrativeSub {

    visitThePillar() {
        cy.get('.visit-section')
            .should('contain', 'VISIT THE PILLAR:')
            .and('contain', 'State Administrative Accountability');
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
        .and('contain', '1915(c) Waiver Amendments')
        .and('contain', '1915(c) Waiver Renewals');
    }

    // 2
    secondSubTitle() {
        cy.get('h1')
            .should('contain', 'Annual 372(S) Reporting: Timeliness of Report Submissions');

    }

    secondSubBreadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard')
            .and('contain', 'Annual 372(S) Reporting: Timeliness of Report Submissions');
    }

    secondMeasureList() {
        cy.get('tbody')
        .should('contain', 'Annual 372(S) Reporting: Timeliness of Report Submissions  ');
    }

    // 3
    thirdSubTitle() {
        cy.get('h1')
            .should('contain', 'Medicaid MAGI and CHIP Application Processing Times');
    }

    thirdSubBreadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard')
            .and('contain', 'Medicaid MAGI and CHIP Application Processing Times');
    }

    thirdMeasureList() {
        cy.get('tbody')
        .should('contain', 'National Medicaid MAGI and CHIP Application Processing Times');
    }

    // 4
    fourthSubTitle() {
        cy.get('h1')
            .should('contain', 'Managed Care Capitation Rate Review: Timing of States’ Submissions');
    }

    fourthSubBreadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard')
            .and('contain', 'Managed Care Capitation Rate Review: Timing of States’ Submissions');
    }

    fourthMeasureList() {
        cy.get('tbody')
        .should('contain', 'Managed Care Capitation Rate Review: Timing of States’ Submissions');
    }

    // 5
    fifthSubTitle() {
        cy.get('h1')
            .should('contain', 'Managed Care Capitation Rate Review: Days Awaiting Information from States');
    }

    fifthSubBreadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard')
            .and('contain', 'Managed Care Capitation Rate Review: Days Awaiting Information from States');
    }

    fifthMeasureList() {
        cy.get('tbody')
        .should('contain', 'Managed Care Capitation Rate Review: Days Awaiting Information from States');
    }

     // 6
    sixthSubTitle() {
        cy.get('h1')
            .should('contain', 'T-MSIS Data Quality: Number of Open Top Priority Issues');
    }

    sixthSubBreadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard')
            .and('contain', 'T-MSIS Data Quality: Number of Open Top Priority Issues');
    }

    sixthMeasureList() {
        cy.get('tbody')
        .should('contain', 'T-MSIS Data Quality: Number of Open Top Priority Issues');
    }

    // 7
    seventhSubTitle() {
        cy.get('h1')
            .should('contain', 'Initiation of Collaborative Investigations Between States and CMS’s Unified Program Integrity Contractors');
    }

    seventhSubBreadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard')
            .and('contain', 'Initiation of Collaborative Investigations Between States and CMS’s Unified Program Integrity Contractors');
    }

    seventhMeasureList() {
        cy.get('tbody')
        .should('contain', 'Initiation of Collaborative Investigations Between States and CMS’s Unified Program Integrity Contractors');
    }

    // 8
    eighthSubTitle() {
        cy.get('h1')
            .should('contain', 'Healthcare Fraud Prevention Partnership Participation');
    }

    eighthSubBreadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard')
            .and('contain', 'Healthcare Fraud Prevention Partnership Participation');
    }

    eighthMeasureList() {
        cy.get('tbody')
        .should('contain', 'Healthcare Fraud Prevention Partnership Participation');
    }

    // 9
    ninthSubTitle() {
        cy.get('h1')
            .should('contain', 'Payment Error Rate  Measurement (PERM)');
    }

    ninthSubBreadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard')
            .and('contain', 'Payment Error Rate  Measurement (PERM)');
    }

    ninthMeasureList() {
        cy.get('tbody')
        .should('contain', 'Payment Error Rate Measurement (PERM)');
    }
    
}

export const stateAdministrativeSub = new StateAdministrativeSub()