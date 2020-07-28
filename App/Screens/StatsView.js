import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
  Button,
} from "react-native";
import StatsData from "./StatsViewComp/StatsData.js";
import { Entypo } from "@expo/vector-icons";
const upArrow = <Entypo name="chevron-thin-up" size={30} color="black" />;
const downArrow = <Entypo name="chevron-thin-down" size={30} color="black" />;

export default class Stats_View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: true,
    };
    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    let arrow = this.state.isClicked ? upArrow : downArrow;

    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Team Stats</Text>
            </View>

            <View style={styles.teamFlexContainer}>
              <View style={styles.teamBox}>
                <Text style={styles.teamTitle}>Team 1</Text>
                <StatsData />
              </View>

              <View style={styles.divider} />

              <View style={styles.teamBox}>
                <Text style={styles.teamTitle}>Team 2</Text>
                <StatsData />
              </View>
            </View>
          </View>
        </View>
        <TouchableHighlight style={styles.arrow} onPress={this.toggleClick}>
          <Text>{arrow}</Text>
        </TouchableHighlight>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  // ====================
  // Main Container
  // ====================
  container: {
    backgroundColor: "aliceblue",
    alignItems: "center",
    justifyContent: "flex-start",
    top: 35,
    borderWidth: 2,
    borderRadius: 20,
    height: 330,
    margin: 6,
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
    borderColor: "red",
    borderRadius: 20,
  },
  teamBox: {
    margin: 5,
    width: 160,
    alignItems: "center",
    borderRadius: 20,
  },
  teamTitle: {
    fontSize: 16,
    textDecorationLine: "underline",
    marginBottom: -4,
  },
  divider: {
    borderLeftWidth: 3,
    borderLeftColor: "black",
  },
  arrow: {
    top: 28,
    display: "flex",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 15,
  },
});
