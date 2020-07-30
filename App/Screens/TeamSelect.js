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

export default function TeamSelect({ history, state, onChangeText, iconSelection, onSubmit }) {
  let message, currentTeam, currentIcon;
  let colors = ["crimson", "steelblue", "mediumseagreen", "gold", "gray", "purple"];

  if (state.team1Selected) {
    message = "Enter Team 1 Name:";
    currentTeam = "team1Name";
    currentIcon = "team1Icon";
  } else {
    message = "Enter Team 2 Name:";
    currentTeam = "team2Name";
    currentIcon = "team2Icon";
  }

  let textInput = null;

  const handleSubmit = () => {
    onSubmit();
    textInput.clear();
    !state.team1Selected && state.team2Icon ? history.push('/select-category') : null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.teamNameInput}>
        <Text style={styles.message}>{message}</Text>
        <TextInput
          ref={(input) => { textInput = input; }}
          style={styles.inputBox}
          placeholder="8 Characters Max"
          maxLength={8}
          onChangeText={(text) => onChangeText(currentTeam, text)}
        />
      </View>

      <View style={styles.iconMenu}>
        <Text style={styles.message}>Choose an Icon!</Text>

        <View style={styles.colorSelect}>
          {colors.map((color, i) => (
              <TouchableOpacity key={i} onPress={() => iconSelection(currentIcon, color)}>
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

  // ====================
  // Color select Styles
  // ====================

  iconMenu: {
    alignItems: "center",
    marginBottom: 60,
  },
  colorSelect: {
    flexDirection: "row",
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
