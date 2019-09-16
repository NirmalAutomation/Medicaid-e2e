/// <reference types="Cypress" />

export class Pillar1Measure {

    chartLegends() {

        cy.get('.measure_legend_container_ng')
            .should('contain', 'Population is Medicaid only')
            .and('contain', 'Population is CHIP only')

    }

    filtersContainer() {

        cy.get('.filters-container')
            .should('contain', ' Refine Your Search ')
            .and('contain', ' Sort By: ')
            .and('contain', 'Reset All')
    }

    selectSortOptions() {

        cy.get('select')
            .select('State (Z-A)').then(() => {
                cy.get('.sort-options')
                    .should('contain', 'State (Z-A)')
            })
    }

    clickResetAllBtn() {
        cy.get('button')
            .contains('Reset All')
            .click().then(() => {

                cy.get('.sort-options')
                    .should('contain', 'State (A-Z)')
            })
    }

    chartTitleTexts() {
        cy.xpath('//*[@id="block-medicaid-content"]/div/article/div[4]/div[5]')
            .should('contain', 'State')
            .and('contain', 'Rate')
            .and('contain', 'Median - 2.9%')

    }

    chartXAxisTop() {
        cy.get('.chart-axisTop')
            .should('contain', '0%')
            .and('contain', '25%')

    }

    chartXAxisBottom() {
        cy.get('.chart-axisBottom')
            .should('contain', '0%')
            .and('contain', '25%')

    }

}