import React from 'react';
import { Image, StyleSheet, SafeAreaView, View, Text, TouchableHighlight } from 'react-native';

const Homepage = ({ history }) => {
  return (
    <SafeAreaView style={styles.page}>
      <Text style={{ top: 125, fontSize: 50 }}>Know it all</Text>
      <View style={styles.page}>
        <Image
          source={require('../assets/splash.png')}
          style={styles.logo}
        />
      </View>
      <TouchableHighlight 
        style={styles.playNowButton} 
        onPress={() => history.push('/select-category')}
        activeOpacity={0.5}
        underlayColor='#0065d1'
      >
        <Text style={styles.playNow}>Play Now</Text>
      </TouchableHighlight>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  logo: {
    height: 400,
    width: 400,
    bottom: 75
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  playNow: {
    color: '#fff',
    fontSize: 25
  },
  playNowButton: {
    backgroundColor: "#007bff",
    borderRadius: 20,
    bottom: 200,
    fontSize: 100,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200
  }
})

export default Homepage;