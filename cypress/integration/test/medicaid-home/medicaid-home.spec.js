/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { medicaidHome } from "../../pages/medicaid-home"

beforeEach(() => {
    cy.medicaidLanding();
})

Given('User visits the medicaid home page', () => {

    cy.url().should('eq', 'https://dev.medicaid.gov/');

    // cy.url().should('eq', 'https://imp.medicaid.gov/');

})

Then('User sees Medicaid gov logo', () => {

    medicaidHome.medicaidLogo();

})

Then('User sees secondary header navigation', () => {

    medicaidHome.headerNavSecondary();

})

When('User inspects search feature', () => {

    medicaidHome.searchContainer();

})

Then('User sees mega menu block', () => {

    medicaidHome.mainMenuList();

})

Then('User sees Related Sites', () => {

    medicaidHome.relatedSitesLinks();

})

Then('User sees Helpful Links', () => {

    medicaidHome.helpfulLinks();

})

When('User inspects Sign Up block', () => {

    medicaidHome.signUpText();
    medicaidHome.yourEmailAddress();
    medicaidHome.signUpBtn();

})

Then('User enter email address', () => {

    medicaidHome.enterEmailAddress();

})

Then('User sees footer logo', () => {

    medicaidHome.usaFooterLogo();

})

Then('User sees footer logo header', () => {

    medicaidHome.usaFooterLogoHeading();

})

Then('User sees Twitter and Youtube logos', () => {

    medicaidHome.twitterIcon();
    medicaidHome.youtubeIcon();

})

Then('User sees footer contact heading', () => {

    medicaidHome.footerContactHeading();

})

When('User selects Scorecard link from State Overviews menu', () => {

    cy.scorecardPageNavigation();

})

Then('User sees Scorecard landing page', () => {

    cy.url().should('include', '/state-overviews/scorecard/index.html');

})