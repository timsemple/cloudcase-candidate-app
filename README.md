# Cloudcase Candidate Programming Exercise

Completed by: Tim Semple\
Date: 30th March 2023

## Deployment
See the form here - https://lucky-vacherin-9e8f62.netlify.app/

## Requirements
An electronic form to onboard a new staff member and provide a calculation of local taxation figures. This is a common situation for employers that have purchased Human Capital Software (HCM) that has been developed overseas without consideration for local employment tax rates.

## Goals / Outcomes
- To reduce / remove the requirement for staff to manually calculate payroll details and or manually handle any candidate data
- To provide a welcoming or delightful user experience for the candidate in order to make a good first impression of the employer

## Form Fields
At a minimum the form needs to collect personal details of the candidate. We must assume that the employer already has some details in their system so the form will have a combination of fields and pre-populated data -
- Full Name, DOB, Address, etc
- A hidden field containing a UID provided by the HCM software
- Salary / Tax / Super fields
- Residency status, medicare levy, tax threshold eligibility, HECS debt, etc to enable a more accurate calculation of salary

## Design Choices
The form will have “vanilla” or “bootstrap” styling based on the assumption that it will be embedded into another environment, with some styling to be protected and other elements that are open to inherit the parent’s styling
- A simple stacked layout that is responsive without extended development
- The published form will be accessible to meet the clients requirements (generally WCAG 2.1)
- To make the example more visually appealing I have included some CSS styles from Bank Australia because I really like their branding!

## Development
- Use ReactJS for fast development and to take advantage of the large pool of proficient developers in the future
- A single page app that can be inflated within a webpage or secure environment to collect data from the candidate
- This should be a self-contained app without dependencies on a backend or external API
- Use only HTML5 Form elements and validation as we won't be creating any backend for processing or validation
- Use bootstrap styling for standard form elements
- Minimise external packages to reduce ongoing maintenance and have decided not to use precompiled CSS as the size of the project and quantity of CSS rule didn’t justify the setup
- In reality the form would output data to the HR Software’s API - in which case I map the fields using the same naming conventions, syntax, etc to match the API’s expected input

## Future upgrades
If I was preparing this be published for a client I would consider the following -
- Voluntary super contributions
- Consider sourcing the Income Tax Table and Super calculation parameters from an API. This will remove the requirement to hardcode this data into the software
- Better form validation
- Security - limit the number of times the form can be submitted (with an expiring token or similar) to prevent DOS attacks
- Ux - add a Checkbox to switch calculations between net and gross
- Ux - update the Base Salary field to appear with currency formatting
- Ux - In most cases the customer's details will already be in the HR system - ideally this form should be populated with known details to save the user’s time

## Testing
For a rolling comparison we can use https://paycalculator.com.au/ which displays some different results. To be completely accurate this form would also need to include residency status, medicare levy, tax threshold eligibility, HECS debt, etc.

The results of the calculations can be tested manually with the following cases -

### Bracket 1
- Action: Enter a base salary of $15000
- Observed: Tax = $0, Super = $1575, Pay = $576.92
- Expected: As above

### Bracket 2
- Action: Enter a base salary of $24560
- Observed: Tax = $1208.40, Super = $2578.80, Pay = $944.62
- Expected: As above (confirmed on ATO Simple Tax Calculator - https://www.ato.gov.au/Calculators-and-tools/Host/?anchor=STC&anchor=STC#STC/questions)

### Bracket 4
- Action: Enter a base salary of $168000
- Observed: Tax = $49657.00, Super = $17640.00, Pay = $6461.54
- Expected: The ATO Simple Tax Calculator displays a different result for tax which can possibly be attributed to medicare levi which has not been considered in this exercise



End of document (default dev notes below)