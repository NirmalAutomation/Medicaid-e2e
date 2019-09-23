Feature: Scorecard Landing
    Description: The purpose of this feature is to test components in the Scorecard landing page

    # User type is Website visitor
    Scenario: Assert text and logo on Scorecard landing page
        Given User visits the Scorecard landing
        When User inspects the breadcrumbs
        Then User sees Medicaid and CHIP Scorecard logo
        Then User sees Find a Measure section
        Then User sees What is Scorecard text

    Scenario: Verify the pillar navigation through icons
        Given User visits the Scorecard landing
        When User clicks on National Context icon
        Then User sees National Context page
        # When User clicks on System Health System Performance
        # Then User sees System Health System Performance
        # When User clicks on State Administrative Accountability
        # Then User sees State Administrative Accountability
        # When User clicks on Federal Administrative Accountability
        # Then User sees Federal Administrative Accountability

    Scenario: Verify the pillar navigation through link text
        Given User visits the Scorecard landing
        # When User selects on National Context link text
        # Then User sees National Context page
        # When User selects on State Health System Performance link text
        # Then User sees System Health System Performance
        # When User selects on State Administrative Accountability link text
        # Then User sees State Administrative Accountability
        When User selects on Federal Administrative Accountability link text
        Then User sees Federal Administrative Accountability

    Scenario: Verify the Find a Measure functionality
        Given User visits the Scorecard landing
        Then User sees Find a Measure section
        When User selects a measure drop down
        Then User sees the pillar 1 measures
        Then User sees the pillar 2 and 3 sub categories

    Scenario: Navigate to measure page by selection
        Given User visits the Scorecard landing
        Then User sees Find a Measure section
        When User selects the Breast Cancer Screening measure
        Then User visits the Breast Cancer Screening measure
        Then User sees Breast Cancer Screening measure title

    Scenario: Navigate to measure page by entering name
        Given User visits the Scorecard landing
        Then User sees Find a Measure section
        When User enters the Adolescent Well-Care Visits measure
        Then User visits the Adolescent Well-Care Visits measure
        Then User sees measure title