/// <reference types="Cypress" />

export class InitiationEngagement {

    // Measure title
    measureTitle() {
        cy.get('h1')
            .should('contain', 'Initiation & Engagement of Alcohol & Other Drug Dependence Treatment');
    }

    // VISIT THE DOMAIN
    visitTheDomain() {
        cy.get('.domainNav')
            .should('contain', 'VISIT THE DOMAIN: ')
            .and('contain', 'Promote Effective Prevention & Treatment of Chronic Diseases');
    }

    // Median Rate
    totalInitiationMedianRate() {
        cy.get('.median-text')
            .should('contain', 'Median - 40.0%');
    }

    // Total Rate List
    totalInitiationrateList() {
        cy.get('.chart-axisRight')
            .should('contain', 'NR')
            .and('contain', '38.8%')
            .and('contain', 'NR')
            .and('contain', '59.1%')
            .and('contain', '31.2%')
            .and('contain', 'NR')
            .and('contain', '48.0%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '10.0%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '6.8%')
            .and('contain', 'NR')
            .and('contain', '9.8%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '10.9%')
            .and('contain', '12.1%')
            .and('contain', '8.8%')
            .and('contain', 'NR')
            .and('contain', '8.7%')
            .and('contain', '8.8%')
            .and('contain', '7.8%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '10.3%')
            .and('contain', 'NR')
            .and('contain', '9.1%')
            .and('contain', '8.3%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '10.6%')
            .and('contain', '7.6%')
            .and('contain', '10.5%')
            .and('contain', '9.4%')
            .and('contain', 'NR')
            .and('contain', '9.9%')
            .and('contain', 'NR')
            .and('contain', '11.5%')
            .and('contain', 'NR')
            .and('contain', '10.9%')
            .and('contain', '9.1%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '8.3%')
            .and('contain', '7.3%')
            .and('contain', 'NR')
            .and('contain', '10.8%')
            .and('contain', 'NR');
    }

    
}

export const initiationEngagement = new InitiationEngagement();