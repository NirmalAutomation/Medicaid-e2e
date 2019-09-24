Feature: Federal Administrative Accountability
    Description: The purpose of this feature is to test components in the Federal Administrative Accounability page

    # User type is Website visitor
    Scenario: Assert the text and sidebar on pillar page
        Given User visits the Federal Administrative Accountability page
        When User inspects the breadcrumbs
        When User inspects the pillar title
        Then User sees the associated sub categories
        Then User sees right navigation bar

    Scenario: Verify the navigation to State Plan Amendment and 1915 Waiver Processing
        Given User visits the Federal Administrative Accountability page
        When User selects the State Plan Amendment and 1915 Waiver Processing title
        Then User sees the State Plan Amendment and 1915 Waiver Processing page

    Scenario: Verify the navigation to Section 1115 Demonstrations: Time from Submission to Approval
        Given User visits the Federal Administrative Accountability page
        When User selects the Section 1115 Demonstrations: Time from Submission to Approval title
        Then User sees the Section 1115 Demonstrations: Time from Submission to Approval page

    Scenario: Verify the navigation to Managed Care Capitation Rate Review: Total Days to Approve Rates
        Given User visits the Federal Administrative Accountability page
        When User selects the Managed Care Capitation Rate Review: Total Days to Approve Rates title
        Then User sees the Managed Care Capitation Rate Review: Total Days to Approve Rates page

    Scenario: Veriy the navigation to Managed Care Capitation Rate Review: Days Under CMS Review
        Given User visits the Federal Administrative Accountability page
        When User selects the Managed Care Capitation Rate Review: Days Under CMS Review title
        Then User sees the Managed Care Capitation Rate Review: Days Under CMS Review page

    Scenario: Verify the navigation to Managed Care Contract Review
        Given User visits the Federal Administrative Accountability page
        When User selects the Managed Care Contract Review title
        Then User sees the Managed Care Contract Review page
        