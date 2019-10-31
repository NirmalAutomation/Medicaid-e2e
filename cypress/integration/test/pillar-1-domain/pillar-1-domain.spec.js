/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { pillar1Domain } from "../../pages/scorecard/pillar-1/pillar-1-domain"
import { rightNavBlock } from "../../pages/scorecard/common-helpers/right-nav-block";

beforeEach(() => {
    cy.medicaidLanding();
})

Given('User visits the Promote Effective Prevention & Treatment of Chronic Diseases page', () => {

    cy.visit('/state-overviews/scorecard/promote-prevention-treatment-chronic-diseases/index.html');

})

When('User inspects the first domain breadcrumbs', () => {

    pillar1Domain.firstBreadcrumbs();

})

When('User inspects the first domain title', () => {

    pillar1Domain.firstDomainTitle();

})

Then('User sees VISIT THE PILLAR', () => {

    pillar1Domain.visitThePillar();

})

Then('User sees the first associated measures', () => {

    cy.wait(2000);

    pillar1Domain.prenatalPostpartumCare();

    pillar1Domain.liveBirths();

    pillar1Domain.wellChildFirst15();

    pillar1Domain.wellChildThirdFourth();

    pillar1Domain.adolescentWellCare();

    pillar1Domain.immunizationsAdolescents();

    pillar1Domain.percentagePreventiveDental();

    pillar1Domain.useOpioidsHighDosage();

    pillar1Domain.initiationEngagement();

    pillar1Domain.comprehensiveDiabetesCare();

    pillar1Domain.controllingHighBlood();

    pillar1Domain.breastCancer();

})

Then('User sees the first snack size visualization', () => {

    pillar1Domain.prenatalPostpartumCareSnack();
    pillar1Domain.liveBirthsSnack();
    pillar1Domain.wellChildFirst15Snack();
    pillar1Domain.wellChildThirdFourthSnack();
    pillar1Domain.adolescentWellCareSnack();
    pillar1Domain.immunizationsAdolescentsSnack();
    pillar1Domain.percentagePreventiveDentalSnack();
    pillar1Domain.initiationEngagementSnack();
    pillar1Domain.comprehensiveDiabetesCareSnack();
    pillar1Domain.controllingHighBloodSnack();
    pillar1Domain.breastCancerSnack();
})

Then('User sees right navigation bar', () => {

    rightNavBlock.rightNavElements();

})

Given('User visits the Promote Effective Communication & Coordination of Care page', () => {

    cy.visit('/state-overviews/scorecard/promote-effective-communication-coordination-care/index.html');
    cy.wait(5000);

})

When('User inspects the second domain breadcrumbs', () => {

    pillar1Domain.secondBreadcrumbs();

})

When('User inspects the second domain title', () => {

    pillar1Domain.secondDomainTitle();

})

Then('User sees the second associated measures', () => {

    pillar1Domain.antipsychoticsChildrenAdolescents();

    pillar1Domain.followup6_20();

    pillar1Domain.followup21_older();

    pillar1Domain.pqiDiabetes();

    pillar1Domain.numberLongStayNursing();

})

Then('User sees the second snack size visualization', () => {

    pillar1Domain.antipsychoticsChildrenAdolescentsSnack();

    pillar1Domain.followup6_20Snack();

    pillar1Domain.followup21_olderSnack();

})

Given('User visists the Work with Communities to Promote Best Practices of Healthy Living page', () => {

    cy.visit('/state-overviews/scorecard/promote-best-practices-healthy-living/index.html');

})

When('User inspects the third domain breadcrumbs', () => {

    pillar1Domain.thirdBreadcrumbs();

})

When('User inspects the third domain title', () => {

    pillar1Domain.thirdDomainTitle();

})

Then('User sees the third associated measures', () => {

    pillar1Domain.longTermServices();

})

Given('User visits the Strengthen Person & Family Engagement as Partners in their Care', () => {

    cy.visit('/state-overviews/scorecard/strengthen-person-family-engagement-care/index.html');

})

When('User inspects the fourth domain breadcrumbs', () => {

    pillar1Domain.fourthBreadcrumbs();

})

When('User inspects the fourth domain title', () => {

    pillar1Domain.fourthDomainTitle();

})

Then('User sees the fourth associated measures', () => {

    pillar1Domain.stateCareSurveysBene();

})

Given('User visits the Make Care Affordable page', () => {

    cy.visit('/state-overviews/scorecard/make-care-affordable/index.html');

})

When('User inspects the fifth domain breadcrumbs', () => {

    pillar1Domain.fifthBreadcrumbs();

})

When('User inspects the fifth domain title', () => {

    pillar1Domain.fifthDomainTitle();

})

Then('User sees the fifth associated measures', () => {

    pillar1Domain.ambulatoryCare();

})

Given('User visits the Make Care Safer by Reducing Harm page', () => {

    cy.visit('/state-overviews/scorecard/making-care-safer-reducing-harm/index.html');

    cy.wait(2000);

})

When('User inspects the sixth domain breadcrumbs', () => {

    pillar1Domain.sixthBreadcrumbs();

})

When('User inspects the sixth domain title', () => {

    pillar1Domain.sixthDomainTitle();

})

Then('User sees the sixth associated measures', () => {

    pillar1Domain.percentageAntipsychoticMedication();

})

Then('User sees the sixth snack size visualization', () => {

    pillar1Domain.percentageAntipsychoticMedicationSnack();

})