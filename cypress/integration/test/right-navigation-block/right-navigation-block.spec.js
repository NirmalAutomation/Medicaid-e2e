/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { scorecardLanding } from "../../pages/scorecard/scorecard-landing/scorecard-landing"
import { rightNavBlock } from "../../pages/scorecard/common-helpers/right-nav-block"

beforeEach(() => {
    cy.medicaidLanding();
})

Given('User visits the Scorecard landing', () => {

    cy.visit('/state-overviews/scorecard/index.html');

})

When('User clicks on National Context icon', () => {

    scorecardLanding.ncIcon();

})

Then('User sees National Context page', () => {

    cy.url().should('include', '/state-overviews/scorecard/national-context/index.html');

})

When('User clicks on Federal Administrative Accountability link on right nav block', () => {

    rightNavBlock.selectFederalAdminLink();

})

Then('User sees Federal Administrative Accountability page', () => {

    cy.url().should('include', '/state-overviews/scorecard/federal-administrative-accountability/index.html');

})

When('User clicks on State Administrative Accountability link on right nav block', () => {

    rightNavBlock.selectStateAdminLink();

})

Then('User sees State Administrative Accountability page', () => {

    cy.url().should('include', '/state-overviews/scorecard/state-administrative-accountability/index.html');

})

When('User clicks on State Health System Performance link on right nav block', () => {

    rightNavBlock.selectStateHealthLink();

})

Then('User sees State Health System Performance page', () => {

    cy.url().should('include', '/state-overviews/scorecard/state-health-system-performance/index.html');

})

When('User clicks on Medicaid and CHIP logo', () => {

    rightNavBlock.clickMedicaidLogo();

})

Then('User sees Scorecard landing page', () => {

    cy.url().should('include', '/state-overviews/scorecard/index.html');

})