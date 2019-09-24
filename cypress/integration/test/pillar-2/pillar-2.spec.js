/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { stateAdministrative } from "../../pages/pillar-2/pillar-2-page"
import { rightNavBlock } from "../../pages/right-nav-block";

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


})

Then('User sees the State Plan Amendment and 1915 Waiver Processing page', () => {


})

When('User selects the Annual 372(S) Reporting: Timeliness of Report Submissions title', () => {


})

Then('User sees the Annual 372(S) Reporting: Timeliness of Report Submissions page', () => {


})

When('User selects the Medicaid MAGI and CHIP Application Processing Times title', () => {


})

Then('User sees the Medicaid MAGI and CHIP Application Processing Times page', () => {


})

When('User selects the Managed Care Capitation Rate Review: Timing of States’ Submissions title', () => {


})

Then('User sees the Managed Care Capitation Rate Review: Timing of States’ Submissions page', () => {


})

When('User selects the Managed Care Capitation Rate Review: Days Awaiting Information from States title', () => {


})

Then('User sees the Managed Care Capitation Rate Review: Days Awaiting Information from States page', () => {


})

When('User selects the T-MSIS Data Quality: Number of Open Top Priority Issues title', () => {


})

Then('User sees the T-MSIS Data Quality: Number of Open Top Priority Issues page', () => {


})

When('User selects the Initiation of Collaborative Investigations Between States and CMS’s Unified Program Integrity Contractors title', () => {


})

Then('User sees the Initiation of Collaborative Investigations Between States and CMS’s Unified Program Integrity Contractors page', () => {


})

When('User selects the Healthcare Fraud Prevention Partnership Participation title', () => {


})

Then('User sees the Healthcare Fraud Prevention Partnership Participation page', () => {


})

When('User selects the Payment Error Rate  Measurement (PERM) title', () => {


})

Then('User sees the Payment Error Rate  Measurement (PERM) page', () => {


})

