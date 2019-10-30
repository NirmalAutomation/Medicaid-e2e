/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { medicaidHome } from "../../pages/medicaid-home"

beforeEach(() => {
    cy.medicaidLanding();
})

Given('User visits the medicaid home page', () => {

    // cy.url().should('eq', 'https://dev.medicaid.gov/');

    cy.url().should('eq', 'https://imp.medicaid.gov/');

})

When('User selects Scorecard link from State Overviews menu', () => {

    medicaidHome.clickScorecardLink();

})

Then('User sees Scorecard landing page', () => {

    cy.url().should('include', '/state-overviews/scorecard/index.html');

})