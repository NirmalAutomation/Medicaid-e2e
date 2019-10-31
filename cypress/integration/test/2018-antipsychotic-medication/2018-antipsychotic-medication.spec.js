/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { antipsychoticMedication } from "../../pages/scorecard/pillar-1/d3-measures/2018-antipsychotic-measure-21"
import { pillar1Measure } from "../../pages/scorecard/pillar-1/pillar-1-measure-common"

beforeEach(() => {
    cy.medicaidLanding();
})

Given('User visits the measure page', () => {

    cy.visit('/state-overviews/scorecard/long-term-nursing-home-residents-antipsychotic-medication/index.html');

})

When('User inspects the measure title', () => {

    antipsychoticMedication.measureTitle();

})

Then('User sees VISIT THE PILLAR', () => {

    pillar1Measure.visitThePillar();

})

Then('User sees VISIT THE DOMAIN', () => {

    antipsychoticMedication.visitTheDomain();

})

Then('User sees LEARN MORE link', () => {

    pillar1Measure.learnMore();

})

Then('User sees the viz title', () => {

    antipsychoticMedication.vizTitle();

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

When('User inspects style of State text', () => {

    pillar1Measure.styleOfState();

})

When('User inspects style of Rate text', () => {

    pillar1Measure.styleOfRate();

})

When('User inspects style of Median', () => {

    pillar1Measure.styleOfMedian();

})

Then('User inspects color of Median line', () => {

    pillar1Measure.colorOfMedianLine();

})

Then('User inspects color of bars', () => {

    pillar1Measure.colorOfBars();

})

Then('User sees top line titles', () => {

    pillar1Measure.topLineTitles();

})

Then('User sees X axis top percentile', () => {

    pillar1Measure.chartXAxisTop();

})

Then('User sees X axis bottom percentile', () => {

    pillar1Measure.chartXAxisBottom();

})

When('User validates the median rate', () => {

    antipsychoticMedication.medianRate();

})

Then('User sees 51 states and 2 Unions list', () => {

    antipsychoticMedication.stateAndUnionList();

})

Then('User sees state rates based on A to Z order', () => {

    antipsychoticMedication.rateList();

})

When('User inspects the Medicaid or Medicaid legend', () => {

    pillar1Measure.colorOfMedicareOrMedicaid();

})

Then('User sees the Wyoming State Specific Comment', () => {

    antipsychoticMedication.stateSpecificWY();

})