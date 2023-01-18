# Tim O'Shea: coding-task-2023

Coding task for RJE Global's software engineering recruitment 2023

The project converts the equipment_list.csv file to a json array, validates the contents against a predefined set of validation maps and returns an array of error message json objects to the client.

### Complete the following tasks:

1. Extend functionality of the validateColumns() function in validators.js to register a new error if an unknown field is present in the equipment list.
    * I have created a new column error model. The lineError model didn't really apply to columns. 
    * I wasn't entirely sure what "Unknown Field" was referring to, but I did notice the Not A Field column and assumed I was writing an error for that. 
    * I have also added another Unknown Column to the csv. 


2. Why are all the errors on line 2? Find the bug and fix.
   * The errors are caused by the counter variable getting hardcoded to 2 and not indexed correctly.
   * I renamed the counter variables to row, as it seemed more appropriate. I have initialised them to 1 instead of zero because it makes the line output more readable.
   * I could have used zero, created another variable, and performed some calisthenics...but it added no value.
   * I would have preferred to use an index from the map instead of relying on the loop counter, but it was working so I left it.
   * Removed the getKeyColumns() function. Not required.


3. Update the validation strings on the "Subsystem" and "PLU" fields so that an error is registered when an '&' symbol is present.
   * Created a new validation string called subSysPLU. 
   * The new validation string will trigger an error if the "&" symbol is present, as well as enforcing the previous char length requirement.


Bonus Task:
Add some HTML and CSS to the response object so that the errors list is more human-readable.
   * As node.js has no concept of the DOM and human-readable was the requirement, I just added a tiny bit of formatting to the JSON.stringify.
   * Installing Express seemed like overkill.

note: This task was completed in PHPStorm.
