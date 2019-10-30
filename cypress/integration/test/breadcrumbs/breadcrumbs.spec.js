/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { breadcrumbs } from "../../pages/scorecard/common-helpers/breadcrumbs"

beforeEach(() => {
    cy.medicaidLanding();
})

Given('User visits the Scorecard landing', () => {

    cy.visit('/state-overviews/scorecard/index.html');

})

When('User click on Home breadcrumb', () => {

    breadcrumbs.clickHome();

})

Then('User sees Medicaid Home page', () => {

    cy.url().should('include', '/index.html');

})

Then('User navigate back to Scorecard landing', () => {

    cy.visit('/state-overviews/scorecard/index.html');

})

When('User click on State Overviews breadcrumb', () => {

    breadcrumbs.clickStateOverviews();

})

Then('User sees State Overviews page', () => {

    cy.url().should('include', '/state-overviews/index.html');

})