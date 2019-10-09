// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
// cypress run --record --key 757c292b-7b70-4b8d-b3d5-aab51574bcbf

Cypress.Commands.add('medicaidLanding', () => {

    cy.visit('/?ACA=JMwCeGV1O8');

})

Cypress.Commands.add('scorecardPageNavigation', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    cy.visit('/?ACA=JMwCeGV1O8');

    cy.get('#block-mainmenu-2')
        .contains('State Overviews').trigger('mousemove')
        .then(() => {
            cy.get('#submenu-7').invoke('show')
                .contains('Scorecard')
                .click({ force: true });
        })

})

Cypress.Commands.add('ncPageNavigation', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    cy.visit('/?ACA=JMwCeGV1O8');

    cy.get('#block-mainmenu-2')
        .contains('State Overviews').trigger('mousemove')
        .then(() => {
            cy.get('#submenu-7').invoke('show')
                .contains('National Context')
                .click({ force: true });
        })

})

Cypress.Commands.add('pillar1PageNavigation', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    cy.visit('/?ACA=JMwCeGV1O8');

    cy.get('#block-mainmenu-2')
        .contains('State Overviews').trigger('mousemove')
        .then(() => {
            cy.get('#submenu-7').invoke('show')
                .contains('State Health System Performance')
                .click({ force: true });
        })

})

Cypress.Commands.add('pillar2PageNavigation', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    cy.visit('/?ACA=JMwCeGV1O8');

    cy.get('#block-mainmenu-2')
        .contains('State Overviews').trigger('mousemove')
        .then(() => {
            cy.get('#submenu-7').invoke('show')
                .contains('State Administrative Accountability')
                .click({ force: true });
        })

})

Cypress.Commands.add('pillar3PageNavigation', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    cy.visit('/?ACA=JMwCeGV1O8');

    cy.get('#block-mainmenu-2')
        .contains('State Overviews').trigger('mousemove')
        .then(() => {
            cy.get('#submenu-7').invoke('show')
                .contains('Federal Administrative Accountability')
                .click({ force: true });
        })

})

/*
node { "master" }{
    
    git 'https://github.com/NirmalAutomation/e2e-robust.git'
    
    set label: "Install NPM package", script: "npm install"
    
    set label: "Run test", script: "npx cypress run"
    
}
*/