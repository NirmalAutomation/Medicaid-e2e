Feature: State Health System Performance
    Description: The purpose of this feature is to test components in the State Health System Performance page

    # User type is Website visitor
    Scenario: Assert the text and sidebar on pillar page
        Given User visits the State Health System Performance page
        When User inspects the breadcrumbs
        When User inspects the pillar title
        Then User sees right navigation bar

    Scenario: Verify the Visit a Domain functionality
        Given User visits the State Health System Performance page
        Then User sees Visit a Domain section
        When User selects a domain drop down
        Then User sees the pillar 1 domains

    Scenario: Navigate to domain page by selection
        Given User visits the State Health System Performance page
        Then User sees Visit a Domain section
        When User selects the Make Care Affordable domain
        Then User visits the Make Care Affordable domain
        Then User sees Make Care Affordable domain title

    Scenario: Navigate to domain page by entering name
        Given User visits the State Health System Performance page
        Then User sees Visit a Domain section
        When User enters the Promote Effective Prevention Treatment of Chronic Diseases domain
        Then User visits the Promote Effective Prevention Treatment of Chronic Diseases domain
        Then User sees Promote Effective Prevention Treatment of Chronic Diseases title

    Scenario: Verify the List of measures and domains on pillar 1 page
        Given User visits the State Health System Performance page
        Then User sees the table grids
        Then User sees the snack size visualization 