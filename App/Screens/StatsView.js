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
import { LinearGradient } from "expo-linear-gradient";

export default class Stats_View extends React.Component {
  constructor(props) {
    super(props);
    // change state's key values to props
    // once it's known what is passed
    // to this module
    this.state = {
      isClicked: false,
      team1Name: "Team 3",
      team2Name: "Team 6",
      team1Score: 1000,
      team2Score: 500,
      team1Wins: 1,
      team1Losses: 3,
      team1Draws: 2,
      team1Turn: true,
      icon1: undefined,
      icon2: undefined,
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
      team1Turn,
      icon1,
      icon2,
    } = this.state;

    // handles icon colors
    if (team1Turn) {
      icon1 = [styles.iconTemplate, styles.activeIcon];
      icon2 = [styles.iconTemplate, styles.inactiveIcon];
    } else {
      icon1 = [styles.iconTemplate, styles.inactiveIcon];
      icon2 = [styles.iconTemplate, styles.activeIcon];
    }

    // stores structure for detailed stats page
    const detailedStats = (
      <View style={styles.visibleContainer} onPress={this.toggleClick}>
        <LinearGradient
          colors={["#78a8df", "#d5d5d5"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "100%",
            borderRadius: 20,
          }}
        />
        <View style={styles.innerContainer}>
          <View style={styles.teamFlexContainer}>
            {/* Team 1 */}
            <View style={styles.teamBox}>
              <View style={styles.teamHeader}>
                <Image
                  style={styles.teamLogo}
                  source={require("./StatsViewComp/mercedes.png")}
                ></Image>

                <Text style={styles.teamTitle}>{team1Name}</Text>
                <Image style={icon1}></Image>
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

            {/* Team 2 */}
            <View style={styles.teamBox}>
              <View style={styles.teamHeader}>
                <Image
                  style={styles.teamLogo}
                  source={require("./StatsViewComp/mercedes.png")}
                ></Image>

                <Text style={styles.teamTitle}>{team2Name}</Text>
                <Image style={icon2}></Image>
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

    const partialStats = (
      <View style={styles.partialContainer} onPress={this.toggleClick}>
        <LinearGradient
          colors={["#78a8df", "#d5d5d5"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "170%",
            borderRadius: 20,
          }}
        />
        {/* Team 1 */}
        <View style={styles.partialTeamBox}>
          <View>
            <Text style={styles.partialTitle}>{team1Name}</Text>
          </View>

          <Image style={icon1}></Image>

          <View>
            <Text style={styles.partialScore}> {team1Wins} WON</Text>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Team 2 */}
        <View style={styles.partialTeamBox}>
          <View>
            <Text style={styles.partialTitle}>{team2Name}</Text>
          </View>

          <Image style={icon2}></Image>

          <View>
            <Text style={styles.partialScore}> {team1Losses} WON</Text>
          </View>
        </View>
      </View>
    );

    const correctContainer = this.state.isClicked
      ? detailedStats
      : partialStats;

    return (
      <SafeAreaView style={styles.mainContainer}>
        <TouchableOpacity focusedOpacity={0.9} onPress={this.toggleClick}>
          {correctContainer}
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    alignItems: "center",
    top: "6.3%",
  },
  // ====================
  // Partial Container Styles
  // ====================
  partialContainer: {
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 20,
    height: "38.5%",
    padding: 10,
    width: "97%",
  },
  partialTeamBox: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    flex: 1,
  },
  // ====================
  // Icon Style
  // ====================
  iconTemplate: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    borderWidth: 0.25,
    marginRight: 6,
    marginLeft: 3,
  },
  activeIcon: {
    backgroundColor: "#00FA9A",
  },
  inactiveIcon: {
    backgroundColor: "#DC143C",
  },
  // ====================
  // Partial Stats Detail Style
  // ====================
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
    alignItems: "center",
    borderRadius: 20,
    height: "65.3%",
    width: "100%",
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
    marginHorizontal: 14,
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
    alignItems: "center",
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
    lineHeight: 20,
    fontSize: 20,
    marginBottom: -4,
    paddingLeft: 8,
    paddingRight: 4,
  },
  divider: {
    borderLeftWidth: 1.5,
    borderLeftColor: "rgba(0, 0, 0, 0.5)",
  },
});
