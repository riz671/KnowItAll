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
      score: 0,
      name: fakePlayers,
    };
  }

  render() {
    const renderItem = ({ item }) => (
      <Text style={styles.playerName}>{item.name}</Text>
    );

    return (
      <SafeAreaView style={styles.dataContainer}>
        <SafeAreaView style={styles.dataBox}>
          <Text style={styles.title}>
            Score: <Text style={styles.points}>{this.state.score}</Text>
          </Text>
        </SafeAreaView>

        <SafeAreaView style={styles.dataBox}>
          <Text style={styles.title}>Players:</Text>
          <FlatList
            data={fakePlayers}
            renderItem={({ item }) => (
              <Text style={styles.playerName}>{item.name}</Text>
            )}
          />
        </SafeAreaView>

        <SafeAreaView style={styles.dataBox}>
          <Image
            style={styles.teamLogo}
            source={require("./mercedes.png")}
          ></Image>
        </SafeAreaView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  dataContainer: {
    borderColor: "green",
    borderWidth: 1,
    width: 130,
    margin: 10,
  },
  dataBox: {
    marginBottom: 5,
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
  points: {
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
    left: 20,
    color: "black",
    marginBottom: 2,
  },
});
