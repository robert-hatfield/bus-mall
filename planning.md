# Technical plan

#### Tuesday branch - `busmall-start`
- [x] Create and test object construction
- [x] Set up random product selection
  - [x] Check against previous set
- [x] Track display count
- [x] Render products to DOM as HTML elements
- [x] Add on-click to track participant choices

#### Meeting MVP requirements & refinements
- [x] Clarify variable names
- [x] Simplify checking against previous set - compare against an array of the last set rather than Boolean properties on the product objects
- [x] Call next round of product selection after participant choice is made
  - [x] Confirm results are being retained after maxRounds is reached
- [x] Design a report with list elements to display results

#### Wednesday branch - `busmall-charts`
- [x] Display votes in a bar chart, using ChartJS

#### Thursday branch - `busmall-persistence`
- [ ] Use localStorage to retain data between page refreshes or closing the browser window.
  > This will give marketing researchers more data across multiple testing sets.
- [ ] Ensure full [problem domain](https://github.com/codefellows/seattle-201d18/blob/master/class-11-av-practical-clicktracker/lab.md) is met.
  - [ ] Polish UI/UX with fonts, color palette, semantic HTML layout, etc.
    - [ ] Edit images to a 1:1 aspect ratio
    - [ ] Add a round counter to page - e.g., "Round 3 of 25"
    - [ ] Add percentages to final results
