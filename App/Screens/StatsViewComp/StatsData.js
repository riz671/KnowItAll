import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class StatsData extends React.Component {
  constructor(props) {
    super(props);
    const {
      score,
      wins,
      losses,
      draws,
    } = this.props;

    this.state = {
      score,
      wins,
      losses,
      draws,
    };
  }

  render() {
    const {
      score, wins, losses, draws,
    } = this.state;

    return (
      <View style={styles.dataContainer}>
        <View style={styles.dataBox}>
          <Text style={styles.title}>
            Score:
            <Text style={styles.scorePoints}>
              {' '}
              {score}
            </Text>
          </Text>
          <Text style={styles.title}>
            Wins:
            {' '}
            <Text style={styles.scorePoints}>{wins}</Text>
          </Text>
          <Text style={styles.title}>
            Losses:
            {' '}
            <Text style={styles.scorePoints}>{losses}</Text>
          </Text>
          <Text style={styles.title}>
            Draws:
            {' '}
            <Text style={styles.scorePoints}>{draws}</Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dataContainer: {
    width: '100%',
    margin: 10,
    alignItems: 'center',
    flex: 1,
    borderTopWidth: 1,
    paddingTop: 10,
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
    fontWeight: 'bold',
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
    color: 'black',
    marginBottom: 2,
    alignItems: 'center',
  },
});
