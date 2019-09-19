Feature: The site is live

    @sanity
    Scenario: The front page loads
      As a user when I visit the site I want it to be working.
      There is no given step because there is no state to set up.

      When I visit the site
      Then The front page is visible

    @smoke @cleanState
    Scenario Outline: Basic login functionality works
      Valid users are recognised, invalid users are prompted to take action.

      Given I want to log in
      When I try to log in with a <user status> user
      Then I am shown a <response>

      Examples: How the site responds to valid and invalid user credentials
        | user status | response   |
        | valid       | welcome    |
        | invalid     | rejection  |
