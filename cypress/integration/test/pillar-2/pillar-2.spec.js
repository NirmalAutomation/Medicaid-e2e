/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { stateAdministrative } from "../../pages/scorecard/pillar-2/pillar-2-page"
import { rightNavBlock } from "../../pages/scorecard/common-helpers/right-nav-block";

beforeEach(() => {
    cy.medicaidLanding();
})

Given('User visits the State Administrative Accountability page', () => {

    cy.visit('/state-overviews/scorecard/state-administrative-accountability/index.html')

})

When('User inspects the breadcrumbs', () => {

    stateAdministrative.breadcrumbs();

})

When('User inspects the pillar title', () => {

    stateAdministrative.pillarTitle();

})

Then('User sees the associated sub categories', () => {

    stateAdministrative.subCategoryList();

})

Then('User sees right navigation bar', () => {

    rightNavBlock.rightNavElements();

})

When('User selects the State Plan Amendment and 1915 Waiver Processing title', () => {

    stateAdministrative.selectFirstCategory();

})

Then('User sees the State Plan Amendment and 1915 Waiver Processing page', () => {

    cy.url().should('include', '/state-overviews/scorecard/state-spa-1915-processing/index.html');

})

When('User selects the Annual 372 Reporting: Timeliness of Report Submissions title', () => {

    stateAdministrative.selectSecondCategory();

})

Then('User sees the Annual 372 Reporting: Timeliness of Report Submissions page', () => {

    cy.url().should('include', '/state-overviews/scorecard/annual-372s-reporting-timeliness/index.html');

})

When('User selects the Medicaid MAGI and CHIP Application Processing Times title', () => {

    stateAdministrative.selectThirdCategory();

})

Then('User sees the Medicaid MAGI and CHIP Application Processing Times page', () => {

    cy.url().should('include', '/state-overviews/scorecard/medicaid-magi-and-chip-application-processing-times/index.html');

})

When('User selects the Managed Care Capitation Rate Review: Timing of States’ Submissions title', () => {

    stateAdministrative.selectFourthCategory();

})

Then('User sees the Managed Care Capitation Rate Review: Timing of States’ Submissions page', () => {

    cy.url().should('include', '/state-overviews/scorecard/managed-care-capitation-rate-states-submission-timing/index.html');

})

When('User selects the Managed Care Capitation Rate Review: Days Awaiting Information from States title', () => {

    stateAdministrative.selectFifthCategory();

})

Then('User sees the Managed Care Capitation Rate Review: Days Awaiting Information from States page', () => {

    cy.url().should('include', '/state-overviews/scorecard/managed-care-capitation-rate-days-awaiting-information-from-states/index.html');

})

When('User selects the T-MSIS Data Quality: Number of Open Top Priority Issues title', () => {

    stateAdministrative.selectSixthCategory();

})

Then('User sees the T-MSIS Data Quality: Number of Open Top Priority Issues page', () => {

    cy.url().should('include', '/state-overviews/scorecard/t-msis-data-quality-open-top-priority-issues/index.html');

})

When('User selects the Initiation of Collaborative Investigations Between States and CMS’s Unified Program Integrity Contractors title', () => {

    stateAdministrative.selectSeventhCategory();

})

Then('User sees the Initiation of Collaborative Investigations Between States and CMS’s Unified Program Integrity Contractors page', () => {

    cy.url().should('include', '/state-overviews/scorecard/investigations-between-states-and-unified-program-integrity-contractors/index.html');

})

When('User selects the Healthcare Fraud Prevention Partnership Participation title', () => {

    stateAdministrative.selectEighthCategory();

})

Then('User sees the Healthcare Fraud Prevention Partnership Participation page', () => {

    cy.url().should('include', '/state-overviews/scorecard/healthcare-fraud-prevention-partnership-participation/index.html');

})

When('User selects the Payment Error Rate  Measurement PERM title', () => {

    stateAdministrative.selectNinthCategory();

})

Then('User sees the Payment Error Rate  Measurement PERM page', () => {

    cy.url().should('include', '/state-overviews/scorecard/payment-error-rate-measurement/index.html');

})