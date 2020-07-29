import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';

import Categories from './categories.js';
import Homepage from './app/screens/Homepage.js';
import CategoriesSelect from './app/screens/CategoriesSelect.js';
import GameView from './app/screens/GameView.js';

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/select-category" render={props => <CategoriesSelect {...props} categories={Categories}/>} />
          {Categories.map((category, i) => (
            <Route exact path={`/${category.endpoint}`} key={i} render={props => <GameView {...props} category={category.title} api={category.api} />} />
          ))}
        </Switch>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
