/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { federalAdministrativeSub } from "../../pages/pillar-3/pillar-3-subcategory"
import { rightNavBlock } from "../../pages/right-nav-block";

beforeEach(() => {
    cy.medicaidLanding();
})

Given('User visits the State Plan Amendment and 1915 Waiver Processing page', () => {

    cy.visit('/state-overviews/scorecard/federal-spa-1915-processing/index.html');

})

When('User inspects the first sub breadcrumbs', () => {

    federalAdministrativeSub.firstSubBreadcrumbs();

})

When('User inspects the first Sub category title', () => {

    federalAdministrativeSub.firstSubTitle();

})

Then('User sees VISIT THE PILLAR', () => {

    federalAdministrativeSub.visitThePillar();

})

Then('User sees the first associated measures', () => {

    federalAdministrativeSub.firstMeasureList();

})

Then('User sees right navigation bar', () => {

    rightNavBlock.rightNavElements();

})

Given('User visits the Section 1115 Demonstrations: Time from Submission to Approval page', () => {

    cy.visit('/state-overviews/scorecard/section-1115-demonstrations/index.html');

})

When('User inspects the second sub breadcrumbs', () => {

    federalAdministrativeSub.secondSubBreadcrumbs();

})

When('User inspects the second Sub category title', () => {

    federalAdministrativeSub.secondSubTitle();

})

Then('User sees the second associated measures', () => {

    federalAdministrativeSub.secondMeasureList();

})

Given('User visits the Managed Care Capitation Rate Review: Total Days to Approve Rates page', () => {

    cy.visit('/state-overviews/scorecard/managed-care-capitation-rate-days-to-approve-rates/index.html');

})

When('User inspects the third breadcrumbs', () => {

    federalAdministrativeSub.thirdSubBreadcrumbs();

})

When('User inspects the third Sub category title', () => {

    federalAdministrativeSub.thirdSubTitle();

})

Then('User sees the third associated measures', () => {

    federalAdministrativeSub.thirdMeasureList();

})

Given('User visits the Managed Care Capitation Rate Review: Days Under CMS Review page', () => {

    cy.visit('/state-overviews/scorecard/managed-care-capitation-rate-days-under-cms-review/index.html');

})

When('User inspects the fourth breadcrumbs', () => {

    federalAdministrativeSub.fourthSubBreadcrumbs();

})

When('User inspects the fourth Sub category title', () => {

    federalAdministrativeSub.fourthSubTitle();

})

Then('User sees the fourth associated measures', () => {

    federalAdministrativeSub.fourthMeasureList();

})

Given('User visits the Managed Care Contract Review page', () => {

    cy.visit('/state-overviews/scorecard/managed-care-contract-review/index.html');

})

When('User inspects the fifth breadcrumbs', () => {

    federalAdministrativeSub.fifthSubBreadcrumbs();

})

When('User inspects the fifth Sub category title', () => {

    federalAdministrativeSub.fifthSubTitle();

})

Then('User sees the fifth associated measures', () => {

    federalAdministrativeSub.fifthMeasureList();

})
