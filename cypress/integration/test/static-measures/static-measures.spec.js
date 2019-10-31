/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { staticMeasures } from "../../pages/scorecard/pillar-1/non-d3-measures/static-measures"
import { pillar1Measure } from "../../pages/scorecard/pillar-1/pillar-1-measure-common"

beforeEach(() => {
    cy.medicaidLanding();
})

Given('User visits the PQI 01 Diabetes Short Term page', () => {

    cy.visit('/state-overviews/scorecard/diabetes-short-term-complications-admission-rate/index.html');

})

When('User inspects the PQI measure title', () => {

    staticMeasures.measureTitlePQI();

})

Then('User sees VISIT THE PILLAR', () => {

    pillar1Measure.visitThePillar();

})

Then('User sees PQI VISIT THE DOMAIN', () => {

    staticMeasures.visitTheDomainPQI();

})

Then('User sees LEARN MORE link', () => {

    pillar1Measure.learnMore();

})

Then('User sees the PQI viz title', () => {

    staticMeasures.vizTitlePQI();

})

Then('User sees the PQI legend section', () => {

    staticMeasures.vizLegendPQI();

})

Then('User sees the PQI static visualization', () => {

    staticMeasures.vizChartPQI();

})

Given('User visits the Number of Hospitalizations per 1000 Long Stay page', () => {

    cy.visit('/state-overviews/scorecard/hospitalizations-per-1000-long-stay-nursing-home-days/index.html');

})

When('User inspects the 1000 measure title', () => {

    staticMeasures.measureTitle1000();

})

Then('User sees 1000 VISIT THE DOMAIN', () => {

    staticMeasures.visitTheDomain1000();

})

Then('User sees the 1000 viz title', () => {

    staticMeasures.vizTitle1000();

})


Then('User sees the 1000 legend section', () => {

    staticMeasures.vizLegend1000();

})

Then('User sees the 1000 static visualization', () => {

    staticMeasures.vizChart1000();

})

Given('User visits the State Use of Experience of Care Surveys page', () => {

    cy.visit('/state-overviews/scorecard/state-use-patient-surveys-ltss-beneficiaries/index.html');

})

When('User inspects the Survey measure title', () => {

    staticMeasures.measureTitleSurvey();

})

Then('User sees Survey VISIT THE DOMAIN', () => {

    staticMeasures.visitTheDomainSurvey();

})


Then('User sees the Survey static visualization', () => {

    staticMeasures.vizChartSurvey();

})

Given('User visits the Ambulatory Care page', () => {

    cy.visit('/state-overviews/scorecard/ambulatory-care-emergency-department-visits/index.html');

})

When('User inspects the Ambulatory measure title', () => {

    staticMeasures.measureTitleAmbulatory();

})

Then('User sees Ambulatory VISIT THE DOMAIN', () => {

    staticMeasures.visitTheDomainAmbulatory();

})

Then('User sees the Ambulatory viz title', () => {

    staticMeasures.vizTitleAmbulatory();

})

Then('User sees the Ambulatory legend section', () => {

    staticMeasures.vizLegendAmbulatory();
})

Then('User sees the Ambulatory static visualization', () => {

    staticMeasures.vizChartAmbulatory();

})