import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import StatsData from "./StatsViewComp/StatsData.js";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function TeamSelect({
  history,
  state,
  onChangeText,
  iconSelection,
  onSubmit,
}) {
  let message, currentTeam, currentIcon, finalIcon, finalTeamName;
  console.log(state);
  let colors = [
    "crimson",
    "steelblue",
    "mediumseagreen",
    "gold",
    "gray",
    "purple",
  ];

  if (state.team1Selected) {
    message = "Enter Team 1 Name:";
    currentTeam = "team1Name";
    currentIcon = "team1Icon";
    finalIcon = state.team1Icon;
    finalTeamName = state.team1Name;
  } else {
    message = "Enter Team 2 Name:";
    currentTeam = "team2Name";
    currentIcon = "team2Icon";
    finalIcon = state.team2Icon;
    finalTeamName = state.team2Name;
  }

  let textInput = null;

  const handleSubmit = () => {
    textInput.clear();
    onSubmit();
    !state.team1Selected &&
    state.team2Icon &&
    state.team1Icon !== state.team2Icon
      ? history.push("/select-category")
      : null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.teamNameInput}>
        <Text style={styles.message}>{message}</Text>
        <View style={styles.teamInfo}>
          <MaterialCommunityIcons
            style={styles.selectedIcon}
            name="circle"
            size={40}
            color={finalIcon}
          />
          <TextInput
            ref={(input) => {
              textInput = input;
            }}
            style={styles.inputBox}
            placeholder="8 Characters Max"
            maxLength={8}
            onChangeText={(text) => onChangeText(currentTeam, text)}
          />
        </View>
      </View>

      <View style={styles.iconMenu}>
        <Text style={styles.message}>Choose an Icon!</Text>

        <View style={styles.colorSelect}>
          {colors.map((color, i) => (
            <TouchableOpacity
              style={styles.inactive}
              key={i}
              onPress={() => iconSelection(currentIcon, color)}
            >
              <MaterialCommunityIcons name="circle" size={50} color={color} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.submitContainer}>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  // ====================
  // Partial Container Styles
  // ====================

  teamNameInput: {
    alignItems: "center",
    height: "30%",
    justifyContent: "space-around",
    marginBottom: 60,
  },
  message: {
    fontSize: 40,
    marginBottom: 10,
  },
  inputBox: {
    borderRadius: 20,
    borderWidth: 1,
    // underline: 5,
    fontSize: 30,
    width: 300,
    padding: 10,
    backgroundColor: "lightblue",
  },

  teamInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  // ====================
  // Color select Styles
  // ====================

  iconMenu: {
    alignItems: "center",
    marginBottom: 60,
    width: "90%",
  },
  colorSelect: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "space-around",
    width: "100%",
  },
  selectedIcon: {
    marginRight: 10,
  },

  // ====================
  // Submit Styles
  // ====================

  submitContainer: {
    width: "70%",
    height: 60,
    margin: 10,
  },
  submitButton: {
    backgroundColor: "dodgerblue",
    borderRadius: 20,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  submitText: {
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
  },
});
