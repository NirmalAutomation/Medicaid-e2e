/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { nationalContextA } from "../../pages/scorecard/national-context/nc-subcategory-a"
import { rightNavBlock } from "../../pages/scorecard/common-helpers/right-nav-block";

beforeEach(() => {
    cy.medicaidLanding();
})

Given('User visits the Who Enrolls in Medicaid & CHIP? page', () => {

    cy.visit('/state-overviews/scorecard/who-enrolls-medicaid-chip/index.html')

})

When('User inspects the first sub breadcrumbs', () => {

    nationalContextA.firstSubBreadcrumbs();

})

When('User inspects the first Sub category title', () => {

    nationalContextA.firstSubTitle();

})

Then('User sees VISIT THE PILLAR', () => {

    nationalContextA.visitThePillar();

})

Then('User sees the first associated measures', () => {

    nationalContextA.firstMeasureList();

})

Then('User sees right navigation bar', () => {

    rightNavBlock.rightNavElements();

})

Given('User visits the How do States Deliver Care in Medicaid? page', () => {

    cy.visit('/state-overviews/scorecard/how-states-deliver-care-medicaid/index.html');

})

When('User inspects the second sub breadcrumbs', () => {

    nationalContextA.secondSubBreadcrumbs();

})

When('User inspects the second Sub category title', () => {

    nationalContextA.secondSubTitle();

})

Then('User sees the second associated measures', () => {

    nationalContextA.secondMeasureList();

})

Given('User visits the What Data are CMS & States Developing to Support Program Improvement? page', () => {

    cy.visit('/state-overviews/scorecard/data-support-program-improvement/index.html');

})

When('User inspects the third sub breadcrumbs', () => {

    nationalContextA.thirdSubBreadcrumbs();

})

When('User inspects the third Sub category title', () => {

    nationalContextA.thirdSubTitle();

})

Then('User sees the third associated measures', () => {

    nationalContextA.thirdMeasureList();

})