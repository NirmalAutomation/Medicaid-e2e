/// <reference types="Cypress" />

export class Pillar1Measure {

    visitThePillar() {
        cy.get('.pillarNav')
            .should('contain', 'VISIT THE PILLAR: ')
            .and('contain', 'State Health System Performance');
    }

    learnMore() {

        cy.get('.learn_more_container')
            .should('contain', 'LEARN MORE');
    }

    populationTypes() {
        cy.get('.measure_legend_container_ng')
            .should('contain', 'Population is Medicaid only')
            .and('contain', 'Population is CHIP only')
            .and('contain', 'Population includes Medicaid and CHIP')
            .and('contain', 'Population includes Medicaid and Dual Eligibles')
            .and('contain', 'Population includes Medicaid, CHIP, and Dual Eligibles')
            .and('contain', 'Population includes residents of Medicare or Medicaid certified nursing homes')
            .and('contain', 'Not Reported');
    }

    legendIcons() {
        cy.get('.shapes').eq(0)
            .should('have.attr', 'src', '/themes/custom/medicaid/img/icon-dev_circle.png');
        cy.get('.shapes').eq(1)
            .should('have.attr', 'src', '/themes/custom/medicaid/img/icon-dev_polygon.png');
        cy.get('.shapes').eq(2)
            .should('have.attr', 'src', '/themes/custom/medicaid/img/icon-dev_square.png');
        cy.get('.shapes').eq(3)
            .should('have.attr', 'src', '/themes/custom/medicaid/img/icon-dev_diamond.png');
        cy.get('.shapes').eq(4)
            .should('have.attr', 'src', '/themes/custom/medicaid/img/icon-dev_triangle.png');
        cy.get('.shapes').eq(5)
            .should('have.attr', 'src', '/themes/custom/medicaid/img/icon-dev_plus-sign.png');
        cy.get('.shapes').eq(6)
            .should('have.attr', 'src', '/themes/custom/medicaid/img/icon-dev_NR.png');
    }

    filtersContainerElements() {
        cy.get('.filters-container')
            .should('contain', ' Refine Your Search ')
            .and('contain', ' Sort By: ')
            .and('contain', 'Reset All')
    }

    selectSortOptionsZA() {
        cy.get('select')
            .select('State (Z-A)').then(() => {
                cy.get('.sort-options')
                    .should('contain', 'State (Z-A)')
            })
    }

    selectSortOptionsAZ() {
        cy.get('select')
            .select('State (A-Z)').then(() => {
                cy.get('.sort-options')
                    .should('contain', 'State (A-Z)')
            })
    }

    selectSortOptionsHighest() {
        cy.get('select')
            .select('Rate (Highest to Lowest)').then(() => {
                cy.get('.sort-options')
                    .should('contain', 'Rate (Highest to Lowest)')
            })
    }

    selectSortOptionsLowest() {
        cy.get('select')
            .select('Rate (Lowest to Highest)').then(() => {
                cy.get('.sort-options')
                    .should('contain', 'Rate (Lowest to Highest)')
            })
    }

    clickResetAllBtn() {
        cy.get('button')
            .contains('Reset All')
            .click();
    }

    // Chart components
    topLineTitles() {
        cy.xpath('//*[@id="block-medicaid-content"]/div/article/div[4]/div[5]')
            .should('contain', 'State')
            .and('contain', 'Rate');
    }

    // State List
    stateListQuality() {
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

    styleOfState() {
        cy.get('.chart-axisLeft')
            .should('have.css', 'font-size', '10px')
            .and('have.css', 'font-family', 'sans-serif');
    }

    styleOfRate() {
        cy.get('.chart-axisRight')
            .should('have.css', 'font-size', '10px')
            .and('have.css', 'font-family', 'sans-serif');
    }

    styleOfMedian() {
        cy.get('.median-text')
            .should('have.css', 'font-size', '13px')
            .and('have.css', 'font-family', '"Source Sans Pro", sans-serif')
            .and('have.css', 'fill', 'rgb(134, 32, 116)');
    }

    chartXAxisTop() {
        cy.get('.chart-axisTop')
            .should('contain', '0%')
            .and('contain', '25%')
            .and('contain', '50%')
            .and('contain', '75%')
            .and('contain', '100%');
    }

    chartXAxisBottom() {
        cy.get('.chart-axisBottom')
            .should('contain', '0%')
            .and('contain', '25%')
            .and('contain', '50%')
            .and('contain', '75%')
            .and('contain', '100%');
    }

    colorOfMedianLine() {
        cy.get('.bar-median')
            .should('have.css', 'stroke', 'rgb(134, 32, 116)');
    }

    colorOfNR() {
        cy.get('.chart-axisRight')
            .contains('NR')
            .should('have.css', 'color', 'rgb(2, 102, 102)');
    }

    colorOfBars() {
        cy.get('.bar-alt')
            .should('have.css', 'fill', 'rgb(136, 136, 136)');

        cy.get('.bar')
            .should('have.css', 'fill', 'rgb(23, 65, 95)');
    }

    colorOfMedicaidAndChip() {
        cy.get('.bar-top.bar-top-population-0')
            .should('have.css', 'fill', 'rgb(4, 103, 145)');
    }

    colorOfMedicaidOnly() {
        cy.get('.bar-top.bar-top-population-1')
            .should('have.css', 'fill', 'rgb(2, 102, 102)');
    }

    colorOfChipOnly() {
        cy.get('.bar-top.bar-top-population-2')
            .should('have.css', 'fill', 'rgb(134, 32, 116)');
    }

    colorOfMedicaidDual() {
        cy.get('.bar-top.bar-top-population-3')
            .should('have.css', 'fill', 'rgb(202, 77, 34)');
    }

    colorOfMedicaidChipDual() {
        cy.get('.bar-top.bar-top-population-4')
            .should('have.css', 'fill', 'rgb(23, 65, 95)');
    }

    colorOfMedicareOrMedicaid() {
        cy.get('.bar-top.bar-top-population-5')
            .should('have.css', 'fill', 'rgb(86, 86, 86)');
    }

}

export const pillar1Measure = new Pillar1Measure()