import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default function CategoriesSelect(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 30}}>Select A Category!</Text>
      <View style={styles.categories}>
        {props.categories.map((cat) => {
          return (
            <TouchableHighlight style={styles.button} onPress={() => {console.log('Pressed')}}>
              <Text style={{fontSize: 20}}>{cat.title}</Text>
            </TouchableHighlight>
          )
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    top: 30,
  },
  categories: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  button: {
    width: 150,
    height: 70,
    margin: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
  }
});
