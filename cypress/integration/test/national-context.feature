Feature: National Context
    Description: The purpose of this feature is to test components in the National Context page

    # User type is Website visitor
    Scenario: Assert the text and sidebar on pillar page
        Given User visits the National Context page
        When User inspects the breadcrumbs
        When User inspects the pillar title
        Then User sees the associated sub categories
        Then User sees right navigation bar

    Scenario: Verify the navigation to Who Enrolls in Medicaid & CHIP?
        Given User visits the National Context page
        When User selects the Who Enrolls in Medicaid & CHIP? title
        Then User sees the Who Enrolls in Medicaid & CHIP? page

    Scenario: Verify the navigation to How do States Deliver Care in Medicaid?
        Given User visits the National Context page
        When User selects the How do States Deliver Care in Medicaid? title
        Then User sees the How do States Deliver Care in Medicaid? page

    Scenario: Verify the navigation to What Data are CMS & States Developing to Support Program Improvement?
        Given User visits the National Context page
        When User selects the What Data are CMS & States Developing to Support Program Improvement? title
        Then User sees the What Data are CMS & States Developing to Support Program Improvement? page

    Scenario: Veriy the navigation to What are Annual Expenditures for Medicaid & CHIP?
        Given User visits the National Context page
        When User selects the What are Annual Expenditures for Medicaid & CHIP? title
        Then User sees the What are Annual Expenditures for Medicaid & CHIP? page