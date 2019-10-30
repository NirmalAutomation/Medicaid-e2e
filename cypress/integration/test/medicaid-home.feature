Feature: Medicaid home page
    Description: The purpose of this feature is to test components in the Medicaid home page

    # User type is Website visitor

    Scenario: Verify that user is able to navigate to Scorecard page from mega menu
        Given User visits the medicaid home page
        When User selects Scorecard link from State Overviews menu
        Then User sees Scorecard landing page

