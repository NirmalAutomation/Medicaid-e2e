/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { stateAdministrativeSub } from "../../pages/scorecard/pillar-2/pillar-2-subcateory"
import { rightNavBlock } from "../../pages/scorecard/right-nav-block";

beforeEach(() => {
    cy.medicaidLanding();
})

Given('User visits the State Plan Amendment and 1915 Waiver Processing page', () => {

    cy.visit('/state-overviews/scorecard/state-spa-1915-processing/index.html');

})

When('User inspects the first sub breadcrumbs', () => {

    stateAdministrativeSub.firstSubBreadcrumbs();

})

When('User inspects the first Sub category title', () => {

    stateAdministrativeSub.firstSubTitle();

})

Then('User sees VISIT THE PILLAR', () => {

    stateAdministrativeSub.visitThePillar();

})

Then('User sees the first associated measures', () => {

    stateAdministrativeSub.firstMeasureList();

})

Then('User sees right navigation bar', () => {

    rightNavBlock.rightNavElements();

})

Given('User visits the Verify the Annual 372 Reporting: Timeliness of Report Submissions page', () => {

    cy.visit('/state-overviews/scorecard/annual-372s-reporting-timeliness/index.html');

})

When('User inspects the second sub breadcrumbs', () => {

    stateAdministrativeSub.secondSubBreadcrumbs();

})

When('User inspects the second Sub category title', () => {

    stateAdministrativeSub.secondSubTitle();

})

Then('User sees the second associated measures', () => {

    stateAdministrativeSub.secondMeasureList();

})

Given('User visits the Medicaid MAGI and CHIP Application Processing Times page', () => {

    cy.visit('/state-overviews/scorecard/medicaid-magi-and-chip-application-processing-times/index.html');

})

When('User inspects the third breadcrumbs', () => {

    stateAdministrativeSub.thirdSubBreadcrumbs();

})

When('User inspects the third Sub category title', () => {

    stateAdministrativeSub.thirdSubTitle();

})

Then('User sees the third associated measures', () => {

    stateAdministrativeSub.thirdMeasureList();

})

Given('User visits the Managed Care Capitation Rate Review: Timing of States’ Submissions page', () => {

    cy.visit('/state-overviews/scorecard/managed-care-capitation-rate-states-submission-timing/index.html');

})

When('User inspects the fourth breadcrumbs', () => {

    stateAdministrativeSub.fourthSubBreadcrumbs();

})

When('User inspects the fourth Sub category title', () => {

    stateAdministrativeSub.fourthSubTitle();

})

Then('User sees the fourth associated measures', () => {

    stateAdministrativeSub.fourthMeasureList();

})

Given('User visits the Managed Care Capitation Rate Review: Days Awaiting Information from States page', () => {

    cy.visit('/state-overviews/scorecard/managed-care-capitation-rate-days-awaiting-information-from-states/index.html');

})

When('User inspects the fifth breadcrumbs', () => {

    stateAdministrativeSub.fifthSubBreadcrumbs();

})

When('User inspects the fifth Sub category title', () => {

    stateAdministrativeSub.fifthSubTitle();

})

Then('User sees the fifth associated measures', () => {

    stateAdministrativeSub.fifthMeasureList();

})

Given('User visits the T-MSIS Data Quality: Number of Open Top Priority Issues page', () => {

    cy.visit('/state-overviews/scorecard/t-msis-data-quality-open-top-priority-issues/index.html');

})

When('User inspects the sixth breadcrumbs', () => {

    stateAdministrativeSub.sixthSubBreadcrumbs();

})

When('User inspects the sixth Sub category title', () => {

    stateAdministrativeSub.sixthSubTitle();

})

Then('User sees the sixth associated measures', () => {

    stateAdministrativeSub.sixthMeasureList();

})

Given('User visits the Initiation of Collaborative Investigations Between States and CMS’s Unified Program Integrity Contractors page', () => {

    cy.visit('/state-overviews/scorecard/investigations-between-states-and-unified-program-integrity-contractors/index.html');

})

When('User inspects the seventh breadcrumbs', () => {

    stateAdministrativeSub.seventhSubBreadcrumbs();

})

When('User inspects the seventh Sub category title', () => {

    stateAdministrativeSub.seventhSubTitle();

})

Then('User sees the seventh associated measures', () => {

    stateAdministrativeSub.seventhMeasureList();

})

Given('User visits the Healthcare Fraud Prevention Partnership Participation page', () => {

    cy.visit('/state-overviews/scorecard/healthcare-fraud-prevention-partnership-participation/index.html');

})

When('User inspects the eighth breadcrumbs', () => {

    stateAdministrativeSub.eighthSubBreadcrumbs();

})

When('User inspects the eighth Sub category title', () => {

    stateAdministrativeSub.eighthSubTitle();

})

Then('User sees the eighth associated measures', () => {

    stateAdministrativeSub.eighthMeasureList();

})

Given('User visits the Payment Error Rate Measurement PERM page', () => {

    cy.visit('/state-overviews/scorecard/payment-error-rate-measurement/index.html');

})

When('User inspects the ninth breadcrumbs', () => {

    stateAdministrativeSub.ninthSubBreadcrumbs();

})

When('User inspects the ninth Sub category title', () => {

    stateAdministrativeSub.ninthSubTitle();

})

Then('User sees the ninth associated measures', () => {

    stateAdministrativeSub.ninthMeasureList();

})


