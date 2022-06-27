import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../styles/styles";

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

export default AwesomePage;
