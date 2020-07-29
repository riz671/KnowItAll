import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView} from "react-native";
import axios from 'axios';

class GameView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      realQ: "",
      answer: "",
      team1Points: 0,
      team2Points: 0
    }
    this.getInfo = this.getInfo.bind(this);
  }

  componentDidMount() {
    this.getInfo();
  }

  getInfo() {
    axios.get(`${this.props.api}`)
    .then(result => {
      this.setState ({
        question: result.data.results[0].question,
        answer: result.data.results[0].correct_answer
      }, () => console.log(this.state.question))
    })
    .then(() => {
      let string = this.state.question;

      string = string.replace(/&#039;/g, "'")

      this.setState ({
        realQ: string
      })
    })
  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.categoryContainer}>
          <Text style={styles.h1}>{this.props.category}</Text>
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{this.state.realQ}</Text>
        </View>
        <View style={styles.scoreContainer}>
          <View style={styles.teamContainer}>
            <Text style={[styles.teamFont, styles.red]}>Red Team</Text>
            <Text style={styles.teamFont}>{this.state.team1Points}</Text>
          </View>
          <View style={styles.teamContainer}>
            <Text style={[styles.teamFont, styles.blue]}>Blue Team</Text>
            <Text style={styles.teamFont}>{this.state.team2Points}</Text>
          </View>
        </View>
      </SafeAreaView>
      // <View style={styles.container}>
      //   <View style={card.container}>
      //     <Text style={category}>{this.props.category}</Text>
      //     <View style={question.container}>
      //       <TouchableOpacity style={start.container}>
      //         <Text>START</Text>
      //       </TouchableOpacity>
      //       <Text style={ask.container}>{this.state.realQ}</Text>
      //     </View>
      //     <View style={teams.container}>
      //       <Text style={team1.container}>{this.props.team1}</Text>
      //       <Text style={team2.container}>{this.props.team2}</Text>
      //     </View>
      //     <View style={points.container}>
      //       <Text style={point1.container}>{this.state.team1Points}</Text>
      //       <Text style={point2.container}>{this.state.team2Points}</Text>
      //     </View>
      //   </View>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#383e4e",
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
  },
  categoryContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    height: 60,
    marginBottom: 50,
    width: 350,
  },
  h1: {
    fontSize: 35,
  },
  questionContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: 350,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionText: {
    fontSize: 20,
    padding: 5,
  },
  scoreContainer: {
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-between',
    marginTop: 50,
    width: 350,
  },
  teamContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 20,
    height: '100%',
    width: '10%',
  },
  teamFont: {
    fontSize: 25,
  },
  red: {
    color: 'red',
  },
  blue: {
    color: 'blue',
  },
})

// const start = StyleSheet.create ({
//   container: {
//     alignItems: "center",
//     backgroundColor: "#DDDDDD",
//     padding: 10,
//     borderRadius: 15,
//     width: 150,
//     left: 97,
//     top: 50,
//   },
// })

// const points = StyleSheet.create ({
//   container: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 50,
//   },
// })

// const point1 = StyleSheet.create ({
//   container: {
//     color: "red",
//     padding: 50,
//     marginLeft: -50,
//     fontSize: 30,
//   }
// })

// const point2 = StyleSheet.create ({
//   container: {
//     color: "lightblue",
//     fontSize: 30,
//     marginLeft: 95,
//   }
// })

// const teams = StyleSheet.create ({
//   container: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 40,
//   },
// })

// const team1 = StyleSheet.create ({
//   container: {
//     color: "red",
//     padding: 50,
//     marginLeft: -40,
//     fontSize: 25,
//   }
// })

// const team2 = StyleSheet.create ({
//   container: {
//     color: "lightblue",
//     fontSize: 25,
//   }
// })

// const ask = StyleSheet.create ({
//   container: {
//     flex: 1,
//     fontSize: 30,
//     borderRadius: 30,
//     width: 350,
//     height: 350,
//     padding: 30,
//     textAlignVertical: "center",
//     lineHeight: 50,
//     backgroundColor: "rgba(255, 255, 255, 0.3)",
//     color: "black",
//   },
// });

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#383e4e",
//     alignItems: "center",
//     justifyContent: "center",
//     width: '100%',
//   },
// });

// const question = StyleSheet.create({
//   container: {
//     flex: 0,
//     marginTop: 50,
//     // backgroundColor: "white",
//     width: 350,
//     height: 350,
//     zIndex: 4,
//     opacity: 1,
//     borderRadius: 30,
//   },
// });

// const card = StyleSheet.create({
//   container: {
//     backgroundColor: "rgba(255, 255, 255, 0.3)",
//     width: 350,
//     height: 60,
//     padding: 20,
//     bottom: 280,
//     borderRadius: 30,
//     alignItems: "center",
//     zIndex: 2,
//     opacity: .7,
//   },
// });

// const category = StyleSheet.create({
//   top: -12,
//   fontSize: 30,
// });

export default GameView;