Feature: Initiation & Engagement of Alcohol & Other Drug Dependence Treatment
    Description: The purpose of this feature is to test components in the Initiation & Engagement of Alcohol & Other Drug Dependence Treatment page

    # User type is Website visitor
    Scenario: Verify the elements in legend box
        Given User visits the measure page
        When User inspects the measure title
        Then User sees VISIT THE PILLAR
        Then User sees VISIT THE DOMAIN
        Then User sees LEARN MORE link
        Then User sees the legend icons
        Then User sees the population types

    