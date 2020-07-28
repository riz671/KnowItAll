import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
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
    const arrow = this.state.isClicked ? upArrow : downArrow;

    const results = (
      <SafeAreaView>
        <View style={styles.visibleContainer}>
          <View style={styles.innerContainer}>
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
        <TouchableOpacity
          style={styles.arrow}
          activeOpacity={0.5}
          onPress={this.toggleClick}
        >
          <Text>{arrow}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );

    const secondPage = (
      <SafeAreaView>
        <View style={styles.partialContainer}>
          <View style={styles.partialTeamBox}>
            <Image
              style={styles.partialLogo}
              source={require("./StatsViewComp/mercedes.png")}
            ></Image>

            <View>
              <Text style={styles.partialTitle}> Team 1</Text>
            </View>

            <View>
              <Text style={styles.partialTitle}> Team 1</Text>
            </View>
          </View>

          <View style={styles.partialTeamBox}>
            <Image
              style={styles.partialLogo}
              source={require("./StatsViewComp/mercedes.png")}
            ></Image>

            <View>
              <Text style={styles.partialTitle}> Team 2</Text>
            </View>

            <View>
              <Text style={styles.partialTitle}> Team 2</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );

    return secondPage;
  }
}

const styles = StyleSheet.create({
  // ====================
  // Partial Container Styles
  // ====================
  partialContainer: {
    backgroundColor: "aliceblue",
    justifyContent: "center",
    flexDirection: "row",
    top: 35,
    borderWidth: 2,
    borderRadius: 20,
    height: 60,
    margin: 6,
    padding: 6,
  },
  partialTeamBox: {
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    borderWidth: 1,
    flex: 1,
  },
  // ====================
  // Partial Stats Detail Style
  // ====================
  partialLogo: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    borderWidth: 1,
  },
  partialTitle: {
    paddingHorizontal: 5,
    lineHeight: 30,
  },
  partialScore: {
    lineHeight: 30,
  },
  // ====================
  // Main Container
  // ====================
  visibleContainer: {
    backgroundColor: "aliceblue",
    alignItems: "center",
    justifyContent: "flex-start",
    top: 35,
    borderWidth: 2,
    borderRadius: 20,
    height: 270,
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
    height: 250,
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
  // ====================
  // Arrow Styles
  // ====================
  arrow: {
    top: 28,
    display: "flex",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 15,
  },
});
