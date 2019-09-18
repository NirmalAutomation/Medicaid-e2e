Feature: Follow-Up After Hospitalization for Mental Illness: Ages 6-20
    Description: The purpose of this feature is to test components in the Follow-Up After Hospitalization for Mental Illness: Ages 6-20

    # User type is Website visitor
    Scenario: Verify the elements in legend box
        Given User visits the measure page
        When User inspects the measure title
        Then User sees VISIT THE PILLAR
        Then User sees VISIT THE DOMAIN
        Then User sees LEARN MORE link
        Then User sees the legend icons
        Then User sees the population types

    Scenario: Verify the elements in filter container
        Given User visits the measure page
        Then User sees the filter container labels
        When User selects State Z to A on Sort By
        When User selects State A to Z on Sort By
        When User selects State Highest to Lowest on Sort By
        When User selects State Lowest to Highest on Sort By
        Then User clicks on Reset All button

    Scenario: Verify the style of visualization elements
        Given User visits the measure page
        When User inspects style of State text
        When User inspects style of Rate text
        When User inspects style of Median
        Then User inspects color of Median line
        Then User inspects color of NR
        Then User inspects colot of bars

    Scenario: Verify the values on visualization - 7 day follow up
        Given User visits the measure page
        Then User sees top line titles
        Then User sees X axis top percentile
        Then User sees X axis bottom percentile
        When User validates the 7 day median rate
        Then User sees 51 states list
        Then User sees 7 day state rates based on A to Z order
        When User inspects the Medicaid only population legend
        When User inspects the Chip only population legend
        When User inspects the Medicaid and Chip population legend

    Scenario: Verify the State Specific Comment for 4 states - 7 day follow up
        Given User visits the measure page
        Then User sees the 7 day Wyoming State Specific Comment
        # Then User sees the 7 day Washington State Specific Comment
        # Then User sees the 7 day Alabama State Specific Comment
        # Then User sees the 7 day Connecticut State Specific Comment

    Scenario: Verify the values on visualization - 30 day follow up
        Given User visits the measure page
        Then User clicks on 30 day follow up toggle button
        Then User sees top line titles
        Then User sees X axis top percentile
        Then User sees X axis bottom percentile
        When User validates the 30 day median rate
        Then User sees 51 states list
        Then User sees 30 day state rates based on A to Z order
        When User inspects the Medicaid only population legend
        When User inspects the Chip only population legend
        When User inspects the Medicaid and Chip population legend

    Scenario: Verify the State Specific Comment for 4 states - 30 day follow up
        Given User visits the measure page
        Then User clicks on 30 day follow up toggle button
        Then User sees the 30 day Wyoming State Specific Comment
        # Then User sees the 30 day Washington State Specific Comment
        # Then User sees the 30 day Alabama State Specific Comment
        # Then User sees the 30 day Connecticut State Specific Comment
