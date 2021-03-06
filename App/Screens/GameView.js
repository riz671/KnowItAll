import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, StyleSheet, Text, View, SafeAreaView, TouchableHighlight } from "react-native";
import axios from "axios";
import Stats_View from "./StatsView.js";

class GameView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      realQ: "",
      answer: "",
      team1Points: 0,
      team2Points: 0,
      countDown: 3,
      roundCount: 33,
      countPage: true,
      gamePage: false,
      roundFinish: false,
    };
    this.getInfo = this.getInfo.bind(this);
    this.changePoints = this.changePoints.bind(this);
    this.count = this.count.bind(this);
    this.roundCounter = this.roundCounter.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.checkQuestion = this.checkQuestion.bind(this);
    this.goHome = this.goHome.bind(this);
  }

  componentDidMount() {
    this.getInfo();
    this.count();
  }

  getInfo() {
    axios
      .get(`${this.props.api}`)
      .then((result) => {
        this.setState({
          question: result.data.results[0].question,
          answer: result.data.results[0].correct_answer,
        });
      })
      .then(() => {
        let string = this.state.question;

        string = string.replace(/&#039;/g, "'");
        string = string.replace(/&rsquo;/g, "'");
        string = string.replace(/&quot;/g, "'");

        this.setState({
          realQ: string,
        });
      });
  }

  changePoints(e, name) {

    if (name === "team1Points" && this.state.roundCount < 1) {
      this.setState({
        team1Points: this.state.team1Points + 1,
      });
    }

    if (name === "team1Points" && this.state.team1Points > 5) {
      Alert.alert(
        "Team 1 wins!",
        null,
        [
          { 
            text: "Select a Category",
            onPress: () => this.props.history.push("/select-category")
          },
          {
            text: "Go Home",
            onPress: this.goHome
          }
        ]
      );
      this.props.endRound("team1Wins");
    }

    if (name === "team2Points" && this.state.roundCount < 1) {
      this.setState({
        team2Points: this.state.team2Points + 1,
      });
    }

    if (name === "team2Points" && this.state.team2Points > 5) {
      Alert.alert(
        "Team 2 wins!",
        null,
        [
          { 
            text: "Select a Category",
            onPress: () => this.props.history.push("/select-category")
          },
          {
            text: "Go Home",
            onPress: this.goHome
          }
        ]
      );
      this.props.endRound("team2Wins");
    }
  }

  count() {
    var count = 0;
    const myFunction = () => {
      count++;
      if (count > 3) clearInterval(timeout);
      this.setState({
        countDown: this.state.countDown - 1,
      });

      if (this.state.countDown === 0) {
        this.setState({
          countPage: false,
          gamePage: true,
          countDown: 3,
        });
      }
    };
    var timeout = setInterval(myFunction, 1050);

    this.roundCounter();
  }

  roundCounter() {
    var count = 0;
    const myFunction = () => {
      count++;
      if (count > 10000) clearInterval(timeout);
      this.setState({
        roundCount: this.state.roundCount - 1,
      });

      if (this.state.roundCount === 0) {
        this.setState({
          countPage: false,
          gamePage: false,
          roundFinish: true,
        });
      }
    };
    var timeout = setInterval(myFunction, 950);
  }

  nextQuestion() {
    this.getInfo();
    this.setState({
      countPage: false,
      gamePage: true,
      roundFinish: false,
      roundCount: 30,
    });
  }

  checkQuestion() {
    this.setState({
      roundCount: 0,
      countPage: false,
      gamePage: false,
      roundFinish: true,
    });
  }

  goHome() {
    this.props.resetGame();
    this.props.history.push("/");
  }

  render() {
    let stats = (
      <View style={styles.statsContainer}>
        <Stats_View
          teamInfo={this.props.teamInfo}
          team1Points={this.state.team1Points}
          team2Points={this.state.team2Points}
        />
      </View>
    );
    if (this.state.countPage === true) {
      return (
        <SafeAreaView style={styles.container}>
          {stats}
          <View style={styles.categoryContainer}>
            <Text style={styles.h1}>{this.props.category}</Text>
          </View>
          <View style={styles.questionContainer}>
            <Text style={styles.countText}>{this.state.countDown}</Text>
          </View>
          <View style={styles.scoreContainer}>
            <View style={styles.teamContainer}>
              <Text style={{ fontSize: 25, color: this.props.teamInfo.team1Icon }}>
                {this.props.teamInfo.team1Name}
              </Text>
              <Text
                style={styles.teamFont}
                onPress={(e) => this.changePoints(e, "team1Points")}
              >
                {this.state.team1Points}
              </Text>
            </View>
            <View style={styles.teamContainer}>
              <Text style={{ fontSize: 25, color: this.props.teamInfo.team2Icon }}>
                {this.props.teamInfo.team2Name}
              </Text>
              <Text
                style={styles.teamFont}
                onPress={(e) => this.changePoints(e, "team2Points")}
              >
                {this.state.team2Points}
              </Text>
            </View>
          </View>
        </SafeAreaView>
      );
    }

    if (this.state.gamePage === true) {
      return (
        <SafeAreaView style={styles.container}>
          {stats}
          <View style={styles.categoryContainer}>
            <Text style={styles.h1}>{this.props.category}</Text>
          </View>
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{this.state.realQ}</Text>
            <Text style={styles.countText2} onActive={this.roundCounter}>
              {this.state.roundCount}
            </Text>
            <TouchableHighlight
              style={styles.button}
              activeOpacity={0.5}
              underlayColor="#0065d1"
              onPress={this.checkQuestion}
            >
              <Text style={styles.buttonText}>Check Answer</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.scoreContainer}>
            <View style={styles.teamContainer}>
              <Text style={{ fontSize: 25, color: this.props.teamInfo.team1Icon }}>
                {this.props.teamInfo.team1Name}
              </Text>
              <Text
                style={styles.teamFont}
                onPress={(e) => this.changePoints(e, "team1Points")}
              >
                {this.state.team1Points}
              </Text>
            </View>
            <View style={styles.teamContainer}>
              <Text style={{ fontSize: 25, color: this.props.teamInfo.team2Icon }}>
                {this.props.teamInfo.team2Name}
              </Text>
              <Text
                style={styles.teamFont}
                onPress={(e) => this.changePoints(e, "team2Points")}
              >
                {this.state.team2Points}
              </Text>
            </View>
          </View>
        </SafeAreaView>
      );
    }

    if (this.state.roundFinish === true) {
      return (
        <SafeAreaView style={styles.container}>
          {stats}
          <View style={styles.categoryContainer}>
            <Text style={styles.h1}>{this.props.category}</Text>
          </View>
          <View style={styles.questionContainer}>
            <Text style={styles.answer}>Answer: </Text>
            <Text style={styles.questionText2}>{this.state.answer}</Text>
            <TouchableHighlight
              style={styles.button}
              activeOpacity={0.5}
              underlayColor="#0065d1"
              onPress={this.nextQuestion}
            >
              <Text style={styles.buttonText}>Next Question</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.scoreContainer}>
            <View style={styles.teamContainer}>
              <Text style={{ fontSize: 25, color: this.props.teamInfo.team1Icon }}>
                {this.props.teamInfo.team1Name}
              </Text>
              <Text
                style={styles.teamFont}
                onPress={(e) => this.changePoints(e, "team1Points")}
              >
                {this.state.team1Points}
              </Text>
            </View>
            <View style={styles.teamContainer}>
              <Text style={{ fontSize: 25, color: this.props.teamInfo.team2Icon }}>
                {this.props.teamInfo.team2Name}
              </Text>
              <Text
                style={styles.teamFont}
                onPress={(e) => this.changePoints(e, "team2Points")}
              >
                {this.state.team2Points}
              </Text>
            </View>
          </View>
        </SafeAreaView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#383e4e",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  statsContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "95%",
    color: "black",
    marginTop: 10,
  },
  categoryContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, .3)",
    borderRadius: 30,
    height: 60,
    width: 350,
    zIndex: -1,
  },
  h1: {
    fontSize: 35,
    color: "#383e4e",
  },
  questionContainer: {
    backgroundColor: "rgba(255, 255, 255, .3)",
    borderRadius: 20,
    height: 350,
    width: 350,
    alignItems: "center",
    justifyContent: "space-around",
  },
  questionText: {
    fontSize: 30,
    padding: 5,
    color: "#383e4e",
    marginLeft: 15,
  },
  questionText2: {
    marginTop: 30,
    fontSize: 30,
    padding: 5,
    color: "#383e4e",
  },
  answer: {
    fontSize: 30,
    padding: 5,
    color: "#383e4e",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 175,
    backgroundColor: '#5a91e8',
    marginTop: 10,
    borderRadius: 15,
    alignContent: "flex-end"
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
  countText: {
    fontSize: 100,
    padding: 5,
    color: "#383e4e",
  },
  countText2: {
    marginTop: 20,
    fontSize: 50,
    padding: 5,
    color: "#383e4e",
  },
  scoreContainer: {
    flexDirection: "row",
    height: 100,
    justifyContent: "space-between",
    marginBottom: 50,
    width: 350,
  },
  teamContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 20,
    height: "100%",
    width: "10%",
  },
  teamFont: {
    fontSize: 25,
    color: "white",
  },
});

export default GameView;
