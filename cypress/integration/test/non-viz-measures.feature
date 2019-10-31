Feature: Non Visualization Measures
    Description: The purpose of this feature is to test components in the Non Visualization Measures page

    # User type is Website visitor
    Scenario: Verify the Use of Opioids at High Dosage measure
        Given User visits the Use of Opioids at High Dosage page
        When User inspects the High measure title
        Then User sees VISIT THE PILLAR
        Then User sees High VISIT THE DOMAIN

        Scenario: Verify the Adult Emergency Department measure
        Given User visits the Adult Emergency Department page
        When User inspects the Adult measure title
        Then User sees VISIT THE PILLAR
        Then User sees Adult VISIT THE DOMAIN

        Scenario: Verify the Long-Term Services measure
        Given User visits the Long-Term Services page
        When User inspects the Services measure title
        Then User sees VISIT THE PILLAR
        Then User sees Services VISIT THE DOMAIN