import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "dimGrey",
  },
  pic: {
    width: 380,
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
    fontStyle: "italic",
    fontWeight: "bold",
    color: "purple",
  },
});
