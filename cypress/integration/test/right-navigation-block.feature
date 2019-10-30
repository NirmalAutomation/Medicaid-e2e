Feature: Right Navigation Block
        Description: The purpose of this feature is to test functionality of Right Navigation block on Scorecard pages

        # User type is Website visitor
        Scenario: Verify the right navigation block links and logo
                Given User visits the Scorecard landing
                When User clicks on National Context icon
                Then User sees National Context page
                When User clicks on Federal Administrative Accountability link on right nav block
                Then User sees Federal Administrative Accountability page
                When User clicks on State Administrative Accountability link on right nav block
                Then User sees State Administrative Accountability page
                When User clicks on State Health System Performance link on right nav block
                Then User sees State Health System Performance page
                When User clicks on Medicaid and CHIP logo
                Then User sees Scorecard landing page

