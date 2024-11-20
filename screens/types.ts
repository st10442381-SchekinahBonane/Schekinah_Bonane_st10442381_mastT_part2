export type RootStackParamList = {
  Home: { newItem?: MenuItem } | undefined; // Optional parameter for Home
  AddMenu: undefined;                      // No parameters for AddMenu
  EditMenu: undefined;                     // No parameters for EditMenu
  FilterMenu: undefined;                   // No parameters for FilterMenu
  Passcode: undefined;                     // No parameters for Passcode
};

// Define the structure of a menu item
export interface MenuItem {
  id: string;
  dishName: string;
  description: string;
  course: string; // e.g., Starter, Main, Dessert
  price: number;
}
