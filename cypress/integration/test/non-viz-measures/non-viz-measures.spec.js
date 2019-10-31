/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { nonVizMeasures } from "../../pages/scorecard/pillar-1/non-d3-measures/non-viz-measures"
import { pillar1Measure } from "../../pages/scorecard/pillar-1/pillar-1-measure-common"

beforeEach(() => {
    cy.medicaidLanding();
})

Given('User visits the Use of Opioids at High Dosage page', () => {

    cy.visit('/state-overviews/scorecard/opioid-use-at-high-dosage-without-cancer/index.html');

})

When('User inspects the High measure title', () => {

    nonVizMeasures.measureTitleHighDosage();

})

Then('User sees VISIT THE PILLAR', () => {

    pillar1Measure.visitThePillar();

})

Then('User sees High VISIT THE DOMAIN', () => {

    nonVizMeasures.visitTheDomainHighDosage();

})

Given('User visits the Adult Emergency Department page', () => {

    cy.visit('/state-overviews/scorecard/adult-emergency-department-visits/index.html');

})

When('User inspects the Adult measure title', () => {

    nonVizMeasures.measureTitleAdult();

})

Then('User sees Adult VISIT THE DOMAIN', () => {

    nonVizMeasures.visitTheDomainAdult();

})

Given('User visits the Long-Term Services page', () => {

    cy.visit('/state-overviews/scorecard/long-term-services-supports/index.html');

})

When('User inspects the Services measure title', () => {

    nonVizMeasures.measureTitleService();

})

Then('User sees Services VISIT THE DOMAIN', () => {

    nonVizMeasures.visitTheDomainService();

})