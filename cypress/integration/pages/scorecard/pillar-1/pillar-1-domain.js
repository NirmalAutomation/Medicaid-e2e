/// <reference types="Cypress" />

export class Pillar1Domain {

    // Promote Effective Prevention & Treatment of Chronic Diseases
    firstBreadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard')
            .and('contain', 'Promote Effective Prevention & Treatment of Chronic Diseases');
    }

    visitThePillar() {
        cy.get('.visit-section')
            .should('contain', 'VISIT THE PILLAR: ')
            .and('contain', 'State Health System Performance');
    }

    firstDomainTitle() {
        cy.get('h1')
            .should('contain', 'Promote Effective Prevention & Treatment of Chronic Diseases');
    }

    // Table
    prenatalPostpartumCare() {
        cy.get('tbody>tr')
            .should('contain', 'Prenatal & Postpartum Care: Postpartum Care');
    }

    prenatalPostpartumCareSnack() {
        cy.get('tbody>tr')
            .should('contain', 'States')
            .and('contain', 'Reporting')
            .and('contain', '37')
            .and('contain', '61.3%')
            .and('contain', 'Median')
            .and('contain', 'Rate');
    }

    liveBirths() {
        cy.get('tbody>tr')
            .should('contain', 'Live Births Weighing Less Than 2,500 Grams');
    }

    liveBirthsSnack() {
        cy.get('tbody>tr')
            .should('contain', 'States')
            .and('contain', 'Reporting')
            .and('contain', '25')
            .and('contain', '9.1%')
            .and('contain', 'Median')
            .and('contain', 'Rate');
    }

    wellChildFirst15() {
        cy.get('tbody>tr')
            .should('contain', 'Well-Child Visits in the First 15 Months of Life');
    }

    wellChildFirst15Snack() {
        cy.get('tbody>tr')
            .should('contain', 'States')
            .and('contain', 'Reporting')
            .and('contain', '47')
            .and('contain', '63.2%')
            .and('contain', 'Median')
            .and('contain', 'Rate');
    }

    wellChildThirdFourth() {
        cy.get('tbody>tr')
            .should('contain', 'Well-Child Visits in the Third, Fourth, Fifth, and Sixth Years of Life');
    }

    wellChildThirdFourthSnack() {
        cy.get('tbody>tr')
            .should('contain', 'States')
            .and('contain', 'Reporting')
            .and('contain', '48')
            .and('contain', '69.3%')
            .and('contain', 'Median')
            .and('contain', 'Rate');
    }

    adolescentWellCare() {
        cy.get('tbody>tr')
            .should('contain', 'Adolescent Well-Care Visits');
    }

    adolescentWellCareSnack() {
        cy.get('tbody>tr')
            .should('contain', 'States')
            .and('contain', 'Reporting')
            .and('contain', '47')
            .and('contain', '48.9%')
            .and('contain', 'Median')
            .and('contain', 'Rate');
    }

    immunizationsAdolescents() {
        cy.get('tbody>tr')
            .should('contain', 'Immunizations for Adolescents');
    }

    immunizationsAdolescentsSnack() {
        cy.get('tbody>tr')
            .should('contain', 'States')
            .and('contain', 'Reporting')
            .and('contain', '43')
            .and('contain', 'Combination 1')
            .and('contain', '77.3%')
            .and('contain', 'Median')
            .and('contain', 'Rate');
    }

    percentagePreventiveDental() {
        cy.get('tbody>tr')
            .should('contain', 'Percentage of Eligibles Who Received Preventive Dental Services');
    }

    percentagePreventiveDentalSnack() {
        cy.get('tbody>tr')
            .should('contain', 'States')
            .and('contain', 'Reporting')
            .and('contain', '51')
            .and('contain', '48.0%')
            .and('contain', 'Median')
            .and('contain', 'Rate');
    }

    useOpioidsHighDosage() {
        cy.get('tbody>tr')
            .should('contain', 'Use of Opioids at High Dosage in Persons Without Cancer');
    }

    initiationEngagement() {
        cy.get('tbody>tr')
            .should('contain', 'Initiation & Engagement of Alcohol & Other Drug Dependence Treatment');
    }

    initiationEngagementSnack() {
        cy.get('tbody>tr')
            .should('contain', 'States')
            .and('contain', 'Reporting')
            .and('contain', '34')
            .and('contain', 'Total Initiation Rate')
            .and('contain', '40.0%')
            .and('contain', 'Median')
            .and('contain', 'Rate');
    }

    comprehensiveDiabetesCare() {
        cy.get('tbody>tr')
            .should('contain', 'Comprehensive Diabetes Care: Hemoglobin A1c (HbA1c) Poor Control (>9.0%)');
    }

    comprehensiveDiabetesCareSnack() {
        cy.get('tbody>tr')
            .should('contain', 'States')
            .and('contain', 'Reporting')
            .and('contain', '27')
            .and('contain', '39.8%')
            .and('contain', 'Median')
            .and('contain', 'Rate');
    }

    controllingHighBlood() {
        cy.get('tbody>tr')
            .should('contain', 'Controlling High Blood Pressure');
    }

    controllingHighBloodSnack() {
        cy.get('tbody>tr')
            .should('contain', 'States')
            .and('contain', 'Reporting')
            .and('contain', '28')
            .and('contain', '57.8%')
            .and('contain', 'Median')
            .and('contain', 'Rate');
    }

    breastCancer() {
        cy.get('tbody>tr')
            .should('contain', 'Breast Cancer Screening');
    }

    breastCancerSnack() {
        cy.get('tbody>tr')
            .should('contain', 'States')
            .and('contain', 'Reporting')
            .and('contain', '41')
            .and('contain', '54.6%')
            .and('contain', 'Median')
            .and('contain', 'Rate');
    }

    // Promote Effective Communication & Coordination of Care
    secondBreadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard')
            .and('contain', 'Promote Effective Communication & Coordination of Care');
    }

    visitThePillar() {
        cy.get('.visit-section')
            .should('contain', 'VISIT THE PILLAR: ')
            .and('contain', 'State Health System Performance');
    }

    secondDomainTitle() {
        cy.get('h1')
            .should('contain', 'Promote Effective Communication & Coordination of Care');

    }

    // Table
    antipsychoticsChildrenAdolescents() {
        cy.get('tbody>tr')
            .should('contain', 'Use of Multiple Concurrent Antipsychotics in Children & Adolescents');
    }

    antipsychoticsChildrenAdolescentsSnack() {
        cy.get('tbody>tr')
            .should('contain', 'States')
            .and('contain', 'Reporting')
            .and('contain', '39')
            .and('contain', '2.9%')
            .and('contain', 'Median')
            .and('contain', 'Rate');
    }

    followup6_20() {
        cy.get('tbody>tr')
            .should('contain', 'Follow-Up After Hospitalization for Mental Illness: Ages 6-20')
    }

    followup6_20Snack() {
        cy.get('tbody>tr')
            .should('contain', 'States')
            .and('contain', 'Reporting')
            .and('contain', '44')
            .and('contain', '30 Day Follow-Up')
            .and('contain', '67.1%')
            .and('contain', 'Median')
            .and('contain', 'Rate');
    }

    followup21_older() {
        cy.get('tbody>tr')
            .should('contain', 'Follow-Up After Hospitalization for Mental Illness: Age 21 & Older');
    }

    followup21_olderSnack() {
        cy.get('tbody>tr')
            .should('contain', 'States')
            .and('contain', 'Reporting')
            .and('contain', '42')
            .and('contain', '30 Day Follow-Up')
            .and('contain', '58.6%')
            .and('contain', 'Median')
            .and('contain', 'Rate');
    }

    pqiDiabetes() {
        cy.get('tbody>tr')
            .should('contain', 'PQI 01: Diabetes Short-Term Complications Admission Rate');
    }

    numberLongStayNursing() {
        cy.get('tbody>tr')
            .should('contain', 'Number of Hospitalizations per 1,000 Long-Stay Nursing Home Resident Days');
    }

    // Work with Communities to Promote Best Practices of Healthy Living
    thirdBreadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard')
            .and('contain', 'Work with Communities to Promote Best Practices of Healthy Living');
    }

    thirdDomainTitle() {
        cy.get('h1')
            .should('contain', 'Work with Communities to Promote Best Practices of Healthy Living');
    }

    // Table
    longTermServices() {
        cy.get('tbody>tr')
            .should('contain', 'Long-Term Services and Supports');
    }

    // Make Care Affordable
    fifthBreadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard')
            .and('contain', 'Make Care Affordable');
    }

    fifthDomainTitle() {
        cy.get('h1')
            .should('contain', 'Make Care Affordable');
    }

    // Table
    ambulatoryCare() {
        cy.get('tbody>tr')
            .should('contain', 'Ambulatory Care: Emergency Department Visits');
    }

    adultEmergencyDept() {
        cy.get('tbody>tr')
            .should('contain', 'Adult Emergency Department Visits');
    }

    // Strengthen Person & Family Engagement as Partners in their Care
    fourthBreadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard')
            .and('contain', 'Strengthen Person & Family Engagement as Partners in their Care');
    }

    fourthDomainTitle() {
        cy.get('h1')
            .should('contain', 'Strengthen Person & Family Engagement as Partners in their Care');
    }

    // Table
    stateCareSurveysBene() {
        cy.get('tbody>tr')
            .should('contain', 'State Use of Experience of Care Surveys for Beneficiaries Using Long-Term Services and Supports');
    }

    // Make Care Safer by Reducing Harm
    sixthBreadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard')
            .and('contain', 'Make Care Safer by Reducing Harm');
    }

    sixthDomainTitle() {
        cy.get('h1')
            .should('contain', 'Make Care Safer by Reducing Harm');
    }

    // Table
    percentageAntipsychoticMedication() {
        cy.get('tbody>tr')
            .should('contain', 'Percentage of Long-stay Nursing Home Residents who got an Antipsychotic Medication ');
    }

    percentageAntipsychoticMedicationSnack() {
        cy.get('tbody>tr')
            .should('contain', 'States')
            .and('contain', 'Reporting')
            .and('contain', '53')
            .and('contain', '14.4%')
            .and('contain', 'Median')
            .and('contain', 'Rate');
    }
}

export const pillar1Domain = new Pillar1Domain()