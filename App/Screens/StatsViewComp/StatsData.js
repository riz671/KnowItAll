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
      wins: this.props.wins,
      losses: this.props.losses,
      draws: this.props.draws,
      name: fakePlayers,
    };
  }

  render() {
    const { score, wins, losses, draws, name } = this.state;
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
          <Text style={styles.title}>
            Draws: <Text style={styles.scorePoints}>{draws}</Text>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dataContainer: {
    width: 130,
    margin: 10,
    alignItems: "center",
    flex: 1,
  },
  dataBox: {
    marginBottom: 5,
    height: 95,
  },
  // ====================
  // Team Logo Styles
  // ====================
  teamLogo: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
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
