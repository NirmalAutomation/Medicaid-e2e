/// <reference types="Cypress" />

describe("Testing Mediciad.gov", () => {

    it("login into medicaid gov", () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.visit("/?ACA=JMwCeGV1O8");

        cy.visit('/use-multiple-concurrent-antipsychotics-children-adolescents');

        cy.xpath('//*[@id="block-medicaid-content"]/div/article/div[4]/div[5]')
            .should('contain', 'State')
            .and('contain', 'Rate')
            .and('contain', 'Median - 2.9%')

        cy.get('.chart-axisTop')
            .should('contain', '0%')
            .and('contain', '25%')

        cy.get('.chart-axisBottom')
            .should('contain', '0%')
            .and('contain', '25%')

        cy.get('.chart-axisRight')
            .contains('NR')
            .should('have.css', 'color', 'rgb(2, 102, 102)');
    })
})