/// <reference types="Cypress" />

export class NationalContextB {

    visitThePillar() {
        cy.get('.visit-section')
            .should('contain', 'VISIT THE PILLAR:')
            .and('contain', 'National Context');
    }

    // 1
    firstSubTitle() {
        cy.get('h1')
            .should('contain', 'What are Annual Expenditures for Medicaid & CHIP?');

    }

    firstSubBreadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard')
            .and('contain', 'What are Annual Expenditures for Medicaid & CHIP?');
    }

    firstMeasureList() {
        cy.get('tbody')
            .should('contain', 'Annual Medicaid & CHIP Expenditures ')
            .and('contain', 'How Much Do States Spend Per Medicaid Enrollee?')
            .and('contain', 'Long-Term Services and Supports Expenditures on Home & Community-Based Services');
    }

    selectFirstMeasure() {
        cy.get('tbody>tr').eq(0)
        .contains('Annual Medicaid & CHIP Expenditures ')
        .click();
    }

    selectSecondMeasure() {
        cy.get('tbody>tr').eq(1)
        .contains('How Much Do States Spend Per Medicaid Enrollee?')
        .click();
    }

    selectThirdMeasure() {
        cy.get('tbody>tr').eq(2)
        .contains('Long-Term Services and Supports Expenditures on Home & Community-Based Services')
        .click();
    }

}

export const nationalContextB = new NationalContextB()