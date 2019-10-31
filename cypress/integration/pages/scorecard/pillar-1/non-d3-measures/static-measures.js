/// <reference types="Cypress" />

export class StaticMeasures {

    // PQI 01: Diabetes Short-Term
    // Measure title
    measureTitlePQI() {
        cy.get('h1')
            .should('contain', 'PQI 01: Diabetes Short-Term Complications Admission Rate');
    }

    // VISIT THE DOMAIN
    visitTheDomainPQI() {
        cy.get('.domainNav')
            .should('contain', 'VISIT THE DOMAIN: ')
            .and('contain', 'Promote Effective Communication & Coordination of Care');
    }

    // Viz Title
    vizTitlePQI() {
        cy.get('h2')
            .should('contain', 'PQI 01: Diabetes Short-Term Complications Admission Rate');
    }

    // Static Viz
    vizLegendPQI() {
        cy.xpath('//*[@id="block-medicaid-content"]/div/article/div[4]/div[5]/p[1]/img')
            .should('have.attr', 'src', '/sites/default/files/inline-images/diabetes-short-term-legend.png');
    }

    vizChartPQI() {
        cy.xpath('//*[@id="block-medicaid-content"]/div/article/div[4]/div[5]/p[2]/img')
            .should('have.attr', 'src', '/sites/default/files/inline-images/diabetes-barchart.png');
    }

    // Number of Hospitalizations per 1,000 Long-Stay
    // Measure title
    measureTitle1000() {
        cy.get('h1')
            .should('contain', 'Number of Hospitalizations per 1,000 Long-Stay Nursing Home Resident Days');
    }

    // VISIT THE DOMAIN
    visitTheDomain1000() {
        cy.get('.domainNav')
            .should('contain', 'VISIT THE DOMAIN: ')
            .and('contain', 'Promote Effective Communication & Coordination of Care');
    }

    // Viz Title
    vizTitle1000() {
        cy.get('h2')
            .should('contain', 'Number of Hospitalizations per 1,000 Long-Stay Nursing Home Resident Days');
    }

    // Static Viz
    vizLegend1000() {
        cy.xpath('//*[@id="block-medicaid-content"]/div/article/div[4]/div[5]/p[1]/img')
            .should('have.attr', 'src', '/sites/default/files/inline-images/nursing-legend_0.png');
    }

    vizChart1000() {
        cy.xpath('//*[@id="block-medicaid-content"]/div/article/div[4]/div[5]/p[2]/img')
            .should('have.attr', 'src', '/sites/default/files/inline-images/nursing-barchart.png');
    }

    // State Use of Experience of Care Surveys
    // Measure title
    measureTitleSurvey() {
        cy.get('h1')
            .should('contain', 'State Use of Experience of Care Surveys for Beneficiaries Using Long-Term Services and Supports');
    }

    // VISIT THE DOMAIN
    visitTheDomainSurvey() {
        cy.get('.domainNav')
            .should('contain', 'VISIT THE DOMAIN: ')
            .and('contain', 'Strengthen Person & Family Engagement as Partners in their Care');
    }

    // Static Viz
    vizChartSurvey() {
        cy.xpath('//*[@id="block-medicaid-content"]/div/article/div[4]/div[2]/img')
            .should('have.attr', 'src', '/sites/default/files/inline-images/state%20use%20of%20experienc%20of%20care%20surveys%20for%20beneficiaries%20using%20long-term%20services%20%26%20support.png');
    }

    // Ambulatory Care
    // Measure title
    measureTitleAmbulatory() {
        cy.get('h1')
            .should('contain', 'Ambulatory Care: Emergency Department Visits');
    }

    // VISIT THE DOMAIN
    visitTheDomainAmbulatory() {
        cy.get('.domainNav')
            .should('contain', 'VISIT THE DOMAIN: ')
            .and('contain', 'Make Care Affordable');
    }

    // Viz Title
    vizTitleAmbulatory() {
        cy.get('h2')
            .should('contain', 'Ambulatory Care: Emergency Department Visits');
    }

    // Static Viz
    vizLegendAmbulatory() {
        cy.xpath('//*[@id="block-medicaid-content"]/div/article/div[4]/div[5]/p[1]/img')
            .should('have.attr', 'src', '/sites/default/files/inline-images/ambulatory-legend.png');
    }

    vizChartAmbulatory() {
        cy.xpath('//*[@id="block-medicaid-content"]/div/article/div[4]/div[5]/p[2]/img')
            .should('have.attr', 'src', '/sites/default/files/inline-images/ambulatory-barchart.png');
    }
}

export const staticMeasures = new StaticMeasures();