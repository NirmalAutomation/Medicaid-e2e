/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { scorecardLanding } from "../../pages/scorecard-landing/scorecard-landing"
import { pillar1Measure } from "../../pages/pillar-1/pillar-1-measure-common"

beforeEach(() => {
    cy.medicaidLanding();
})

Given('User visits the Scorecard landing', () => {

    cy.visit('/state-overviews/scorecard/index.html');

})

When('User inspects the breadcrumbs', () => {

    scorecardLanding.breadcrumbs();

})

Then('User sees Medicaid and CHIP Scorecard logo', () => {

    scorecardLanding.scorecardLogo();

})

When('User clicks on National Context icon', () => {

    scorecardLanding.ncIcon();

})

When('User clicks on System Health System Performance', () => {

    scorecardLanding.shspIcon();

})

When('User clicks on State Administrative Accountability', () => {

    scorecardLanding.saaIcon();

})

When('User clicks on Federal Administrative Accountability', () => {

    scorecardLanding.faaIcon();

})

When('User selects on National Context link text', () => {

    scorecardLanding.ncLinkText();

})

When('User selects on State Health System Performance link text', () => {

    scorecardLanding.shspLinkText();

})

When('User selects on State Administrative Accountability link text', () => {

    scorecardLanding.saaLinkText();

})

When('User selects on Federal Administrative Accountability link text', () => {

    scorecardLanding.faaLinkText();

})

Then('User sees Find a Measure section', () => {

    scorecardLanding.findAMeasureText();

})

Then('User sees What is Scorecard text', () => {

    scorecardLanding.textAssertionScorecard();

})

When('User selects a measure', () => {


})

Then('User sees the pillar 1 measures', () => {


})

Then('User sees the pillar 2 and 3 sub categories', () => {


})