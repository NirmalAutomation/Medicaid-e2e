/// <reference types="Cypress" />

export class AntipsychoticMedication {

    // Measure title
    measureTitle() {
        cy.get('h1')
            .should('contain', 'Percentage of Long-stay Nursing Home Residents who got an Antipsychotic Medication');
    }

    // VISIT THE DOMAIN
    visitTheDomain() {
        cy.get('.domainNav')
            .should('contain', 'VISIT THE DOMAIN: ')
            .and('contain', 'Make Care Safer by Reducing Harm');
    }

    // Median Rate
    medianRate() {
        cy.get('.median-text')
            .should('contain', 'Median - 14.4%');
    }

    // State List
    stateAndUnionList() {
        cy.get('.chart-axisLeft')
            .should('contain', 'AK')
            .and('contain', 'AL')
            .and('contain', 'AR')
            .and('contain', 'AZ')
            .and('contain', 'CA')
            .and('contain', 'CO')
            .and('contain', 'CT')
            .and('contain', 'DC')
            .and('contain', 'DE')
            .and('contain', 'FL')
            .and('contain', 'GA')
            .and('contain', 'GU')
            .and('contain', 'HI')
            .and('contain', 'IA')
            .and('contain', 'ID')
            .and('contain', 'IL')
            .and('contain', 'IN')
            .and('contain', 'KS')
            .and('contain', 'KY')
            .and('contain', 'LA')
            .and('contain', 'MA')
            .and('contain', 'MD')
            .and('contain', 'ME')
            .and('contain', 'MI')
            .and('contain', 'MN')
            .and('contain', 'MO')
            .and('contain', 'MS')
            .and('contain', 'MT')
            .and('contain', 'NC')
            .and('contain', 'ND')
            .and('contain', 'NE')
            .and('contain', 'NH')
            .and('contain', 'NJ')
            .and('contain', 'NM')
            .and('contain', 'NV')
            .and('contain', 'NY')
            .and('contain', 'OH')
            .and('contain', 'OK')
            .and('contain', 'OR')
            .and('contain', 'PA')
            .and('contain', 'PR')
            .and('contain', 'RI')
            .and('contain', 'SC')
            .and('contain', 'SD')
            .and('contain', 'TN')
            .and('contain', 'TX')
            .and('contain', 'UT')
            .and('contain', 'VA')
            .and('contain', 'VT')
            .and('contain', 'WA')
            .and('contain', 'WI')
            .and('contain', 'WV')
            .and('contain', 'WY');
    }

    // Rate List
    rateList() {
        cy.get('.chart-axisRight')
            .should('contain', '11.6%')
            .and('contain', '20.2%')
            .and('contain', '14.0%')
            .and('contain', '12.5%')
            .and('contain', '10.8%')
            .and('contain', '15.0%')
            .and('contain', '16.5%')
            .and('contain', '10.0%')
            .and('contain', '13.6%')
            .and('contain', '14.0%')
            .and('contain', '18.1%')
            .and('contain', '5.7%')
            .and('contain', '7.8%')
            .and('contain', '14.6%')
            .and('contain', '17.7%')
            .and('contain', '18.7%')
            .and('contain', '14.4%')
            .and('contain', '16.5%')
            .and('contain', '17.3%')
            .and('contain', '15.8%')
            .and('contain', '17.8%')
            .and('contain', '12.2%')
            .and('contain', '17.4%')
            .and('contain', '13.0%')
            .and('contain', '13.3%')
            .and('contain', '18.8%')
            .and('contain', '18.2%')
            .and('contain', '12.8%')
            .and('contain', '12.0%')
            .and('contain', '17.8%')
            .and('contain', '17.3%')
            .and('contain', '14.1%')
            .and('contain', '9.6%')
            .and('contain', '17.3%')
            .and('contain', '15.1%')
            .and('contain', '11.2%')
            .and('contain', '14.4%')
            .and('contain', '18.9%')
            .and('contain', '14.3%')
            .and('contain', '15.5%')
            .and('contain', '1.8%')
            .and('contain', '16.1%')
            .and('contain', '13.6%')
            .and('contain', '16.3%')
            .and('contain', '14.9%')
            .and('contain', '12.8%')
            .and('contain', '13.7%')
            .and('contain', '14.2%')
            .and('contain', '15.7%')
            .and('contain', '15.1%')
            .and('contain', '12.2%')
            .and('contain', '13.9%')
            .and('contain', '14.4%');
    }

    // State Specific Comments
    stateSpecificWY() {
        cy.get('.bar-alt').eq(0).trigger('mouseover')
            .then(() => {

                cy.get('.tooltip-text')
                    .should('contain', "WY: None")
            })
    }
}

export const antipsychoticMedication = new AntipsychoticMedication();