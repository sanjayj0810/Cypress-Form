# Cypress-Form
Cypress Form Submission Test
This repository contains end-to-end tests using Cypress to automate form submission on a Google Form.

Prerequisites
Before running the tests, ensure you have the following installed:

Node.js (which includes npm or yarn)
Cypress (installed locally or globally)

Setup
Clone the Repository:


git clone <repository_url>
cd cypress-form-submission
Install Dependencies:


npm install
Running Tests
To run the Cypress tests:


npm run cy:open
This command will open the Cypress Test Runner. Click on form_submission_test.js to execute the form submission test.

Test Details
The test script (form_submission_test.js) performs the following steps:

Opens the Google Form URL.
Enters a name in the "Your Name" field.
Selects the "18 and above" radio button.
Selects "Yes" from the "Do you exercise every week?" dropdown.
Submits the form.
Verifies that the form submission is successful by checking for a confirmation message.


## Sample Test Report

A sample test report (`mochawesome.html`) has been included in the repository to view test results.

To view the detailed test report:
- Open `mochawesome-report/mochawesome.html` in your web browser.
- Review test outcomes, including passed, failed, and pending tests.
- Use this report to understand test execution details and any failures encountered.



Notes
Adjust the form URL and selectors in form_submission_test.js as per your specific form structure.
Ensure that the form behaves predictably (confirmation messages, redirections, etc.) to avoid test failures.
Troubleshooting
If tests fail due to timing issues, adjust timeouts or use cy.wait() to synchronize with asynchronous behavior.
Review Cypress documentation for additional commands and best practices.




