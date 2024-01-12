Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I should able to see "Dashboard" screen
    Then I hover on the dashboard summary screen
    Then I clicked on the order and selects the "Main Orders" option

    Examples:
      # | username | password | message                        |
      # | admin    | Alerzo   | You logged into a secure area! |
      # # | foobar   | barfoo   | Your username is invalid!      |
      | username | password    | message                        |
      | admin    | Alerzo@1234 | You logged into a secure area! |
# | foobar   | barfoo   | Your username is invalid!      |
