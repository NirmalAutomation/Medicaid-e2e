/// <reference types="Cypress" />

export class FollowUp21Older {

    // Measure title
    measureTitle() {
        cy.get('h1')
            .should('contain', 'Follow-Up After Hospitalization for Mental Illness: Age 21 & Older');
    }

    // VISIT THE DOMAIN
    visitTheDomain() {
        cy.get('.domainNav')
            .should('contain', 'VISIT THE DOMAIN: ')
            .and('contain', 'Promote Effective Communication & Coordination of Care');
    }

    // Viz Title
    vizTitle() {
        cy.get('h2')
            .should('contain', 'Follow-Up After Hospitalization for Mental Illness: Age 21 & Older');
    }

    // Median Rate
    medianRate7Day() {
        cy.get('.median-text')
            .should('contain', 'Median - 38.0%');
    }

    medianRate30Day() {
        cy.get('.median-text')
            .should('contain', 'Median - 58.6%');
    }

    // Rate List
    rateList7Day() {
        cy.get('.chart-axisRight')
            .should('contain', 'NR')
            .and('contain', '38.5%')
            .and('contain', '31.7%')
            .and('contain', '41.4%')
            .and('contain', '54.4%')
            .and('contain', 'NR')
            .and('contain', '51.0%')
            .and('contain', '57.6%')
            .and('contain', '30.5%')
            .and('contain', '30.5%')
            .and('contain', '31.9%')
            .and('contain', '38.4%')
            .and('contain', '32.8%')
            .and('contain', 'NR')
            .and('contain', '26.4%')
            .and('contain', 'NR')
            .and('contain', '59.0%')
            .and('contain', '34.3%')
            .and('contain', '17.3%')
            .and('contain', '52.7%')
            .and('contain', '38.4%')
            .and('contain', 'NR')
            .and('contain', '43.8%')
            .and('contain', '35.0%')
            .and('contain', '22.7%')
            .and('contain', '33.6%')
            .and('contain', 'NR')
            .and('contain', '25.4%')
            .and('contain', 'NR')
            .and('contain', '47.4%')
            .and('contain', '53.6%')
            .and('contain', '15.5%')
            .and('contain', '38.0%')
            .and('contain', '32.7%')
            .and('contain', '44.7%')
            .and('contain', '44.0%')
            .and('contain', '18.9%')
            .and('contain', '85.3%')
            .and('contain', '34.9%')
            .and('contain', '55.4%')
            .and('contain', '29.0%')
            .and('contain', '32.6%')
            .and('contain', '35.1%')
            .and('contain', '20.7%')
            .and('contain', '61.3%')
            .and('contain', 'NR')
            .and('contain', '51.0%')
            .and('contain', '66.5%')
            .and('contain', '42.7%')
            .and('contain', '10.0%')
            .and('contain', '39.8%');
    }

    rateList30Day() {
        cy.get('.chart-axisRight')
            .should('contain', 'NR')
            .and('contain', '55.3%')
            .and('contain', '53.3%')
            .and('contain', '61.7%')
            .and('contain', '67.0%')
            .and('contain', 'NR')
            .and('contain', '70.4%')
            .and('contain', '73.3%')
            .and('contain', '47.3%')
            .and('contain', '51.1%')
            .and('contain', '51.5%')
            .and('contain', '55.4%')
            .and('contain', '59.8%')
            .and('contain', 'NR')
            .and('contain', '42.5%')
            .and('contain', 'NR')
            .and('contain', '76.5%')
            .and('contain', '56.6%')
            .and('contain', '39.3%')
            .and('contain', '74.0%')
            .and('contain', '60.3%')
            .and('contain', 'NR')
            .and('contain', '65.6%')
            .and('contain', '62.9%')
            .and('contain', '37.9%')
            .and('contain', '59.4%')
            .and('contain', 'NR')
            .and('contain', '46.1%')
            .and('contain', 'NR')
            .and('contain', '72.5%')
            .and('contain', '71.7%')
            .and('contain', '32.4%')
            .and('contain', '61.6%')
            .and('contain', '49.8%')
            .and('contain', '61.4%')
            .and('contain', '65.3%')
            .and('contain', '39.5%')
            .and('contain', 'NR')
            .and('contain', '56.0%')
            .and('contain', '74.9%')
            .and('contain', '52.4%')
            .and('contain', '56.8%')
            .and('contain', '57.2%')
            .and('contain', '38.9%')
            .and('contain', '75.9%')
            .and('contain', 'NR')
            .and('contain', '69.8%')
            .and('contain', '82.1%')
            .and('contain', '66.2%')
            .and('contain', '33.7%')
            .and('contain', '57.8%');
    }

    // 7-day follow up
    toggle7DayFollow() {
        cy.get('.radio-button-text')
            .contains('7-Day Follow-Up Rate')
            .click();
    }

    // State Specific Comments
    stateSpecificWY7Day() {
        cy.get('.bar-alt').eq(0).trigger('mouseover')
            .then(() => {

                cy.get('.tooltip-text')
                    .should('contain', "WY: Rates include FFS population.")
            })
    }

    // 30-day follow up
    toggle30DayFollow() {
        cy.get('.radio-button-text')
            .contains('30-Day Follow-Up Rate')
            .click();
    }

    // State Specific Comments
    stateSpecificWY30Day() {
        cy.get('.bar-alt').eq(0).trigger('mouseover')
            .then(() => {

                cy.get('.tooltip-text')
                    .should('contain', "WY: Rates include FFS population.");
            })
    }

}

export const followUp21Older = new FollowUp21Older();