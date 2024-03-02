Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given A web browser is at the orangehrm login page
    # @focus  //Smart tag helps to run a specific scenario
    Scenario: Success Login
        When A user enters the username "Admin", the password "admin123", and clicks on the login button
        Then the url will contains the index subdirectory
        #Then I click Pim from the main menu
    
    #Scenario: Add a new employee under pim
        #When I click pim from the main menu 
    
    #Scenario: Incorrect Username Login
        #When A user provides incorrect credentials, and clicks on the login button
            | username | password     |
            | Geky234  | admin123     |
        #Then The error message "Invalid credentials" is displayed
    
    #Scenario: Incorrect Password Login
        #When A user provides incorrect credentials, and clicks on the login button
            | username      | password     |
            | Admin         | good517      |
        #Then The error message "Invalid credentials" is displayed