/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { followUp21Older } from "../../pages/pillar-1/d3-measures/follow-up-21-older"
import { pillar1Measure } from "../../pages/pillar-1/pillar-1-measure-common"

beforeEach(() => {
    cy.medicaidLanding();
})

Given('User visits the measure page', () => {

    cy.visit('/state-overviews/scorecard/follow-up-after-hospitalization-mental-illness-age-21/index.html');

})

When('User inspects the measure title', () => {

    followUp21Older.measureTitle();

})

Then('User sees VISIT THE PILLAR', () => {

    pillar1Measure.visitThePillar();

})

Then('User sees VISIT THE DOMAIN', () => {

    followUp21Older.visitTheDomain();

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

When('User validates the 7 day median rate', () => {

    followUp21Older.medianRate7Day();

})

When('User validates the 30 day median rate', () => {

    followUp21Older.medianRate30Day();

})

Then('User sees 51 states list', () => {

    pillar1Measure.stateListQuality();

})

When('User inspects the Medicaid and Dual population legend', () => {

    pillar1Measure.colorOfMedicaidDual();

})

When('User inspects the Medicaid CHIP and Dual population legend', () => {

    pillar1Measure.colorOfMedicaidChipDual();

})

When('User inspects the Medicaid only population legend', () => {

    pillar1Measure.colorOfMedicaidOnly();

})

When('User inspects the Medicaid and Chip population legend', () => {

    pillar1Measure.colorOfMedicaidAndChip();

})

Then('User clicks on 30 day follow up toggle button', () => {

    followUp21Older.toggle30DayFollow();

})

Then('User sees the 7 day Wyoming State Specific Comment', () => {

    followUp21Older.stateSpecificWY7Day();

})

Then('User sees the 30 day Wyoming State Specific Comment', () => {

    followUp21Older.stateSpecificWY30Day();

})

Then('User sees 7 day state rates based on A to Z order', () => {

    followUp21Older.rateList7Day();

})

Then('User sees 30 day state rates based on A to Z order', () => {

    followUp21Older.rateList30Day();

})