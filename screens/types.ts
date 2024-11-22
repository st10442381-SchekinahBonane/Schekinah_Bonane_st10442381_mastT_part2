export type RootStackParamList = {
    Home: undefined;
    AddMenu: undefined;
    EditMenu: undefined;
    Passcode: undefined;
    FilterMenu: { menuItems?: Array<{ dishName: string; course: string; price: number }> };
  };
  
  export type RootStackScreenProps<T extends keyof RootStackParamList> = {
    navigation: import('@react-navigation/native-stack').NativeStackNavigationProp<RootStackParamList, T>;
    route: import('@react-navigation/native').RouteProp<RootStackParamList, T>;
  };
  