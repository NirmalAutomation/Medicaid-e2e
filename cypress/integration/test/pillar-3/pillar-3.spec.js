/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { federalAdministrative } from "../../pages/pillar-3/pillar-3-page"
import { rightNavBlock } from "../../pages/right-nav-block";

beforeEach(() => {
    cy.medicaidLanding();
})

Given('User visits the Federal Administrative Accountability page', () => {

    cy.visit('/state-overviews/scorecard/federal-administrative-accountability/index.html')

})

When('User inspects the breadcrumbs', () => {

    federalAdministrative.breadcrumbs();

})

When('User inspects the pillar title', () => {

    federalAdministrative.pillarTitle();
})

Then('User sees the associated sub categories', () => {

    federalAdministrative.subCategoryList();

})

Then('User sees right navigation bar', () => {

    rightNavBlock.rightNavElements();

})

When('User selects the State Plan Amendment and 1915 Waiver Processing title', () => {

    federalAdministrative.selectFirstCategory();

})

Then('User sees the State Plan Amendment and 1915 Waiver Processing page', () => {

    cy.url().should('include', '/state-overviews/scorecard/federal-spa-1915-processing/index.html');

})

When('User selects the Section 1115 Demonstrations: Time from Submission to Approval title', () => {

    federalAdministrative.selectSecondCategory();

})

Then('User sees the Section 1115 Demonstrations: Time from Submission to Approval page', () => {

    cy.url().should('include', '/state-overviews/scorecard/section-1115-demonstrations/index.html');

})

When('User selects the Managed Care Capitation Rate Review: Total Days to Approve Rates title', () => {

    federalAdministrative.selectThirdCategory();
})

Then('User sees the Managed Care Capitation Rate Review: Total Days to Approve Rates page', () => {

    cy.url().should('include', '/state-overviews/scorecard/managed-care-capitation-rate-days-to-approve-rates/index.html');
})

When('User selects the Managed Care Capitation Rate Review: Days Under CMS Review title', () => {

    federalAdministrative.selectFourthCategory();
})

Then('User sees the Managed Care Capitation Rate Review: Days Under CMS Review page', () => {

    cy.url().should('include', '/state-overviews/scorecard/managed-care-capitation-rate-days-under-cms-review/index.html');

})

When('User selects the Managed Care Contract Review title', () => {

    federalAdministrative.selectFifthCategory();
})

Then('User sees the Managed Care Contract Review page', () => {

    cy.url().should('include', '/state-overviews/scorecard/managed-care-contract-review/index.html');

})
