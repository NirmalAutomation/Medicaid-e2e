Feature: State Administrative Accountability
    Description: The purpose of this feature is to test components in the State Administrative Accounability page

    # User type is Website visitor
    Scenario: Assert the text and sidebar on pillar page
        Given User visits the State Administrative Accountability page
        When User inspects the breadcrumbs
        When User inspects the pillar title
        Then User sees the associated sub categories
        Then User sees right navigation bar

    Scenario: Verify the navigation to State Plan Amendment and 1915 Waiver Processing
        Given User visits the State Administrative Accountability page
        When User selects the State Plan Amendment and 1915 Waiver Processing title
        Then User sees the State Plan Amendment and 1915 Waiver Processing page

    Scenario: Verify the navigation to Annual 372(S) Reporting: Timeliness of Report Submissions
        Given User visits the State Administrative Accountability page
        When User selects the Annual 372(S) Reporting: Timeliness of Report Submissions title
        Then User sees the Annual 372(S) Reporting: Timeliness of Report Submissions page

    Scenario: Verify the navigation to Medicaid MAGI and CHIP Application Processing Times
        Given User visits the State Administrative Accountability page
        When User selects the Medicaid MAGI and CHIP Application Processing Times title
        Then User sees the Medicaid MAGI and CHIP Application Processing Times page

    Scenario: Veriy the navigation to Managed Care Capitation Rate Review: Timing of States’ Submissions
        Given User visits the State Administrative Accountability page
        When User selects the Managed Care Capitation Rate Review: Timing of States’ Submissions title
        Then User sees the Managed Care Capitation Rate Review: Timing of States’ Submissions page

    Scenario: Verify the navigation to Managed Care Capitation Rate Review: Days Awaiting Information from States
        Given User visits the State Administrative Accountability page
        When User selects the Managed Care Capitation Rate Review: Days Awaiting Information from States title
        Then User sees the Managed Care Capitation Rate Review: Days Awaiting Information from States page

    Scenario: Verify the navigation to T-MSIS Data Quality: Number of Open Top Priority Issues
        Given User visits the State Administrative Accountability page
        When User selects the T-MSIS Data Quality: Number of Open Top Priority Issues title
        Then User sees the T-MSIS Data Quality: Number of Open Top Priority Issues page

    Scenario: Verify the navigation to Initiation of Collaborative Investigations Between States and CMS’s Unified Program Integrity Contractors
        Given User visits the State Administrative Accountability page
        When User selects the Initiation of Collaborative Investigations Between States and CMS’s Unified Program Integrity Contractors title
        Then User sees the Initiation of Collaborative Investigations Between States and CMS’s Unified Program Integrity Contractors page

    Scenario: Verify the navigation to Healthcare Fraud Prevention Partnership Participation
        Given User visits the State Administrative Accountability page
        When User selects the Healthcare Fraud Prevention Partnership Participation title
        Then User sees the Healthcare Fraud Prevention Partnership Participation page

    Scenario: Verify the navigation to Payment Error Rate  Measurement (PERM)
        Given User visits the State Administrative Accountability page
        When User selects the Payment Error Rate  Measurement (PERM) title
        Then User sees the Payment Error Rate  Measurement (PERM) page