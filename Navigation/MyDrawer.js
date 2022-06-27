import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "../Screens/About";
import Home from "../Screens/Home";
import AwesomePage from "../Screens/AwesomePage";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Awesome Page" component={AwesomePage} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
