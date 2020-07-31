import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, StyleSheet, Text, View, SafeAreaView } from "react-native";
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
  }

  componentDidMount() {
    this.getInfo();
    this.count();
  }

  getInfo() {
    axios
      .get(`${this.props.api}`)
      .then((result) => {
        this.setState(
          {
            question: result.data.results[0].question,
            answer: result.data.results[0].correct_answer,
          },
          () => console.log(this.state.question)
        );
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
      Alert.alert("Team 1 wins!");
      this.props.endRound("team1Wins");
    }

    if (name === "team2Points" && this.state.roundCount < 1) {
      this.setState({
        team2Points: this.state.team2Points + 1,
      });
    }

    if (name === "team2Points" && this.state.team2Points > 5) {
      Alert.alert("Team 2 wins!");
      this.props.endRound("team2Wins");
    }
    console.log(this.state.team1Points);
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
    console.log(this.props.teamInfo);
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
              <Text style={[styles.teamFont, styles.red]}>
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
              <Text style={[styles.teamFont, styles.blue]}>
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
            <Text style={styles.checkQ} onPress={this.checkQuestion}>
              Check Answer
            </Text>
          </View>
          <View style={styles.scoreContainer}>
            <View style={styles.teamContainer}>
              <Text style={[styles.teamFont, styles.red]}>
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
              <Text style={[styles.teamFont, styles.blue]}>
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
            <Text style={styles.nextQ} onPress={this.nextQuestion}>
              Next Question
            </Text>
          </View>
          <View style={styles.scoreContainer}>
            <View style={styles.teamContainer}>
              <Text style={[styles.teamFont, styles.red]}>
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
              <Text style={[styles.teamFont, styles.blue]}>
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
    justifyContent: "center",
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
  nextQ: {
    marginTop: 50,
    fontSize: 25,
    padding: 5,
    color: "white",
    backgroundColor: "rgba(90, 145, 232, .5)",
    borderWidth: 0.1,
    borderRadius: 15,
  },
  checkQ: {
    marginTop: 20,
    fontSize: 25,
    padding: 5,
    color: "white",
    backgroundColor: "rgba(90, 145, 232, .5)",
    borderWidth: 0.1,
    borderRadius: 15,
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
    color: "rgba(255, 255, 255, .3)",
  },
  red: {
    color: "red",
  },
  blue: {
    color: "rgb(90, 145, 232)",
  },
});

export default GameView;
