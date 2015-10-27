Feature: I want to have a suite reporting properly errors

Scenario: Simple test should reports errors as and when they occur
    Given I open the url "http://theintern.github.io/"
    And I execute async remote function
    And I execute async remote function and fail
    And the element "h1 small.subtitle" is visible
