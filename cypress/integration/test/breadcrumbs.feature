Feature: Breadcrumbs
    Description: The purpose of this feature is to test Breadcrumbs across Scorecard pages

    # User type is Website visitor
    Scenario: Verify the breadcrumbs on Scorecard landing page
        Given User visits the Scorecard landing 
        When User click on Home breadcrumb
        Then User sees Medicaid Home page
        Then User navigate back to Scorecard landing 
        When User click on State Overviews breadcrumb
        Then User sees State Overviews page
