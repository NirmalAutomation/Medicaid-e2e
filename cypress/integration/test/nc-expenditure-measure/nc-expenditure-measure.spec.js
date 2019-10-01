/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { ncExpenditureMeasure } from "../../pages/national-context/nc-expenditure-measure"
import { rightNavBlock } from "../../pages/right-nav-block";

beforeEach(() => {
    cy.medicaidLanding();
})

Given('User visits the Annual Medicaid & CHIP Expenditures page', () => {

    cy.visit('/state-overviews/scorecard/annual-medicaid-chip-expenditures/index.html');

})

When('User inspects the first measure breadcrumbs', () => {

    ncExpenditureMeasure.firstMeasureBreadcrumbs();

})

When('User inspects the first measure title', () => {

    ncExpenditureMeasure.firstMeasure();

})

Then('User sees VISIT THE PILLAR', () => {

    ncExpenditureMeasure.visitThePillar();

})

Then('User sees the first measure lists', () => {

    ncExpenditureMeasure.firstMeasureList();

})

Then('User sees right navigation bar', () => {

    rightNavBlock.rightNavElements();

})

Given('User visits the How Much Do States Spend Per Medicaid Enrollee page', () => {

    cy.visit('/state-overviews/scorecard/how-much-states-spend-per-medicaid-enrollee/index.html');

})

When('User inspects the second measure breadcrumbs', () => {

    ncExpenditureMeasure.secondMeasureBreadcrumbs();

})

When('User inspects the second measure title', () => {

    ncExpenditureMeasure.secondMeasure();

})

Then('User sees the second measure lists', () => {

    ncExpenditureMeasure.secondMeasureList();

})


Given('User visits the Long Term Services and Supports Expenditures on Home Community Based Services page', () => {

    cy.visit('/state-overviews/scorecard/ltss-expenditures-on-hcbs/index.html');

})

When('User inspects the third measure breadcrumbs', () => {

    ncExpenditureMeasure.thirdMeasureBreadcrumbs();

})

When('User inspects the third measure title', () => {

    ncExpenditureMeasure.thirdMeasure();

})
