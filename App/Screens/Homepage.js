import React from 'react';
import { Image, StyleSheet, SafeAreaView, View, Text, TouchableHighlight } from 'react-native';

const Homepage = ({ history }) => {
  return (
    <SafeAreaView style={styles.page}>
      <Text style={styles.title}>Know it all</Text>
      <View style={styles.page}>
        <Image
          source={require('../assets/splash.png')}
          style={styles.logo}
        />
      </View>
      <TouchableHighlight 
        style={styles.playNowButton} 
        onPress={() => history.push('/team-select')}
        activeOpacity={0.5}
        underlayColor='#0065d1'
      >
        <Text style={styles.playNow}>Play Now</Text>
      </TouchableHighlight>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#383e4e',
    width: '100%',
  },
  logo: {
    height: 400,
    width: 400,
    marginBottom: 75
  },
  title: {
    color: '#fff',
    marginTop: 125, 
    fontSize: 50 
  },
  playNow: {
    color: '#fff',
    fontSize: 25
  },
  playNowButton: {
    backgroundColor: "#5a91e8",
    borderRadius: 20,
    marginBottom: 200,
    fontSize: 100,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200
  }
})

export default Homepage;