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
  TextInput,
} from "react-native";
import StatsData from "./StatsViewComp/StatsData.js";
import { LinearGradient } from "expo-linear-gradient";

export default class TeamSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team1Selected: true,
      team1Name: "",
      team2Name: "",
      team1Icon: "something",
      team2Icon: "something else",
    };
    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText = (team, text) => {
    this.setState({
      [team]: text,
    });
  };

  onSubmit() {}

  render() {
    let message, placeholderText, currentTeam;

    if (this.state.team1Selected) {
      message = "Enter Team 1 Name: ";
      placeholderText = "Enter Team 1 Name";
      currentTeam = "team1Name";
    } else {
      message = "Enter Team 2 Name: ";
      placeholderText = "Enter Team 2 Name";
      currentTeam = "team2Name";
    }

    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>{message}</Text>
          <TextInput
            style={styles.inputBox}
            placeholder={placeholderText}
            onChangeText={(text) => this.onChangeText("team1Name", text)}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.submitButton}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
  // ====================
  // Partial Container Styles
  // ====================
  inputBox: {
    // height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "50%",
  },
  // ====================
  // Submit Styles
  // ====================
  submitButton: {
    borderWidth: 2,
    borderRadius: 5,
    width: "30%",
    height: "20%",
    paddingVertical: 5,
    paddingHorizantal: 10,
  },
};
