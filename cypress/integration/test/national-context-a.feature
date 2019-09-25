Feature: National Context Sub category A
    Description: The purpose of this feature is to test components in the National Context Sub category A page

    # User type is Website visitor
    Scenario: Verify the Who Enrolls in Medicaid & CHIP? page
        Given User visits the Who Enrolls in Medicaid & CHIP? page
        When User inspects the first sub breadcrumbs
        When User inspects the first Sub category title
        Then User sees VISIT THE PILLAR
        Then User sees the first associated measures
        Then User sees right navigation bar

    Scenario: Verify the How do States Deliver Care in Medicaid? page
        Given User visits the How do States Deliver Care in Medicaid? page
        When User inspects the second sub breadcrumbs
        When User inspects the second Sub category title
        Then User sees VISIT THE PILLAR
        Then User sees the second associated measures
        Then User sees right navigation bar

    Scenario: Verify the What Data are CMS & States Developing to Support Program Improvement? page
        Given User visits the What Data are CMS & States Developing to Support Program Improvement? page
        When User inspects the third sub breadcrumbs
        When User inspects the third Sub category title
        Then User sees VISIT THE PILLAR
        Then User sees the third associated measures
        Then User sees right navigation bar

