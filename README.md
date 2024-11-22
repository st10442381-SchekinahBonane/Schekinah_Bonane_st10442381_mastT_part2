Requirement 1: Indicate the Average Price of Menu Items per Course Implementation: The home screen calculates the average prices of menu items for each course-for example, starters, main courses, desserts.
This is achieved through the grouping of menu items according to course types, summing up the prices, and subsequently averaging by the item count within a group type.
The averages are shown in a user-friendly format on the home screen.
Requirement 2: Separate Screen for Adding and Removing Menu Items
Implementation:
The AddMenuScreen provides a dedicated interface for chefs to add new menu items. It allows input for the dish name, description, course type, and price.
The EditMenuScreen allows chefs to edit or remove existing menu items from the list.
The home screen no longer has controls for adding or removing items, adhering to the requirement to isolate this functionality in separate screens.
Data is passed between screens along with navigation using React Navigation and passed as route parameters for dynamic updating of the menu.
Requirement 3: Store Menu Items in an Array
Implementation:
In this application, all menu items are stored in an array in the state, using React's useState or a global state management solution such as Context or Redux.
It updates the array real-time when items are added or removed, reflecting on the home screen all of the changes to show the complete menu.
Requirement 4: Filtering by Course
Implementation:
There is a separate FilterMenuScreen for guests to filter menu items by course.
The guest will indicate their preferred course with either a dropdown or via button selection-for example, starter, main course, dessert.
The filtered results are then reflected on the screen, so only the relevant items are shown to the guest.
How the Code Works Together to Meet the Requirements
Separation of Concerns:

The application is modularized into many screens, which perform particular functionalities. For instance:
The HomeScreen displays the entire menu and the calculated average prices.
The AddMenuScreen is used for adding new items.
The EditMenuScreen is used for editing and removing items.
The FilterMenuScreen enables guests to filter menu items.
