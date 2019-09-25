Feature: National Context Sub category B
    Description: The purpose of this feature is to test components in the National Context Sub category B page

    # User type is Website visitor
    Scenario: Verify the What are Annual Expenditures for Medicaid & CHIP? page
        Given User visits the What are Annual Expenditures for Medicaid & CHIP? page
        When User inspects the first sub breadcrumbs
        When User inspects the first Sub category title
        Then User sees VISIT THE PILLAR
        Then User sees the first associated measures
        Then User sees right navigation bar

    Scenario: Verify the navigation to Annual Medicaid & CHIP Expenditures
        Given User visits the What are Annual Expenditures for Medicaid & CHIP? page
        When User selects the Annual Medicaid & CHIP Expenditures title
        Then User sees the Annual Medicaid & CHIP Expenditures page

    Scenario: Verify the navigation to How Much Do States Spend Per Medicaid Enrollee?
        Given User visits the What are Annual Expenditures for Medicaid & CHIP? page
        When User selects the How Much Do States Spend Per Medicaid Enrollee? title
        Then User sees the How Much Do States Spend Per Medicaid Enrollee? page

    Scenario: Verify the navigation to Long-Term Services and Supports Expenditures on Home & Community-Based Services
        Given User visits the What are Annual Expenditures for Medicaid & CHIP? page
        When User selects the Long-Term Services and Supports Expenditures on Home & Community-Based Services title
        Then User sees the Long-Term Services and Supports Expenditures on Home & Community-Based Services page