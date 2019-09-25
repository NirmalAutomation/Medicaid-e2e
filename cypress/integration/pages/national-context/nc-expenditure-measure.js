/// <reference types="Cypress" />

export class NCExpenditureMeasure {

    visitThePillar() {
        cy.get('.visit-section')
            .should('contain', 'VISIT THE PILLAR:')
            .and('contain', 'National Context');
    }

    visitTheDomain() {
        cy.get('.domainNav')
            .should('contain', 'VISIT THE DOMAIN: ')
            .and('contain', 'What are Annual Expenditures for Medicaid & CHIP?');
    }

    learnMore() {

        cy.get('.expand_measure_description')
            .should('contain', 'LEARN MORE ');
    }

    // 1
    firstMeasure() {
        cy.get('h1')
            .should('contain', 'Annual Medicaid & CHIP Expenditures ');

    }

    firstSubBreadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard')
            .and('contain', 'Annual Medicaid & CHIP Expenditures ');
    }

    firstMeasureList() {
        cy.get('tbody')
            .should('contain', 'Annual Expenditures (Billions of $) by Payer')
            .and('contain', 'Annual Medicaid & CHIP Expenditures (Billions of $) by Service Category')
            .and('contain', 'Annual Medicaid & CHIP Expenditures by State or Territory');
    }

    // 2
    secondMeasure() {
        cy.get('h1')
            .should('contain', 'How Much Do States Spend Per Medicaid Enrollee?');
    }

    secondSubBreadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard')
            .and('contain', 'How Much Do States Spend Per Medicaid Enrollee?');
    }

    secondMeasureList() {
        cy.get('tbody')
            .should('contain', 'Table 1. Per Capita Expenditure Estimates')
            .and('contain', 'Table 2. Assessing state T-MSIS data usability');
    }

    // 3
    thirdMeasure() {
        cy.get('h1')
            .should('contain', 'Long-Term Services and Supports Expenditures on Home & Community-Based Services');

    }

    thirdSubBreadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard')
            .and('contain', 'Long-Term Services and Supports Expenditures on Home & Community-Based Services');
    }

}

export const ncExpenditureMeasure = new NCExpenditureMeasure()