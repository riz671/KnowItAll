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
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default class TeamSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team1Selected: true,
      team1Name: "",
      team2Name: "",
      team1Icon: "",
      team2Icon: "",
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeText = (team, text) => {
    this.setState({
      [team]: text,
    });
  };

  iconSelection(team, colorName) {
    this.setState(
      {
        [team]: colorName,
      },
      () => console.log(this.state)
    );
  }

  onSubmit() {
    let {
      team1Selected,
      team1Name,
      team2Name,
      team1Icon,
      team2Icon,
    } = this.state;

    if (team1Selected && (!team1Name.length || !team1Icon.length)) {
      alert("Input remaining fields for Team 1");
    } else if (team1Selected) {
      this.setState({ team1Selected: false });
    }

    if (!team1Selected && (!team2Name.length || !team2Icon.length)) {
      alert("Input remaining fields for Team 2");
    } else if (!team1Selected) {
      console.log("pass info to Stats, forward page to categoriesSelect");
    }
  }

  render() {
    let message, placeholderText, currentTeam, currentIcon;
    let colors = [
      "crimson",
      "steelblue",
      "mediumseagreen",
      "gold",
      "gray",
      "purple",
    ];

    if (this.state.team1Selected) {
      message = "Enter Team 1 Name: ";
      currentTeam = "team1Name";
      currentIcon = "team1Icon";
    } else {
      message = "Enter Team 2 Name: ";
      currentTeam = "team2Name";
      currentIcon = "team2Icon";
    }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.teamNameInput}>
          <Text style={styles.message}>{message}</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="8 Characters Max"
            maxLength={8}
            onChangeText={(text) => this.onChangeText(currentTeam, text)}
          />
        </View>

        <View style={styles.iconMenu}>
          <Text style={styles.message}>Choose an Icon!</Text>

          <View style={styles.colorSelect}>
            {colors.map((color) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    this.iconSelection(currentIcon, color);
                  }}
                >
                  <MaterialCommunityIcons
                    name="circle"
                    size={50}
                    color={color}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={styles.submitContainer}>
          <TouchableOpacity style={styles.submitButton} onPress={this.onSubmit}>
            <Text style={styles.submitText}>Submit</Text>
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
    // fontSize: 30,
  },
  // ====================
  // Partial Container Styles
  // ====================
  teamNameInput: {
    flex: 2,
    justifyContent: "space-around",
    alignItems: "center",
  },
  message: {
    fontSize: 40,
  },
  inputBox: {
    // borderColor: "gray",
    borderWidth: 1,
    underline: 5,
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
    backgroundColor: "darkred",
  },
  colorSelect: {
    flexDirection: "row",
  },
  // ====================
  // Submit Styles
  // ====================
  submitContainer: {
    flex: 1,
    width: "70%",
    margin: 10,
    // backgroundColor: ''
  },
  submitButton: {
    borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizantal: 10,
    alignItems: "center",
  },
  submitText: {
    paddingHorizantal: 50,
    paddingVertical: 5,
    fontSize: 30,
  },
};
