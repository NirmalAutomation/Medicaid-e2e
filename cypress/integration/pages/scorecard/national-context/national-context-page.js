/// <reference types="Cypress" />

export class NationalContext {

    // Pillar title
    pillarTitle() {
        cy.get('h1')
            .should('contain', 'National Context');
    }

    breadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard')
            .and('contain', 'National Context');
    }

    subCategoryList() {
        cy.get('tbody')
            .should('contain', 'Who Enrolls in Medicaid & CHIP?')
            .and('contain', 'How do States Deliver Care in Medicaid?')
            .and('contain', 'What Data are CMS & States Developing to Support Program Improvement?')
            .and('contain', 'What are Annual Expenditures for Medicaid & CHIP?');
    }

    selectFirstCategory() {
        cy.get('tbody>tr').eq(0)
        .contains('Who Enrolls in Medicaid & CHIP?')
        .click();
    }

    selectSecondCategory() {
        cy.get('tbody>tr').eq(1)
        .contains('How do States Deliver Care in Medicaid?')
        .click();
    }

    selectThirdCategory() {
        cy.get('tbody>tr').eq(2)
        .contains('What Data are CMS & States Developing to Support Program Improvement?')
        .click();
    }

    selectFourthCategory() {
        cy.get('tbody>tr').eq(3)
        .contains('What are Annual Expenditures for Medicaid & CHIP?')
        .click();
    }

}

export const nationalContext = new NationalContext()