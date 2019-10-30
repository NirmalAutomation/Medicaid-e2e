/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { initiationEngagement } from "../../pages/scorecard/pillar-1/d3-measures/initiation-and-engagement"
import { pillar1Measure } from "../../pages/scorecard/pillar-1/pillar-1-measure-common"

beforeEach(() => {
    cy.medicaidLanding();
})

Given('User visits the measure page', () => {

    cy.visit('/state-overviews/scorecard/initiation-engagement-alcohol-drug-dependence-treatment/index.html');

})

When('User inspects the measure title', () => {

    initiationEngagement.measureTitle();

})

Then('User sees VISIT THE PILLAR', () => {

    pillar1Measure.visitThePillar();

})

Then('User sees VISIT THE DOMAIN', () => {

    initiationEngagement.visitTheDomain();

})

Then('User sees LEARN MORE link', () => {

    pillar1Measure.learnMore();

})


Then('User sees the legend icons', () => {

    pillar1Measure.legendIcons();

})

Then('User sees the population types', () => {

    pillar1Measure.populationTypes();

})

Then('User sees the filter container labels', () => {

    pillar1Measure.filtersContainerElements();

})

When('User selects State Z to A on Sort By', () => {

    pillar1Measure.selectSortOptionsZA();

})

When('User selects State A to Z on Sort By', () => {

    pillar1Measure.selectSortOptionsAZ();

})

When('User selects State Highest to Lowest on Sort By', () => {

    pillar1Measure.selectSortOptionsHighest();

})

When('User selects State Lowest to Highest on Sort By', () => {

    pillar1Measure.selectSortOptionsLowest();

})

Then('User clicks on Reset All button', () => {

    pillar1Measure.clickResetAllBtn();

})

When('User inspects the Visualization Total AOD title', () => {

    initiationEngagement.totalAODTitle();

})

When('User validates the Total AOD median rate', () => {

    initiationEngagement.totalAODMedianRateInitiation();

})

Then('User sees 51 states list', () => {

    pillar1Measure.stateListQuality();

})

When('User inspects the Visualization Alcohol Abuse title', () => {

    initiationEngagement.alcoholAbuseTitle();

})

When('User validates the Alcohol Abuse median rate', () => {

    initiationEngagement.totalAODMedianRateInitiation();

})

When('User inspects the Visualization Opioid Abuse title', () => {

    initiationEngagement.opioidAbuseTitle();

})

When('User validates the Opioid Abuse median rate', () => {

    initiationEngagement.opioidAbuseMedianRateInitiation();

})

When('User inspects the Visualization Other Drug Abuse title', () => {

    initiationEngagement.otherDrugTitle();

})

When('User validates the Other Drug Abuse median rate', () => {

    initiationEngagement.otherDrugMedianRateInitiation();

})