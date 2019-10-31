/// <reference types="Cypress" />

export class NonVizMeasures {

    // Use of Opioids at High Dosage
    // Measure title
    measureTitleHighDosage() {
        cy.get('h1')
            .should('contain', 'Use of Opioids at High Dosage in Persons Without Cancer');
    }

    // VISIT THE DOMAIN
    visitTheDomainHighDosage() {
        cy.get('.domainNav')
            .should('contain', 'VISIT THE DOMAIN: ')
            .and('contain', 'Promote Effective Prevention & Treatment of Chronic Diseases');
    }

    // Adult Emergency
    // Measure title
    measureTitleAdult() {
        cy.get('h1')
            .should('contain', 'Adult Emergency Department Visits');
    }

    // VISIT THE DOMAIN
    visitTheDomainAdult() {
        cy.get('.domainNav')
            .should('contain', 'VISIT THE DOMAIN: ')
            .and('contain', 'Make Care Affordable');
    }

    // Long-Term Services and Supports
    // Measure Title
    measureTitleService() {
        cy.get('h1')
            .should('contain', 'Long-Term Services and Supports');
    }

    // VISIT THE DOMAIN
    visitTheDomainService() {
        cy.get('.domainNav')
            .should('contain', 'VISIT THE DOMAIN: ')
            .and('contain', 'Work with Communities to Promote Best Practices of Healthy Living');
    }
}

export const nonVizMeasures = new NonVizMeasures();