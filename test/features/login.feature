Feature: Customer accessing the application

 Customer should be able to access the application with successful login

@test
 Scenario Outline: I should be able to access the application with successful login
   Given I want to access the test application
   When I enter my credentials userName "<UserName>" and password "<Password>"
   And I login to the application
   Then I should be able to access the application

   Examples:
     |UserName|Password|
     |test@qa-experience.com|Password1|

@test
 Scenario: I should get error message when I enter incorrect credentials
   Given I want to access the test application
   When I enter my credentials userName "jhjer" and password "dfsdg"
   Then I should see the error messages in the login page
       And I should not be allowed to login to the application


@test
 Scenario: Failing Test Example
   Given I want to access the test application
   When I enter my credentials userName "test@qa-experience.com" and password "Password1"
   And I login to the application
   Then validate dummy failure scenario      

@ignore
 Scenario Outline: Ignore Test and it would not get executed
   Given I want to access the test application
   When I enter my credentials userName "<UserName>" and password "<Password>"
   Then I should see the error messages in the login page
       And I should not be allowed to login to the application

   Examples:
     |UserName|Password|
     |jhjer|dfsdg|           