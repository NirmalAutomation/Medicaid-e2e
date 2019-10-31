Feature: Static Measures
    Description: The purpose of this feature is to test components in the Static Measures page

    # User type is Website visitor
    Scenario: Verify the PQI 01 Diabetes Short Term measure
        Given User visits the PQI 01 Diabetes Short Term page
        When User inspects the PQI measure title
        Then User sees VISIT THE PILLAR
        Then User sees PQI VISIT THE DOMAIN
        Then User sees LEARN MORE link
        Then User sees the PQI viz title
        Then User sees the PQI legend section
        Then User sees the PQI static visualization

    Scenario: Verify the Number of Hospitalizations per 1000 Long Stay measure
        Given User visits the Number of Hospitalizations per 1000 Long Stay page
        When User inspects the 1000 measure title
        Then User sees VISIT THE PILLAR
        Then User sees 1000 VISIT THE DOMAIN
        Then User sees LEARN MORE link
        Then User sees the 1000 viz title
        Then User sees the 1000 legend section
        Then User sees the 1000 static visualization

    Scenario: Verify the State Use of Experience of Care Surveys measure
        Given User visits the State Use of Experience of Care Surveys page
        When User inspects the Survey measure title
        Then User sees VISIT THE PILLAR
        Then User sees Survey VISIT THE DOMAIN
        Then User sees the Survey static visualization

    Scenario: Verify the Ambulatory Care measure
        Given User visits the Ambulatory Care page
        When User inspects the Ambulatory measure title
        Then User sees VISIT THE PILLAR
        Then User sees Ambulatory VISIT THE DOMAIN
        Then User sees LEARN MORE link
        Then User sees the Ambulatory viz title
        Then User sees the Ambulatory legend section
        Then User sees the Ambulatory static visualization
