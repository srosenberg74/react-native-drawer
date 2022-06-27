import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

function Home() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

function About() {
  return (
    <View style={styles.container}>
      <Text>About Screen</Text>
    </View>
  );
}

function AwesomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.awesomeText}>Awesome Page!</Text>
      <View style={styles.picContainer}>
      <Image
        style={styles.pic}
        source={{
          uri: "https://api.time.com/wp-content/uploads/2017/04/jimi-hendrix-08.jpg",
        }}
      />
      </View>
    </View>
  );
}

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

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "dimGrey",
  },
  pic: {
    width: 400,
    aspectRatio: 1,
    borderRadius: 200,
    borderColor: "purple",
    borderWidth: 12,
  },
  picContainer: {
    shadowColor: "magenta",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 400,
    elevation: 50,
    borderRadius: 8000,
    marginTop: 20,
  },
  awesomeText: {
    fontSize: 50,
    fontStyle:"italic",
    fontWeight: "bold",
    color: "purple",
  }
});
