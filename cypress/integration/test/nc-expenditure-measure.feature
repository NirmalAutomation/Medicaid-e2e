Feature: National Context Expenditure measure
    Description: The purpose of this feature is to test components in the National Context Expenditure measure page

    # User type is Website visitor
    Scenario: Verify the Annual Medicaid & CHIP Expenditures page
        Given User visits the Annual Medicaid & CHIP Expenditures page
        When User inspects the first measure breadcrumbs
        When User inspects the first measure title
        Then User sees VISIT THE PILLAR
        Then User sees the first measure lists
        Then User sees right navigation bar

    Scenario: Verify the How Much Do States Spend Per Medicaid Enrollee page
        Given User visits the How Much Do States Spend Per Medicaid Enrollee page
        When User inspects the second measure breadcrumbs
        When User inspects the second measure title
        Then User sees VISIT THE PILLAR
        Then User sees the second measure lists
        Then User sees right navigation bar

    Scenario: Verify the Long Term Services and Supports Expenditures on Home Community Based Services page
        Given User visits the Long Term Services and Supports Expenditures on Home Community Based Services page
        When User inspects the third measure breadcrumbs
        When User inspects the third measure title
        Then User sees VISIT THE PILLAR
        Then User sees right navigation bar
