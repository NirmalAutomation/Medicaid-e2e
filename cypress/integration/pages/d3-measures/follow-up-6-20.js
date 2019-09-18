/// <reference types="Cypress" />

export class FollowUp6To20 {

    // Measure title
    measureTitle() {
        cy.get('h1')
            .should('contain', 'Follow-Up After Hospitalization for Mental Illness: Ages 6-20');
    }

    // Median Rate
    medianRate7Day() {
        cy.get('.median-text')
            .should('contain', 'Median - 44.7%');
    }

    medianRate30Day() {
        cy.get('.median-text')
            .should('contain', 'Median - 67.1%');
    }

    // Rate List
    rateList7Day() {
        cy.get('.chart-axisRight')
            .should('contain', '10.0%')
            .and('contain', '45.9%')
            .and('contain', '45.5%')
            .and('contain', '61.2%')
            .and('contain', '67.8%')
            .and('contain', 'NR')
            .and('contain', '62.7%')
            .and('contain', '48.8%')
            .and('contain', '36.5%')
            .and('contain', '30.6%')
            .and('contain', '38.3%')
            .and('contain', '38.4%')
            .and('contain', '40.6%')
            .and('contain', 'NR')
            .and('contain', '48.4%')
            .and('contain', '50.7%')
            .and('contain', '59.0%')
            .and('contain', '34.3%')
            .and('contain', '40.3%')
            .and('contain', '57.0%')
            .and('contain', 'NR')
            .and('contain', '50.1%')
            .and('contain', '55.0%')
            .and('contain', '44.7%')
            .and('contain', '34.5%')
            .and('contain', '37.7%')
            .and('contain', '57.7%')
            .and('contain', '39.3%')
            .and('contain', 'NR')
            .and('contain', '29.7%')
            .and('contain', '61.1%')
            .and('contain', '15.5%')
            .and('contain', '38.0%')
            .and('contain', '32.7%')
            .and('contain', '70.4%')
            .and('contain', '44.0%')
            .and('contain', '27.2%')
            .and('contain', '81.4%')
            .and('contain', '51.3%')
            .and('contain', '55.4%')
            .and('contain', '42.2%')
            .and('contain', '23.3%')
            .and('contain', '35.1%')
            .and('contain', '33.6%')
            .and('contain', '61.3%')
            .and('contain', '52.9%')
            .and('contain', '59.2%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '9.7%')
            .and('contain', '53.3%');
    }

    rateList30Day() {
        cy.get('.chart-axisRight')
        .should('contain', '31.2%')
        .and('contain', '68.6%')
        .and('contain', '69.0%')
        .and('contain', '77.7%')
        .and('contain', '80.4%')
        .and('contain', 'NR')
        .and('contain', '79.6%')
        .and('contain', '74.2%')
        .and('contain', '48.1%')
        .and('contain', '51.2%')
        .and('contain', '64.7%')
        .and('contain', '55.4%')
        .and('contain', '67.5%')
        .and('contain', 'NR')
        .and('contain', '68.0%')
        .and('contain', '73.8%')
        .and('contain', '76.5%')
        .and('contain', '56.6%')
        .and('contain', '63.0%')
        .and('contain', '78.5%')
        .and('contain', 'NR')
        .and('contain', '76.7%')
        .and('contain', '74.5%')
        .and('contain', '70.3%')
        .and('contain', '56.4%')
        .and('contain', '66.0%')
        .and('contain', '77.4%')
        .and('contain', '63.5%')
        .and('contain', 'NR')
        .and('contain', '63.9%')
        .and('contain', '78.0%')
        .and('contain', '32.4%')
        .and('contain', '61.6%')
        .and('contain', '49.8%')
        .and('contain', '85.1%')
        .and('contain', '65.3%')
        .and('contain', '51.2%')
        .and('contain', 'NR')
        .and('contain', '74.2%')
        .and('contain', '74.9%')
        .and('contain', '62.3%')
        .and('contain', '42.7%')
        .and('contain', '57.2%')
        .and('contain', '56.5%')
        .and('contain', '75.9%')
        .and('contain', '66.7%')
        .and('contain', '79.6%')
        .and('contain', 'NR')
        .and('contain', 'NR')
        .and('contain', '39.6%')
        .and('contain', '76.4%');
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
                    .should('contain', "WY: Medicaid rates include FFS population. CHIP rates include managed care population (1 MCO) ages 6 to 18. Population: CHIP only State Rate: #")
            })
    }

    stateSpecificVA7Day() {
        cy.get('.bar').eq(1).trigger('mouseover')
            .then(() => {

                cy.get('.tooltip-text')
                    .should('contain', "VA: Rates include managed care population (6 MCOs) age 6 and older. State obtained rates from the NCQA Quality Compass and denominator is not available.");
            })
    }

    stateSpecificAL7Day() {
        cy.get('.bar').eq(24).trigger('mouseover')
            .then(() => {

                cy.get('.tooltip-text')
                    .should('contain', "AL: Medicaid rates include FFS and PCCM populations. CHIP rates include separate CHIP population. Rates exclude children enrolled in Medicaid-expansion CHIP; these children are included in the state's Medicaid rates. Population: CHIP only State Rate: 34.7");
            })
    }

    stateSpecificCT7Day() {
        cy.get('.bar-alt').eq(22).trigger('mouseover')
            .then(() => {

                cy.get('.tooltip-text')
                    .should('contain', "CT: Rates include FFS population. Rates were audited by a certified HEDIS auditor.");
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
                    .should('contain', "WY: Medicaid rates include FFS population. CHIP rates include managed care population (1 MCO) ages 6 to 18. Population: CHIP only State Rate: #");
            })
    }

    stateSpecificVA30Day() {
        cy.get('.bar').eq(1).trigger('mouseover')
            .then(() => {

                cy.get('.tooltip-text')
                    .should('contain', "VA: Rates include managed care population (6 MCOs) age 6 and older. State obtained rates from the NCQA Quality Compass and denominator is not available.");
            })
    }

    stateSpecificAL30Day() {
        cy.get('.bar').eq(24).trigger('mouseover')
            .then(() => {

                cy.get('.tooltip-text')
                    .should('contain', "AL: Medicaid rates include FFS and PCCM populations. CHIP rates include separate CHIP population. Rates exclude children enrolled in Medicaid-expansion CHIP; these children are included in the state's Medicaid rates. Population: CHIP only State Rate: 56.8");
            })
    }

    stateSpecificCT30Day() {
        cy.get('.bar-alt').eq(22).trigger('mouseover')
            .then(() => {

                cy.get('.tooltip-text')
                    .should('contain', "CT: Rates include FFS population. Rates were audited by a certified HEDIS auditor.");
            })
    }

}

export const followUp6To20 = new FollowUp6To20();