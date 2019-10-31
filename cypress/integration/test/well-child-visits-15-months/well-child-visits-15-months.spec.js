/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { wellChild15 } from "../../pages/scorecard/pillar-1/d3-measures/well-child-visits-15-months"
import { pillar1Measure } from "../../pages/scorecard/pillar-1/pillar-1-measure-common"

beforeEach(() => {
    cy.medicaidLanding();
})

Given('User visits the measure page', () => {

    cy.visit('/state-overviews/scorecard/well-child-visits-first-15-months-of-life/index.html');

})

When('User inspects the measure title', () => {

    wellChild15.measureTitle();

})

Then('User sees VISIT THE PILLAR', () => {

    pillar1Measure.visitThePillar();

})

Then('User sees VISIT THE DOMAIN', () => {

    wellChild15.visitTheDomain();

})

Then('User sees LEARN MORE link', () => {

    pillar1Measure.learnMore();

})

Then('User sees the viz title', () => {

    wellChild15.vizTitle();

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

    wellChild15.medianRate();

})

Then('User sees 51 states list', () => {

    pillar1Measure.stateListQuality();

})

Then('User sees state rates based on A to Z order', () => {

    wellChild15.rateList();

})

When('User inspects the Medicaid only population legend', () => {

    pillar1Measure.colorOfMedicaidOnly();

})

When('User inspects the Chip only population legend', () => {

    pillar1Measure.colorOfChipOnly();

})

When('User inspects the Medicaid and Chip population legend', () => {

    pillar1Measure.colorOfMedicaidAndChip();

})

Then('User sees the West Virginia State Specific Comment', () => {

    wellChild15.stateSpecificWV();

})