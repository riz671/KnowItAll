import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import StatsData from "./StatsViewComp/StatsData.js";

export default class Stats_View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.innerContainer}>
          <SafeAreaView style={styles.titleContainer}>
            <Text style={styles.title}>Team Stats</Text>
          </SafeAreaView>

          <SafeAreaView style={styles.teamFlexContainer}>
            <SafeAreaView style={styles.teamBox}>
              <Text style={styles.teamTitle}>Team 1</Text>
            </SafeAreaView>

            <SafeAreaView style={styles.teamBox}>
              <Text style={styles.teamTitle}>Team 2</Text>
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  // ====================
  // Main Container
  // ====================
  container: {
    flex: 1,
    backgroundColor: "#F0FFFF",
    alignItems: "center",
    justifyContent: "flex-start",
    top: 35,
    borderWidth: 2,
    borderRadius: 20,
    height: 100,
  },
  // ====================
  // Inner Container
  // ====================
  innerContainer: {
    margin: 10,
  },
  // ====================
  // Title Container
  // ====================

  titleContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    textDecorationLine: "underline",
    marginBottom: 5,
  },
  // ====================
  // Team Styles
  // ====================
  teamFlexContainer: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
  },
  teamBox: {
    margin: 5,
    width: 150,
    borderWidth: 1,
    alignItems: "center",
  },
  teamTitle: {
    fontSize: 16,
  },
});
