import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyDrawer from "./Navigation/MyDrawer";

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

