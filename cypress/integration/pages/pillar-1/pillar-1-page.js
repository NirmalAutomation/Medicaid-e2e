/// <reference types="Cypress" />

export class SystemHealthSystemPillar {

    breadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard')
            .and('contain', 'State Health System Performance');
    }

    pillarTitle() {
        cy.get('h1')
            .should('contain', 'State Health System Performance');

    }

    // Visit a Domain
    visitADomainText() {
        cy.get('.explore_measures_container')
            .should('contain', 'Visit a Domain');
    }

    typeDomainName() {
        cy.get('input[type=search]').eq(2)
            .invoke('show')
            .type('Promote Effective Prevention & Treatment of Chronic Diseases{enter}');
    }

    selectDomainName() {
        cy.get('.select2-selection').click().then(() => {
            cy.get('.select2-results')
                .contains('Make Care Affordable')
                .click();

        })
    }

    selectDomainDropDown() {
        cy.get('.select2-selection').click();

    }

    assertDomainNames() {
        cy.get('.select2-results')
            .should('contain', 'Promote Effective Prevention & Treatment of Chronic Diseases')
            .and('contain', 'Promote Effective Communication & Coordination of Care')
            .and('contain', 'Work with Communities to Promote Best Practices of Healthy Living')
            .and('contain', 'Make Care Affordable')
            .and('contain', 'Strengthen Person & Family Engagement as Partners in their Care')
            .and('contain', 'Make Care Safer by Reducing Harm');
    }

    // Table
    antipsychoticsChildrenAdolescents() {
        cy.get('tbody>tr')
            .should('contain', 'Use of Multiple Concurrent Antipsychotics in Children & Adolescents')
            .and('contain', 'Promote Effective Communication & Coordination of Care');

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
            .and('contain', 'Promote Effective Communication & Coordination of Care');
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
            .should('contain', 'Follow-Up After Hospitalization for Mental Illness: Age 21 & Older')
            .and('contain', 'Promote Effective Communication & Coordination of Care');
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
            .should('contain', 'PQI 01: Diabetes Short-Term Complications Admission Rate')
            .and('contain', 'Promote Effective Communication & Coordination of Care');
    }

    numberLongStayNursing() {
        cy.get('tbody>tr')
            .should('contain', 'Number of Hospitalizations per 1,000 Long-Stay Nursing Home Resident Days')
            .and('contain', 'Promote Effective Communication & Coordination of Care');
    }

    percentageAntipsychoticMedication() {
        cy.get('tbody>tr')
            .should('contain', 'Percentage of Long-stay Nursing Home Residents who got an Antipsychotic Medication ')
            .and('contain', 'Make Care Safer by Reducing Harm');
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

    prenatalPostpartumCare() {
        cy.get('tbody>tr')
            .should('contain', 'Prenatal & Postpartum Care: Postpartum Care')
            .and('contain', 'Promote Effective Prevention & Treatment of Chronic Diseases');
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
            .should('contain', 'Live Births Weighing Less Than 2,500 Grams')
            .and('contain', 'Promote Effective Prevention & Treatment of Chronic Diseases');
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
            .should('contain', 'Well-Child Visits in the First 15 Months of Life')
            .and('contain', 'Promote Effective Prevention & Treatment of Chronic Diseases');
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
            .should('contain', 'Well-Child Visits in the Third, Fourth, Fifth, and Sixth Years of Life')
            .and('contain', 'Promote Effective Prevention & Treatment of Chronic Diseases');
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
            .should('contain', 'Adolescent Well-Care Visits')
            .and('contain', 'Promote Effective Prevention & Treatment of Chronic Diseases');
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
            .should('contain', 'Immunizations for Adolescents')
            .and('contain', 'Promote Effective Prevention & Treatment of Chronic Diseases');
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
            .should('contain', 'Percentage of Eligibles Who Received Preventive Dental Services')
            .and('contain', 'Promote Effective Prevention & Treatment of Chronic Diseases');
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
            .should('contain', 'Use of Opioids at High Dosage in Persons Without Cancer')
            .and('contain', 'Promote Effective Prevention & Treatment of Chronic Diseases');
    }

    initiationEngagement() {
        cy.get('tbody>tr')
            .should('contain', 'Initiation & Engagement of Alcohol & Other Drug Dependence Treatment')
            .and('contain', 'Promote Effective Prevention & Treatment of Chronic Diseases');
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
            .should('contain', 'Comprehensive Diabetes Care: Hemoglobin A1c (HbA1c) Poor Control (>9.0%)')
            .and('contain', 'Promote Effective Prevention & Treatment of Chronic Diseases');
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
            .should('contain', 'Controlling High Blood Pressure')
            .and('contain', 'Promote Effective Prevention & Treatment of Chronic Diseases');
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
            .should('contain', 'Breast Cancer Screening')
            .and('contain', 'Promote Effective Prevention & Treatment of Chronic Diseases');
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

    stateCareSurveysBene() {
        cy.get('tbody>tr')
            .should('contain', 'State Use Experience of Care Surveys for Beneficiaries Using Long-Term Services and Supports')
            .and('contain', 'Strengthen Person & Family Engagement as Partners in their Care');
    }

    ambulatoryCare() {
        cy.get('tbody>tr')
            .should('contain', 'Ambulatory Care: Emergency Department Visits')
            .and('contain', 'Make Care Affordable');
    }

    adultEmergencyDept() {
        cy.get('tbody>tr')
            .should('contain', 'Adult Emergency Department Visits')
            .and('contain', 'Make Care Affordable');
    }

    longTermServices() {
        cy.get('tbody>tr')
            .should('contain', 'Long-Term Services and Supports')
            .and('contain', 'Work with Communities to Promote Best Practices of Healthy Living');
    }
}

export const systemHealthSystemPillar = new SystemHealthSystemPillar()