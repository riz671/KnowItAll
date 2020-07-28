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
      team1Name: "Team 3",
      team2Name: "Team 6",
      team1Score: 1000,
      team2Score: 500,
      team1Wins: 1,
      team1Losses: 3,
      team1Draws: 2,
    };
    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    let {
      isClicked,
      team1Name,
      team2Name,
      team1Score,
      team2Score,
      team1Wins,
      team1Losses,
      team1Draws,
    } = this.state;

    const arrow = this.state.isClicked ? upArrow : downArrow;

    const results = (
      <View style={styles.visibleContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.teamFlexContainer}>
            <View style={styles.teamBox}>
              <View style={styles.teamHeader}>
                <Image
                  style={styles.teamLogo}
                  source={require("./StatsViewComp/mercedes.png")}
                ></Image>

                <Text style={styles.teamTitle}>{team1Name}</Text>
              </View>
              <StatsData
                teamName={team1Name}
                score={team1Score}
                wins={team1Wins}
                losses={team1Losses}
                draws={team1Draws}
              />
            </View>

            <View style={styles.divider} />

            <View style={styles.teamBox}>
              <View style={styles.teamHeader}>
                <Image
                  style={styles.teamLogo}
                  source={require("./StatsViewComp/mercedes.png")}
                ></Image>

                <Text style={styles.teamTitle}>{team2Name}</Text>
              </View>

              <StatsData
                teamName={team2Name}
                score={team2Score}
                wins={team1Losses}
                losses={team1Wins}
                draws={team1Draws}
              />
            </View>
          </View>
        </View>
      </View>
    );

    const secondPage = (
      <View style={styles.partialContainer}>
        <View style={styles.partialTeamBox}>
          <Image
            style={styles.partialLogo}
            source={require("./StatsViewComp/mercedes.png")}
          ></Image>

          <View>
            <Text style={styles.partialTitle}>{team1Name}</Text>
          </View>

          <View>
            <Text style={styles.partialScore}> {team1Score}</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.partialTeamBox}>
          <Image
            style={styles.partialLogo}
            source={require("./StatsViewComp/mercedes.png")}
          ></Image>

          <View>
            <Text style={styles.partialTitle}>{team2Name}</Text>
          </View>

          <View>
            <Text style={styles.partialScore}> {team2Score}</Text>
          </View>
        </View>
      </View>
    );

    const correctContainer = this.state.isClicked ? results : secondPage;

    return (
      <SafeAreaView>
        {correctContainer}
        <TouchableOpacity
          style={styles.arrow}
          activeOpacity={0.3}
          onPress={this.toggleClick}
        >
          <Text>{arrow}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
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
    top: 10,
    borderWidth: 2,
    borderRadius: 20,
    height: 54,
    margin: 6,
    padding: 10,
  },
  partialTeamBox: {
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    flex: 1,
  },
  // ====================
  // Partial Stats Detail Style
  // ====================
  partialLogo: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    borderWidth: 0.5,
  },
  partialTitle: {
    flex: 3,
    paddingHorizontal: 3,
    lineHeight: 30,
    fontSize: 20,
  },
  partialScore: {
    flex: 3,
    lineHeight: 30,
    fontWeight: "bold",
    fontSize: 20,
  },
  // ====================
  // Main Container
  // ====================
  visibleContainer: {
    backgroundColor: "aliceblue",
    alignItems: "center",
    justifyContent: "flex-start",
    top: 10,
    borderWidth: 2,
    borderRadius: 20,
    height: 245,
    margin: 6,
  },
  // ====================
  // Inner Container
  // ====================
  innerContainer: {
    margin: 10,
  },
  // ====================
  // Team Container Styles
  // ====================
  teamFlexContainer: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 20,
    height: 225,
  },
  teamBox: {
    margin: 5,
    width: 160,
    alignItems: "center",
    borderRadius: 20,
  },
  // ====================
  // Team Header Styles
  // ====================
  teamHeader: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 0.5,
    padding: 6,
  },
  teamLogo: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    borderWidth: 0.5,
  },
  teamTitle: {
    lineHeight: 30,
    fontSize: 20,
    marginBottom: -4,
    paddingLeft: 8,
  },
  divider: {
    borderLeftWidth: 3,
    borderLeftColor: "black",
  },
  // ====================
  // Arrow Styles
  // ====================
  arrow: {
    top: 3,
    display: "flex",
    alignItems: "center",
    borderWidth: 0.5,
    borderRadius: 15,
  },
});
