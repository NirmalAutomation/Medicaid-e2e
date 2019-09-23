/// <reference types="Cypress" />

export class FederalAdministrative {

    // Measure title
    measureTitle() {
        cy.get('h1')
            .should('contain', 'Federal Administrative Accountability');
    }

    breadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard')
            .and('contain', 'Federal Administrative Accountability');
    }

    subCategoryList() {
        cy.get('tbody')
            .should('contain', 'State Plan Amendment and 1915 Waiver Processing')
            .and('contain', 'Section 1115 Demonstrations: Time from Submission to Approval')
            .and('contain', 'Managed Care Capitation Rate Review: Total Days to Approve Rates')
            .and('contain', 'Managed Care Capitation Rate Review: Days Under CMS Review')
            .and('contain', 'Managed Care Contract Review');

    }

    selectFirstCategory() {
        cy.get('tbody>tr').eq(0)
        .contains('State Plan Amendment and 1915 Waiver Processing')
        .click();
    }

    selectFirstCategory() {
        cy.get('tbody>tr').eq(1)
        .contains('Section 1115 Demonstrations: Time from Submission to Approval')
        .click();
    }

    selectFirstCategory() {
        cy.get('tbody>tr').eq(2)
        .contains('Managed Care Capitation Rate Review: Total Days to Approve Rates')
        .click();
    }

    selectFirstCategory() {
        cy.get('tbody>tr').eq(3)
        .contains('Managed Care Capitation Rate Review: Days Under CMS Review')
        .click();
    }

    selectFirstCategory() {
        cy.get('tbody>tr').eq(4)
        .contains('Managed Care Contract Review')
        .click();
    }

}

export const federalAdministrative = new FederalAdministrative();