Feature: Federal Administrative Accountability Sub category
    Description: The purpose of this feature is to test components in the Federal Administrative Accounability sub category pages

    # User type is Website visitor
    Scenario: Verify the State Plan Amendment and 1915 Waiver Processing page
        Given User visits the State Plan Amendment and 1915 Waiver Processing page
        When User inspects the first sub breadcrumbs
        When User inspects the first Sub category title
        Then User sees VISIT THE PILLAR
        Then User sees the first associated measures
        Then User sees right navigation bar

    Scenario: Verify the Section 1115 Demonstrations: Time from Submission to Approval page
        Given User visits the Section 1115 Demonstrations: Time from Submission to Approval page
        When User inspects the second sub breadcrumbs
        When User inspects the second Sub category title
        Then User sees VISIT THE PILLAR
        Then User sees the second associated measures
        Then User sees right navigation bar

    Scenario: Verify the Managed Care Capitation Rate Review: Total Days to Approve Rates page
        Given User visits the Managed Care Capitation Rate Review: Total Days to Approve Rates page
        When User inspects the third breadcrumbs
        When User inspects the third Sub category title
        Then User sees VISIT THE PILLAR
        Then User sees the third associated measures
        Then User sees right navigation bar

    Scenario: Verify the Managed Care Capitation Rate Review: Days Under CMS Review page
        Given User visits the Managed Care Capitation Rate Review: Days Under CMS Review page
        When User inspects the fourth breadcrumbs
        When User inspects the fourth Sub category title
        Then User sees VISIT THE PILLAR
        Then User sees the fourth associated measures
        Then User sees right navigation bar

    Scenario: Verify the Managed Care Contract Review page
        Given User visits the Managed Care Contract Review page
        When User inspects the fifth breadcrumbs
        When User inspects the fifth Sub category title
        Then User sees VISIT THE PILLAR
        Then User sees the fifth associated measures
        Then User sees right navigation bar