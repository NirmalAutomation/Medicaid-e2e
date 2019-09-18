/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { antipsychoticsChildren } from "../../pages/d3-measures/use-multiple-antipsychotics-children"
import { pillar1Measure } from "../../pages/pillar-1-measure"

beforeEach(() => {

    cy.medicaidLanding();

})

Given('User visits the measure page', () => {

    cy.visit('/state-overviews/scorecard/use-multiple-antipsychotics-children/index.html');

})

When('User inspects the measure title', () => {

    pillar1Measure.measureTitle();

})

Then('User sees VISIT THE PILLAR', () => {

    pillar1Measure.visitThePillar();

})

Then('User sees VISIT THE DOMAIN', () => {

    pillar1Measure.visitTheDomain();

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

Then('User inspects color of NR', () => {

    pillar1Measure.colorOfNR();

})

Then('User inspects colot of bars', () => {

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

    antipsychoticsChildren.medianRate();

})

Then('User sees 51 states list', () => {

    pillar1Measure.stateListQuality();

})

Then('User sees state rates based on A to Z order', () => {

    antipsychoticsChildren.rateList();

})

When('User inspects the Medicaid only population legend', () => {

    pillar1Measure.colorOfMedicaidOnly();

})

When('User inspects the Medicaid and Chip population legend', () => {

    pillar1Measure.colorOfMedicaidAndChip();

})

Then('User sees the Wyoming State Specific Comment', () => {

    antipsychoticsChildren.stateSpecificWY();

})

Then('User sees the Washington State Specific Comment', () => {

    antipsychoticsChildren.stateSpecificWA();

})

Then('User sees the Alabama State Specific Comment', () => {

    antipsychoticsChildren.stateSpecificAL();

})

Then('User sees the Connecticut State Specific Comment', () => {

    antipsychoticsChildren.stateSpecificCT();

})