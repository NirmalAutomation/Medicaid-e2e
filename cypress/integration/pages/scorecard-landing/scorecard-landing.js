/// <reference types="Cypress" />

export class ScorecardLanding {

    breadcrumbs() {
        cy.get('.breadcrumb')
            .children('ol')
            .should('contain', 'Home')
            .and('contain', 'State Overviews')
            .and('contain', 'Scorecard');
    }

    scorecardLogo() {
        cy.get('.landing-page-logo')
            .should('have.attr', 'src', '/themes/custom/medicaid/images/medicaid_scorecard.png');
    }

    // National Context
    ncIcon() {
        cy.get('.pillar_icon1')
            .click();
    }

    ncLinkText() {
        cy.get('.pillar_landing')
            .eq(0)
            .contains('National Context').click();
    }

    // State Health System Performance
    shspIcon() {
        cy.get('.pillar_icon2')
            .click();
    }

    shspLinkText() {
        cy.get('.pillar_landing')
            .eq(1)
            .contains('System Health System Performance').click();
    }

    // State Administrative Accountability
    saaIcon() {
        cy.get('.pillar_icon3')
            .click();
    }

    saaLinkText() {
        cy.get('.pillar_landing')
            .eq(2)
            .contains('State Administrative Accountability').click();
    }

    // Federal Administrative Accountability
    faaIcon() {
        cy.get('.pillar_icon4')
            .click();
    }

    faaLinkText() {
        cy.get('.pillar_landing')
            .eq(3)
            .contains('Federal Administrative Accountability').click();
    }

    // Find a Measure
    findAMeasureText() {
        cy.get('.explore_measures_container')
            .should('contain', 'Find a Measure');
    }

    typeMeasureName() {
        cy.get('.chosen_container').click()
            .then(() => {
                cy.get('input[type=text]').type('Adolescent Well-Care Visits {enter}')
            })
    }

    selectMeasureDropDown() {
        cy.get('.chosen-single').click();

    }

    assertMeasureNames() {
        cy.get('.chosen-results')
            .should('contain', 'Adolescent Well-Care Visits')
            .and('contain', 'Adult Emergency Department Visits')
            .and('contain', 'Ambulatory Care: Emergency Department Visits')
            .and('contain', 'Comprehensive Diabetes Care: Hemoglobin A1c (HbA1c) Poor Control (>9.0%)')
            .and('contain', 'Controlling High Blood Pressure')
            .and('contain', 'Follow-Up After Hospitalization for Mental Illness: Ages 6-20')
            .and('contain', 'Immunizations for Adolescents')
            .and('contain', 'Initiation & Engagement of Alcohol & Other Drug Dependence Treatment')
            .and('contain', 'Live Births Weighing Less Than 2,500 Grams')
            .and('contain', 'Long-Term Services and Supports')
            .and('contain', 'Number of Hospitalizations per 1,000 Long-Stay Nursing Home Resident Days')
            .and('contain', 'PQI 01: Diabetes Short-Term Complications Admission Rate')
            .and('contain', 'Percentage of Eligibles Who Received Preventive Dental Services')
            .and('contain', 'Prenatal & Postpartum Care: Postpartum Care')
            .and('contain', 'State Use of Patient Experience Surveys for Beneficiaries Using Long-Term Services and Supports')
            .and('contain', 'Use of Multiple Concurrent Antipsychotics in Children & Adolescents')
            .and('contain', 'Use of Opioids at High Dosage in Persons Without Cancer')
            .and('contain', 'Well-Child Visits in the First 15 Months of Life')
            .and('contain', 'Well-Child Visits in the Third, Fourth, Fifth, and Sixth Years of Life');

    }

    assertSubcategoryNames() {
        cy.get('.chosen-results')
            .should('contain', 'State Plan Amendment and 1915 Waiver Processing')
            .and('contain', 'State Plan Amendment and 1915 Waiver Processing')
            .and('contain', 'Annual 372(S) Reporting: Timeliness of Report Submissions')
            .and('contain', 'Medicaid MAGI and CHIP Application Processing Times')
            .and('contain', 'Managed Care Capitation Rate Review: Timing of States’ Submissions')
            .and('contain', 'Managed Care Capitation Rate Review: Days Awaiting Information from States')
            .and('contain', 'T-MSIS Data Quality: Number of Open Top Priority Issues')
            .and('contain', 'Initiation of Collaborative Investigations Between States and CMS’s Unified Program Integrity Contractors')
            .and('contain', 'Healthcare Fraud Prevention Partnership Participation')
            .and('contain', 'Payment Error Rate  Measurement (PERM)')
            .and('contain', 'Section 1115 Demonstrations: Time from Submission to Approval')
            .and('contain', 'Managed Care Capitation  Rate Review: Total Days to Approve Rates')
            .and('contain', 'Managed Care Capitation Rate Review: Days Under CMS Review')
            .and('contain', 'Managed Care  Contract Review');

    }

    selectMeasureName() {
        cy.get('.chosen-single').click().then(() => {
            cy.get('.chosen-results')
                .contains('Breast Cancer Screening')
                .click();

        })
    }

    textAssertionScorecard() {
        cy.get('.scorecard_desc')
            .should('contain', 'What is Scorecard?');
    }

}

export const scorecardLanding = new ScorecardLanding();