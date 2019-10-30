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

    Scenario: Verify the Total AOD Abuse or Dependence
        Given User visits the measure page
        When User inspects the Visualization Total AOD title
        When User validates the Total AOD median rate
        Then User sees 51 states list
    # Then User sees Total AOD state rates based on A to Z order

    Scenario: Verify the Alcohol Abuse or Dependence
        Given User visits the measure page
        When User inspects the Visualization Alcohol Abuse title
        When User validates the Alcohol Abuse median rate
        Then User sees 51 states list
    # Then User sees Alcohol Abuse state rates based on A to Z order

    Scenario: Verify the Opioid Abuse or Dependence
        Given User visits the measure page
        When User inspects the Visualization Opioid Abuse title
        When User validates the Opioid Abuse median rate
        Then User sees 51 states list
    # Then User sees Opioid Abuse state rates based on A to Z order

    Scenario: Verify the Other Drug Abuse or Dependence
        Given User visits the measure page
        When User inspects the Visualization Other Drug Abuse title
        When User validates the Other Drug Abuse median rate
        Then User sees 51 states list
    # Then User sees Other Drug Abuse state rates based on A to Z order

