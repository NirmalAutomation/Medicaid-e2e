Feature: State Health System Performance domains
    Description: The purpose of this feature is to test components in the State Health System Performance domain pages

    # User type is Website visitor
    Scenario:  Verify the Promote Effective Prevention & Treatment of Chronic Diseases page
        Given User visits the Promote Effective Prevention & Treatment of Chronic Diseases page
        When User inspects the first domain breadcrumbs
        When User inspects the first domain title
        Then User sees VISIT THE PILLAR
        Then User sees the first associated measures
        Then User sees the first snack size visualization
        Then User sees right navigation bar

    Scenario: Verify the Promote Effective Communication & Coordination of Care page
        Given User visits the Promote Effective Communication & Coordination of Care page
        When User inspects the second domain breadcrumbs
        When User inspects the second domain title
        Then User sees VISIT THE PILLAR
        Then User sees the second associated measures
        Then User sees the second snack size visualization
        Then User sees right navigation bar

    Scenario: Verify the Work with Communities to Promote Best Practices of Healthy Living page
        Given User visists the Work with Communities to Promote Best Practices of Healthy Living page
        When User inspects the third domain breadcrumbs
        When User inspects the third domain title
        Then User sees VISIT THE PILLAR
        Then User sees the third associated measures
        Then User sees right navigation bar

    Scenario: Verify the Strengthen Person & Family Engagement as Partners in their Care page
        Given User visits the Strengthen Person & Family Engagement as Partners in their Care
        When User inspects the fourth domain breadcrumbs
        When User inspects the fourth domain title
        Then User sees VISIT THE PILLAR
        Then User sees the fourth associated measures
        Then User sees the fourth snack size visualization
        Then User sees right navigation bar

    Scenario: Verify the Make Care Affordable page
        Given User visits the Make Care Affordable page
        When User inspects the fifth domain breadcrumbs
        When User inspects the fifth domain title
        Then User sees VISIT THE PILLAR
        Then User sees the fifth associated measures
        Then User sees the fifth snack size visualization
        Then User sees right navigation bar

    Scenario: Verify the Make Care Safer by Reducing Harm page
        Given User visits the Make Care Safer by Reducing Harm page
        When User inspects the sixth domain breadcrumbs
        When User inspects the sixth domain title
        Then User sees VISIT THE PILLAR
        Then User sees the sixth associated measures
        Then User sees the sixth snack size visualization
        Then User sees right navigation bar