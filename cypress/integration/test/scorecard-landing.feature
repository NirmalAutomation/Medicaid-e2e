Feature: Scorecard Landing
    Description: The purpose of this feature is to test components in the Scorecard landing page

    # User type is Website visitor
    Scenario: Verify the elements on Scorecard landing page
        Given User visits the Scorecard landing
        When User inspects the breadcrumbs
        Then User sees Medicaid and CHIP Scorecard logo
        Then User sees Find a Measure section
        Then User sees What is Scorecard text

    Scenario: Verify the pillar navigation through icons
        Given User visits the Scorecard landing
        When User clicks on National Context icon
        When User clicks on System Health System Performance
        When User clicks on State Administrative Accountability
        When User clicks on Federal Administrative Accountability

    Scenario: Verify the pillar navigation through icons
        Given User visits the Scorecard landing
        When User selects on National Context link text
        When User selects on State Health System Performance link text
        When User selects on State Administrative Accountability link text
        When User selects on Federal Administrative Accountability link text

    Scenario: Verify the Find a Measure function
        Given User visits the Scorecard landing
        Then User sees Find a Measure section
        When User selects a measure
        Then User sees the pillar 1 measures
        Then User sees the pillar 2 and 3 sub categories

    Scenario: Verify the selection of find a measure
        Given User visits the Scorecard landing
        Then User sees Find a Measure section
        When User selects a measure
        When User selects the Breast Cancer Screening measure
        Then User visits the Breast Cancer Screening measure
        Then User sees measure title

    Scenario: Verify the Find a Measure by entering name
        Given User visits the Scorecard landing
        Then User sees Find a Measure section
        When User enters the Adolescent Well-Care Visits measure
        Then User visits the Adolescent Well-Care Visits measure
        Then User sees measure title