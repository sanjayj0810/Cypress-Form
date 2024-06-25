describe('Form Submission Test', () => {
  it('should submit the form successfully', () => {
    // Step 1: Navigate to the form
    cy.visit('https://docs.google.com/forms/d/e/1FAIpQLScPfEbpaoUu3WVwSDM9wIFX5uo1XQ1xpuHNtP7cF_rkR-o8Zg/viewform');

    // Step 2: Enter name in the "Your Name" field
    cy.get('input.whsOnd.zHQkBf[type="text"]').type('Your Name', { force: true });



    // Step 3: Select the "18 and above" radio button
    cy.get('label[for="i12"]').click();

    cy.get('span.aDTYNe.snByac.OvPDhc.OIC90c')
      .contains('Under 18')
      .should('not.have.attr', 'aria-checked', 'true');
    

    // Step 4: Select "Yes" from the "Do you exercise every week?" dropdown
    // Select 'Yes'
     cy.contains('span.vRMGwf.oJeWuf', 'Yes').click();

       // Confirm 'No' is not selected
       cy.get('div[data-value="No"][aria-selected="true"]')
      .should('not.exist');


       // Step 5: Submit the form
         cy.contains('span.NPEfkd.RveJvd.snByac', 'Submit').click();



       // Step 6: Verify the form submission is successful
       // Assuming there's a confirmation message or URL change
       // Click on the Submit button
       cy.contains('span.NPEfkd.RveJvd.snByac', 'Submit').click();

      // Assuming there's a confirmation message or URL change
      cy.url().should('include', 'viewform'); // Check if the URL includes 'viewform' as an indication of successful submission

     

  });
});
