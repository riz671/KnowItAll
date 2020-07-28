import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
} from "react-native";

// in future allow teams to
let fakePlayers = [
  { id: 0, name: "Koboh" },
  { id: 1, name: "Russell" },
];

const Players = ({ name }) => {
  console.log(name);
  return (
    <View style={styles.item}>
      <Text style={styles.playerName}>{name}</Text>
    </View>
  );
};

export default class Stats_Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: this.props.score,
      wins: 0,
      losses: 0,
      name: fakePlayers,
    };
  }

  render() {
    const { score, wins, losses, name } = this.state;
    const renderItem = ({ item }) => (
      <Text style={styles.playerName}>{item.name}</Text>
    );

    return (
      <View style={styles.dataContainer}>
        <View style={styles.dataBox}>
          <Text style={styles.title}>
            Score: <Text style={styles.scorePoints}>{score}</Text>
          </Text>
          <Text style={styles.title}>
            Wins: <Text style={styles.scorePoints}>{wins}</Text>
          </Text>
          <Text style={styles.title}>
            Losses: <Text style={styles.scorePoints}>{losses}</Text>
          </Text>
        </View>

        <View style={styles.dataBox}>
          <Text style={styles.title}>Players:</Text>
          <FlatList
            data={name}
            renderItem={({ item }) => (
              <Text style={styles.playerName}>{item.name}</Text>
            )}
          />
        </View>

        <View style={styles.dataBox}>
          <Image
            style={styles.teamLogo}
            source={require("./mercedes.png")}
          ></Image>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dataContainer: {
    width: 130,
    margin: 10,
    alignItems: "center",
  },
  dataBox: {
    marginBottom: 5,
    height: 70,
  },
  // ====================
  // Team Logo Styles
  // ====================
  teamLogo: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderWidth: 1,
  },
  // ====================
  // Score Styles
  // ====================
  scorePoints: {
    fontWeight: "bold",
    fontSize: 18,
  },
  // ====================
  // Player Styles
  // ====================
  title: {
    marginBottom: 2,
  },
  playerName: {
    width: 80,
    color: "black",
    marginBottom: 2,
    alignItems: "center",
  },
});
