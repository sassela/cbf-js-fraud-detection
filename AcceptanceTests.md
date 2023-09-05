Feature: Fraud Detection App

  Scenario: Viewing Historical Transaction Data
    Given I am on the Transactions page
    When I want to view historical transaction data
    Then I should be able to access the historical transaction data

  Scenario: Grouping Transaction Data by User
    Given I am on the Transactions page
    When I select the dropdown
      And group transaction data by user
    Then I should be able to see transaction data grouped by user

  Scenario: Manually Flagging Suspicious Transactions
    Given I am on the Transactions page
    When I select the checkbox to flag a suspicious transaction
      And the transaction is not already flagged
    Then I the transaction should become flagged

  Scenario: Viewing Similar Transactions
    Given I am on the Transactions page
    When I select the button to view similar transactions
    Then I should be taken to a separate page with similar transactions for investigation

  Scenario: Creating Fraud Detection Rules
    Given I am on the Rules page
    When I select the button to create a fraud detection rule
      And complete the form
      And submit the form
    Then I should see the newly defined rule on the Rules page

  Scenario: Viewing Transactions Matching Detection Rules
    Given I am on the Transactions page
    When I select the filter dropdown
      And filter on a given rule
    Then I should be able to see only transactions that match the defined detection rules

  Scenario: Creating Fraud Detection Email Alerts
    Given I am on the Alerts page
    When I select the button to create a new alert
      And specify the rule
      And complete the form
      And submit the form
    Then I should be able to see the new email alert
