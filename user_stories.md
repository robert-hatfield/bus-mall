# User stories for BusMall

## Marketing researchers
- As a marketing researcher, I want an application that presents 3 random products at a time to focus group participants, so that they can select which one they'd be most likely to purchase.
- As a researcher, I want each list of choices to be different from the prior list, and to have no internal duplicates, so that I receive a sufficiently broad dataset.
- As a researcher, I want the application to track how many times each product is selected, as well as how often a given product is selected when displayed (as a percentage), so that I can determine which products to include in the final BusMall catalog.
- As a researcher, I want the user to only be shown results after a minimum of 25 selections have been made, in order to receive unbiased results.
- As a researcher, I want the results to be presented in a list that provides the tracked metrics in a visually clear manner, so that my team does not misinterpret the data.

## Developer
- As a developer, I want to use a constructor function to create objects associated with each product, in order to promote DRY code.
- As a developer, I want to create the following properties for each product object, so that participants can understand what they are selecting:
  - The name of the product
  - The file path of the associated product image
  - A unique name that can be used as an HTML ID attribute
- As a developer, I want to create the following properties for each product object, so that marketing researchers have clear results from the participants' choices
  - How many times the product has been displayed
  - How many times the product has been selected
- ~~As a developer, I want to create two boolean properties - `currentlyDisplayed` and `lastDisplayed` - so that I can present a unique set of products for each selection.~~
> This has been solved by checking against arrays with  the `.includes()` method

- As a developer, I want to use clear comments and variable names so that my code is readable and readily extensible.
- As a developer, I want to create CSS styling that will present choices and data with visually appealing layout, font and color choices, so that participants and researchers have a pleasant experience with the application.

## Focus group participant
- As a focus group participant, I want an application that presents selections in a visually pleasing manner, so that I will enjoy using the application.
- As a participant, I want my interaction with the application to be simple, so that I know what actions on my part are required.
- ~~As a participant, I want an opportunity to vote for each product before the test is completed, so that I can make informed choices.~~
> I've opted not to adjust random selections _(that is, make sure the user sees all 20 products in a single testing session)_ so that results are completely unbiased. Multiple sessions will provide a large enough testing sample.
