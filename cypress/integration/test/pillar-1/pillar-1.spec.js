/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { systemHealthSystemPillar } from "../../pages/pillar-1/pillar-1-page"
import { rightNavBlock } from "../../pages/right-nav-block";

beforeEach(() => {
    cy.medicaidLanding();
})

Given('User visits the State Health System Performance page', () => {

    cy.visit('/state-overviews/scorecard/state-health-system-performance/index.html');

})

When('User inspects the breadcrumbs', () => {

    systemHealthSystemPillar.breadcrumbs();

})

When('User inspects the pillar title', () => {

    systemHealthSystemPillar.pillarTitle();

})

Then('User sees the associated sub categories', () => {

    systemHealthSystemPillar.subCategoryList();

})

Then('User sees right navigation bar', () => {

    rightNavBlock.rightNavElements();

})

Then('User sees Visit a Domain section', () => {

    systemHealthSystemPillar.visitADomainText();

})

When('User selects a domain drop down', () => {

    systemHealthSystemPillar.selectDomainDropDown();

})

Then('User sees the pillar 1 domains', () => {

    systemHealthSystemPillar.pillarTitle();

})

When('User selects the Make Care Affordable domain', () => {

    systemHealthSystemPillar.selectDomainName();

})

Then('User visits the Make Care Affordable domain', () => {

    cy.url().should('include', '/state-overviews/scorecard/make-care-affordable/index.html');

})

Then('User sees Make Care Affordable domain title', () => {

    cy.get('h1')
        .should('contain', 'Make Care Affordable');

})

When('User enters the Promote Effective Prevention Treatment of Chronic Diseases domain', () => {

    systemHealthSystemPillar.typeDomainName();

})

Then('User visits the Promote Effective Prevention Treatment of Chronic Diseases domain', () => {

    cy.url().should('contain', '/state-overviews/scorecard/promote-prevention-treatment-chronic-diseases/index.html');

})

Then('User sees Promote Effective Prevention Treatment of Chronic Diseases title', () => {

    cy.get('h1')
        .should('contain', 'Promote Effective Prevention & Treatment of Chronic Diseases');

})

Then('User sees the table grids', () => {

    systemHealthSystemPillar.antipsychoticsChildrenAdolescents();
    systemHealthSystemPillar.followup6_20();
    systemHealthSystemPillar.followup21_older();
    systemHealthSystemPillar.pqiDiabetes();
    systemHealthSystemPillar.numberLongStayNursing();
    systemHealthSystemPillar.percentageAntipsychoticMedication();
    systemHealthSystemPillar.prenatalPostpartumCare();
    systemHealthSystemPillar.liveBirths();
    systemHealthSystemPillar.wellChildFirst15();
    systemHealthSystemPillar.wellChildThirdFourth();
    systemHealthSystemPillar.adolescentWellCare();
    systemHealthSystemPillar.immunizationsAdolescents();
    systemHealthSystemPillar.percentagePreventiveDental();
    systemHealthSystemPillar.useOpioidsHighDosage();
    systemHealthSystemPillar.initiationEngagement();
    systemHealthSystemPillar.comprehensiveDiabetesCare();
    systemHealthSystemPillar.controllingHighBlood();
    systemHealthSystemPillar.breastCancer();
    systemHealthSystemPillar.stateCareSurveysBene();
    systemHealthSystemPillar.ambulatoryCare();
    systemHealthSystemPillar.adultEmergencyDept();
    systemHealthSystemPillar.longTermServices();

})

Then('User sees the snack size visualization', () => {

    cy.wait(5000);
    systemHealthSystemPillar.antipsychoticsChildrenAdolescentsSnack();
    systemHealthSystemPillar.followup6_20Snack();
    systemHealthSystemPillar.followup21_olderSnack();
    systemHealthSystemPillar.percentageAntipsychoticMedicationSnack();
    systemHealthSystemPillar.prenatalPostpartumCareSnack();
    systemHealthSystemPillar.liveBirthsSnack();
    systemHealthSystemPillar.wellChildFirst15Snack();
    systemHealthSystemPillar.wellChildThirdFourthSnack();
    systemHealthSystemPillar.adolescentWellCareSnack();
    systemHealthSystemPillar.immunizationsAdolescentsSnack();
    systemHealthSystemPillar.percentagePreventiveDentalSnack();
    systemHealthSystemPillar.initiationEngagementSnack();
    systemHealthSystemPillar.comprehensiveDiabetesCareSnack();
    systemHealthSystemPillar.controllingHighBloodSnack();
    systemHealthSystemPillar.breastCancerSnack();
})

