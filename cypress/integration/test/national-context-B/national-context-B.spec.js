/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { nationalContextB } from "../../pages/scorecard/national-context/nc-subcategory-b"
import { rightNavBlock } from "../../pages/scorecard/right-nav-block";

beforeEach(() => {
    cy.medicaidLanding();
})

Given('User visits the What are Annual Expenditures for Medicaid & CHIP? page', () => {

    cy.visit('/state-overviews/scorecard/annual-expenditures-medicaid-chip/index.html')

})

When('User inspects the first sub breadcrumbs', () => {

    nationalContextB.firstSubBreadcrumbs();

})

When('User inspects the first Sub category title', () => {

    nationalContextB.firstSubTitle();

})

Then('User sees VISIT THE PILLAR', () => {

    nationalContextB.visitThePillar();

})

Then('User sees the first associated measures', () => {

    nationalContextB.firstMeasureList();

})

Then('User sees right navigation bar', () => {

    rightNavBlock.rightNavElements();

})

When('User selects the Annual Medicaid & CHIP Expenditures title', () => {

    nationalContextB.selectFirstMeasure();

})

Then('User sees the Annual Medicaid & CHIP Expenditures page', () => {

    cy.url().should('include', '/state-overviews/scorecard/annual-medicaid-chip-expenditures/index.html');

})

When('User selects the How Much Do States Spend Per Medicaid Enrollee? title', () => {

    nationalContextB.selectSecondMeasure();

})

Then('User sees the How Much Do States Spend Per Medicaid Enrollee? page', () => {

    cy.url().should('include', '/state-overviews/scorecard/how-much-states-spend-per-medicaid-enrollee/index.html');

})

When('User selects the Long-Term Services and Supports Expenditures on Home & Community-Based Services title', () => {

    nationalContextB.selectThirdMeasure();

})

Then('User sees the Long-Term Services and Supports Expenditures on Home & Community-Based Services page', () => {

    cy.url().should('include', '/state-overviews/scorecard/ltss-expenditures-on-hcbs/index.html');

})