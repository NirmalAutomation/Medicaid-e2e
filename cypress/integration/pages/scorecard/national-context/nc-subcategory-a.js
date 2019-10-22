/// <reference types="Cypress" />

export class NationalContextA {

    visitThePillar() {
        cy.get('.visit-section')
            .should('contain', 'VISIT THE PILLAR:')
            .and('contain', 'National Context');
    }

    // 1
    firstSubTitle() {
        cy.get('h1')
            .should('contain', 'Who Enrolls in Medicaid & CHIP?');

    }

    firstSubBreadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard')
            .and('contain', 'Who Enrolls in Medicaid & CHIP?');
    }

    firstMeasureList() {
        cy.get('tbody')
            .should('contain', 'Total Medicaid & CHIP Enrollment')
            .and('contain', 'Annual Enrollment (in Millions) by Payer')
            .and('contain', 'Share of Medicaid & CHIP Population by Age')
            .and('contain', 'Share of Medicaid & CHIP Population by Sex ')
            .and('contain', 'Medicaid & CHIP Child Enrollment ')
            .and('contain', 'Medicaid Expansion Adult Enrollment')
            .and('contain', 'Dual-Eligible Enrollment ');
    }

    // 2
    secondSubTitle() {
        cy.get('h1')
            .should('contain', 'How do States Deliver Care in Medicaid?');

    }

    secondSubBreadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard')
            .and('contain', 'How do States Deliver Care in Medicaid?');
    }

    secondMeasureList() {
        cy.get('tbody')
            .should('contain', 'Managed Care Delivery Systems')
            .and('contain', '1915(c) Waivers for Home & Community-Based Services')
            .and('contain', 'Section 1115 Substance Use Disorder Demonstrations');
    }

    // 3
    thirdSubTitle() {
        cy.get('h1')
            .should('contain', 'What Data are CMS & States Developing to Support Program Improvement?');
    }

    thirdSubBreadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard')
            .and('contain', 'What Data are CMS & States Developing to Support Program Improvement?');
    }

    thirdMeasureList() {
        cy.get('tbody')
            .should('contain', 'Adult & Child Core Sets')
            .and('contain', 'Transformed Medicaid Statistical Information System (T-MSIS): Production and Currency Status ')
            .and('contain', 'States Receiving Medicare Data to Coordinate Care for Dually Eligible Individuals ');
    }

}

export const nationalContextA = new NationalContextA()