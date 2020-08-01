import React, { useRef, useEffect } from "react";
import {
  Image,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableHighlight,
  Animated,
} from "react-native";

const Homepage = ({ history }) => {
  const logoFadeIn = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(logoFadeIn, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [logoFadeIn]);
  return (
    <SafeAreaView style={styles.page}>
      <Text style={styles.title}>Know it all</Text>
      <View style={styles.page}>
        <Animated.View
          style={{
            opacity: logoFadeIn,
          }}
        >
          <Image
            source={require("../assets/mainLogo.png")}
            style={styles.logo}
          />
        </Animated.View>
      </View>
      <TouchableHighlight
        style={styles.playNowButton}
        onPress={() => history.push("/team-select")}
        activeOpacity={0.5}
        underlayColor="#0065d1"
      >
        <Text style={styles.playNow}>Play Now</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#383e4e",
    width: "100%",
  },
  logo: {
    height: 250,
    width: 250,
    marginBottom: 40,
    marginLeft: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    marginTop: 125,
    fontSize: 50,
  },
  playNow: {
    color: "#fff",
    fontSize: 25,
  },
  playNowButton: {
    backgroundColor: "#5a91e8",
    borderRadius: 20,
    marginBottom: 200,
    fontSize: 100,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    width: 200,
  },
});

export default Homepage;
