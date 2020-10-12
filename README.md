# Triage Patient Cards

This is my proposed solution for the coding challenge of Cardiologs.

In this exercise, the goal was to build a page to display triage patient's cards and allow the user to do some searching and modifying. It was all done in Angular and using Typescript. Let me know what you think! =)

## What can the user do
1. Modify the status by clicking on the dropdown menu button inside each patient card. It's the button that contains the current status. 
2. Filter the cards by patient name by typing the desired text and pressing enter in the top bar right corner input.
3. Select arrhythmias and show the cards that contain at least one of those selected. To select an arrhythmia, click on the desired one in the list of arrhythmias of a patient card and the filter will be created and applied to all cards.
4. Search by name and arrhythmias filtering can be combined together.

## Some screenshots
![alt text][dropdown]

![alt text][search-arrhy]

![alt text][search-name]

[dropdown]: https://raw.githubusercontent.com/helderbetiol/card-triage/main/screenshots/dropdown.png
[search-arrhy]: https://raw.githubusercontent.com/helderbetiol/card-triage/main/screenshots/search-arrhythmias.png
[search-name]: https://raw.githubusercontent.com/helderbetiol/card-triage/main/screenshots/search-name.png