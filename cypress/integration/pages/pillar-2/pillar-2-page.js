/// <reference types="Cypress" />

export class StateAdministrative {

    // Pillar title
    pillarTitle() {
        cy.get('h1')
            .should('contain', 'State Administrative Accountability');
    }

    breadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard')
            .and('contain', 'State Administrative Accountability');
    }

    subCategoryList() {
        cy.get('tbody')
            .should('contain', 'State Plan Amendment and 1915 Waiver Processing')
            .and('contain', 'Annual 372(S) Reporting: Timeliness of Report Submissions')
            .and('contain', 'Medicaid MAGI and CHIP Application Processing Times')
            .and('contain', 'Managed Care Capitation Rate Review: Timing of States’ Submissions')
            .and('contain', 'Managed Care Capitation Rate Review: Days Awaiting Information from States')
            .and('contain', 'T-MSIS Data Quality: Number of Open Top Priority Issues')
            .and('contain', 'Initiation of Collaborative Investigations Between States and CMS’s Unified Program Integrity Contractors')
            .and('contain', 'Healthcare Fraud Prevention Partnership Participation')
            .and('contain', 'Payment Error Rate  Measurement (PERM)');
    }

    selectFirstCategory() {
        cy.get('tbody>tr').eq(0)
        .contains('State Plan Amendment and 1915 Waiver Processing')
        .click();
    }

    selectSecondCategory() {
        cy.get('tbody>tr').eq(1)
        .contains('Annual 372(S) Reporting: Timeliness of Report Submissions')
        .click();
    }

    selectThirdCategory() {
        cy.get('tbody>tr').eq(2)
        .contains('Medicaid MAGI and CHIP Application Processing Times')
        .click();
    }

    selectFourthCategory() {
        cy.get('tbody>tr').eq(3)
        .contains('Managed Care Capitation Rate Review: Timing of States’ Submissions')
        .click();
    }

    selectFifthCategory() {
        cy.get('tbody>tr').eq(4)
        .contains('Managed Care Capitation Rate Review: Days Awaiting Information from States')
        .click();
    }

    selectSixthCategory() {
        cy.get('tbody>tr').eq(5)
        .contains('T-MSIS Data Quality: Number of Open Top Priority Issues')
        .click();
    }

    selectSeventhCategory() {
        cy.get('tbody>tr').eq(6)
        .contains('Initiation of Collaborative Investigations Between States and CMS’s Unified Program Integrity Contractors')
        .click();
    }

    selectEighthCategory() {
        cy.get('tbody>tr').eq(7)
        .contains('Healthcare Fraud Prevention Partnership Participation')
        .click();
    }

    selectNinthCategory() {
        cy.get('tbody>tr').eq(8)
        .contains('Payment Error Rate  Measurement (PERM)')
        .click();
    }

}

export const stateAdministrative = new StateAdministrative()