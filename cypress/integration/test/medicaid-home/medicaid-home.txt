Feature: Medicaid home page
    Description: The purpose of this feature is to test components in the Medicaid home page

    # User type is Website visitor
    Scenario: Verify the header elements
        Given User visits the medicaid home page
        Then User sees Medicaid gov logo
        Then User sees secondary header navigation
        When User inspects search feature
        Then User sees mega menu block

    Scenario: Verify the footer elments
        Given User visits the medicaid home page
        Then User sees Related Sites
        Then User sees Helpful Links
        When User inspects Sign Up block
        Then User enter email address

    Scenario: Verify the secondary footer elements
        Given User visits the medicaid home page
        Then User sees footer logo
        Then User sees footer logo header
        Then User sees Twitter and Youtube logos
        Then User sees footer contact heading

    Scenario: Verify that user is able to navigate to Scorecard page from mega menu
        Given User visits the medicaid home page
        When User selects Scorecard link from State Overviews menu
        Then User sees Scorecard landing page

