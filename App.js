import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';

import Categories from './categories.js';
import Homepage from './app/screens/Homepage.js';
import CategoriesSelect from './app/screens/CategoriesSelect.js';
import GameView from './app/screens/GameView.js';
import TeamSelect from './app/screens/TeamSelect.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      team1Selected: true,
      team1Name: '',
      team2Name: '',
      team1Icon: '',
      team2Icon: '',
      team1Wins: 0,
      team2Wins: 0,
    };
    this.resetGame = this.resetGame.bind(this);
    this.endRound = this.endRound.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.iconSelection = this.iconSelection.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };

  resetGame() {
    this.setState({
      team1Selected: true,
      team1Name: '',
      team2Name: '',
      team1Icon: '',
      team2Icon: '',
      team1Wins: 0,
      team2Wins: 0,
    });
  };

  endRound(winner) { // --> winner is either 'team1Wins' or 'team2Wins'
    this.setState({
      [winner]: this.state[winner] + 1
    });
  }

  onChangeText = (team, text) => {
    this.setState({
      [team]: text,
    });
  };

  iconSelection(team, colorName) {
    this.setState({
      [team]: colorName,
    });
  };

  onSubmit() {
    let { team1Selected, team1Name, team2Name, team1Icon, team2Icon } = this.state;

    if (team1Selected && (!team1Name.length || !team1Icon.length)) {
      alert("Input remaining fields for Team 1");
    } else if (team1Selected) {
      this.setState({ team1Selected: false });
    }

    if (!team1Selected && (!team2Name.length || !team2Icon.length)) {
      alert("Input remaining fields for Team 2");
    }

    console.log(this.state);
  }

  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/team-select" 
              render={props => (
                <TeamSelect {...props} state={this.state} onChangeText={this.onChangeText} iconSelection={this.iconSelection} onSubmit={this.onSubmit} />
              )} 
            />
            <Route exact path="/select-category" render={props => <CategoriesSelect {...props} categories={Categories}/>} />
            {Categories.map((category, i) => (
              <Route exact path={`/${category.endpoint}`} key={i}
                render={props => <GameView {...props} category={category.title} api={category.api} teamInfo={this.state} endRound={this.endRound} />} 
              />
            ))}
          </Switch>
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
