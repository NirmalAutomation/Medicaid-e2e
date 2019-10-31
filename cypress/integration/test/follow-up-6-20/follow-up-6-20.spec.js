/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { followUp6To20 } from "../../pages/scorecard/pillar-1/d3-measures/follow-up-6-20"
import { pillar1Measure } from "../../pages/scorecard/pillar-1/pillar-1-measure-common"

beforeEach(() => {
    cy.medicaidLanding();
})

Given('User visits the measure page', () => {

    cy.visit('/state-overviews/scorecard/follow-up-after-hospitalization-mental-illness-ages-6-20/index.html');

})

When('User inspects the measure title', () => {

    followUp6To20.measureTitle();

})

Then('User sees VISIT THE PILLAR', () => {

    pillar1Measure.visitThePillar();

})

Then('User sees VISIT THE DOMAIN', () => {

    followUp6To20.visitTheDomain();

})

Then('User sees LEARN MORE link', () => {

    pillar1Measure.learnMore();

})

Then('User sees the viz title', () => {

    followUp6To20.vizTitle();

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

When('User validates the 7 day median rate', () => {

    followUp6To20.medianRate7Day();

})

When('User validates the 30 day median rate', () => {

    followUp6To20.medianRate30Day();

})

Then('User sees 51 states list', () => {

    pillar1Measure.stateListQuality();

})

When('User inspects the Chip only population legend', () => {

    pillar1Measure.colorOfChipOnly();

})

When('User inspects the Medicaid only population legend', () => {

    pillar1Measure.colorOfMedicaidOnly();

})

When('User inspects the Medicaid and Chip population legend', () => {

    pillar1Measure.colorOfMedicaidAndChip();

})

Then('User clicks on 30 day follow up toggle button', () => {

    followUp6To20.toggle30DayFollow();

})

Then('User sees the 7 day Wyoming State Specific Comment', () => {

    followUp6To20.stateSpecificWY7Day();

})

Then('User sees the 7 day Washington State Specific Comment', () => {

    followUp6To20.stateSpecificWA7Day();

})

Then('User sees the 7 day Alabama State Specific Comment', () => {

    followUp6To20.stateSpecificAL7Day();

})

Then('User sees the 7 day Connecticut State Specific Comment', () => {

    followUp6To20.stateSpecificCT7Day();

})

Then('User sees the 30 day Wyoming State Specific Comment', () => {

    followUp6To20.stateSpecificWY30Day();

})

Then('User sees the 30 day Washington State Specific Comment', () => {

    followUp6To20.stateSpecificWA30Day();

})

Then('User sees the 30 day Alabama State Specific Comment', () => {

    followUp6To20.stateSpecificAL30Day();

})

Then('User sees the 30 day Connecticut State Specific Comment', () => {

    followUp6To20.stateSpecificCT30Day();

})

Then('User sees 7 day state rates based on A to Z order', () => {

    followUp6To20.rateList7Day();

})

Then('User sees 30 day state rates based on A to Z order', () => {

    followUp6To20.rateList30Day();

})