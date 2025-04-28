# cypress/e2e/features/login.feature
@Login @Smoke
Feature: Login functionality

  Scenario Outline: Login attempt with different user credentials
    Given I am on the login page
    When I enter username "<username>" and password "<password>"
    Then I should see "<result>"
     @1
    Examples:
      | username        | password      | result                    |
      | standard_user   | secret_sauce  | Products page             |
     @2
   Examples:
      | username        | password      | result                    |
      | standard_user   | wrong_pass    | error message             |
     @3
   Examples:
      | username        | password      | result                    |
    
      | invalid_user    | secret_sauce  | error message             |

