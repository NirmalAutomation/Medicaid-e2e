/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { nationalContext } from "../../pages/national-context/national-context-page"
import { rightNavBlock } from "../../pages/right-nav-block";

beforeEach(() => {
    cy.medicaidLanding();
})

Given('User visits the National Context page', () => {

    cy.visit('/state-overviews/scorecard/national-context/index.html')

})

When('User inspects the breadcrumbs', () => {

    nationalContext.breadcrumbs();

})

When('User inspects the pillar title', () => {

    nationalContext.pillarTitle();

})

Then('User sees the associated sub categories', () => {

    nationalContext.subCategoryList();

})

Then('User sees right navigation bar', () => {

    rightNavBlock.rightNavElements();

})

When('User selects the Who Enrolls in Medicaid & CHIP? title', () => {

    nationalContext.selectFirstCategory();

})

Then('User sees the Who Enrolls in Medicaid & CHIP? page', () => {

    cy.url().should('include', '/state-overviews/scorecard/who-enrolls-medicaid-chip/index.html');

})

When('User selects the How do States Deliver Care in Medicaid? title', () => {

    nationalContext.selectSecondCategory();

})

Then('User sees the How do States Deliver Care in Medicaid? page', () => {

    cy.url().should('include', '/state-overviews/scorecard/how-states-deliver-care-medicaid/index.html');

})

When('User selects the What Data are CMS & States Developing to Support Program Improvement? title', () => {

    nationalContext.selectThirdCategory();

})

Then('User sees the What Data are CMS & States Developing to Support Program Improvement? page', () => {

    cy.url().should('include', '/state-overviews/scorecard/data-support-program-improvement/index.html');

})

When('User selects the What are Annual Expenditures for Medicaid & CHIP? title', () => {

    nationalContext.selectFourthCategory();

})

Then('User sees the What are Annual Expenditures for Medicaid & CHIP? page', () => {

    cy.url().should('include', '/state-overviews/scorecard/annual-expenditures-medicaid-chip/index.html');

})