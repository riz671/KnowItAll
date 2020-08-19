import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StatsData from './StatsViewComp/StatsData';

export default class StatsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySmallStatsPage: true,
      team1Draws: 0,
      team1Turn: true,
    };
    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleClick() {
    this.setState({ displaySmallStatsPage: !this.state.displaySmallStatsPage });
  }

  render() {
    const {
      displaySmallStatsPage,
      team1Draws,
      team1Turn,
    } = this.state;

    const {
      team1Points,
      team2Points,
      teamInfo,
    } = this.props;

    const {
      team1Name,
      team2Name,
      team1Wins,
      team2Wins,
      team1Icon,
      team2Icon,
    } = teamInfo;

    // stores structure for detailed stats page
    const detailedStats = (
      <View style={styles.visibleContainer} onPress={this.toggleClick}>
        <LinearGradient
          colors={['rgba(255, 255, 255, .3)', 'rgba(255, 255, 255, .3)']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '100%',
            borderRadius: 20,
          }}
        />
        <View style={styles.innerContainer}>
          <View style={styles.teamFlexContainer}>
            {/* Team 1 */}
            <View style={styles.teamBox}>
              <View style={styles.teamHeader}>
                <Image
                  style={[styles.teamLogo, { backgroundColor: team1Icon }]}
                />

                <Text style={styles.teamTitle}>{team1Name}</Text>
              </View>

              <StatsData
                teamName={team1Name}
                score={team1Points}
                wins={team1Wins}
                losses={team2Wins}
                draws={team1Draws}
              />
            </View>

            <View style={styles.divider} />

            {/* Team 2 */}
            <View style={styles.teamBox}>
              <View style={styles.teamHeader}>
                <Image
                  style={[styles.teamLogo, { backgroundColor: team2Icon }]}
                />

                <Text style={styles.teamTitle}>{team2Name}</Text>
              </View>

              <StatsData
                teamName={team2Name}
                score={team2Points}
                wins={team2Wins}
                losses={team1Wins}
                draws={team1Draws}
              />
            </View>
          </View>
        </View>
      </View>
    );

    const partialStats = (
      <View style={styles.partialContainer} onPress={this.toggleClick}>
        <LinearGradient
          colors={['rgba(255, 255, 255, .3)', 'rgba(255, 255, 255, .3)']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '170%',
            borderRadius: 20,
          }}
        />
        {/* Team 1 */}
        <View style={styles.partialTeamBox}>
          <View>
            <Text style={styles.partialTitle}>{team1Name}</Text>
          </View>

          <View>
            <Text style={styles.partialScore}>
              {'   '}
              {team1Wins}
              {' '}
              WON
            </Text>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Team 2 */}
        <View style={styles.partialTeamBox}>
          <View>
            <Text style={styles.partialTitle}>{team2Name}</Text>
          </View>

          <View>
            <Text style={styles.partialScore}>
              {'   '}
              {team2Wins}
              {' '}
              WON
            </Text>
          </View>
        </View>
      </View>
    );

    const correctContainer = displaySmallStatsPage
      ? partialStats
      : detailedStats;

    return (
      <SafeAreaView style={styles.mainContainer}>
        <TouchableOpacity focusedOpacity={0.9} onPress={this.toggleClick}>
          {correctContainer}
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  // ====================
  // Partial Container Styles
  // ====================
  partialContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    height: '100%',
    padding: 10,
    width: '100%',
    backgroundColor: '#383e4e',
  },
  partialTeamBox: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    flex: 1,
  },
  // ====================
  // Status Icon Style
  // ====================
  iconTemplate: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    borderWidth: 0.25,
    marginRight: 6,
    marginLeft: 3,
    opacity: 0,
  },
  activeIcon: {
    backgroundColor: '#00FA9A',
  },
  inactiveIcon: {
    backgroundColor: '#DC143C',
  },
  // ====================
  // Partial Stats Detail Style
  // ====================
  partialTitle: {
    flex: 3,
    paddingHorizontal: 3,
    lineHeight: 30,
    fontSize: 20,
    color: '#fff',
  },
  partialScore: {
    flex: 3,
    lineHeight: 30,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
  // ====================
  // Main Container
  // ====================
  visibleContainer: {
    alignItems: 'center',
    borderRadius: 20,
    width: '100%',
    height: 185,
    color: 'black',
    zIndex: 5,
    backgroundColor: '#383e4e',
  },
  innerContainer: {
    margin: 10,
  },
  // ====================
  // Team Container Styles
  // ====================
  teamFlexContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 20,
    flex: 1,
  },
  teamBox: {
    margin: 5,
    marginHorizontal: 14,
    width: 160,
    alignItems: 'center',
    borderRadius: 20,
    height: 150,
  },
  // ====================
  // Team Header Styles
  // ====================
  teamHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    paddingBottom: 0,
  },
  teamLogo: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    borderWidth: 0.5,
  },
  teamTitle: {
    lineHeight: 20,
    fontSize: 20,
    marginBottom: -4,
    paddingLeft: 8,
    paddingRight: 4,
    color: '#fff',
  },
  divider: {
    borderLeftWidth: 1.5,
    borderLeftColor: 'rgba(0, 0, 0, 0.5)',
  },
});
