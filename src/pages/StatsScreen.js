import * as React from "react";
import {
  ImageBackground,
  Text,
  StyleSheet,
  ScrollView,
  View,
  FlatList,
} from "react-native";


//Game Stats and Leader Boards screen $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
const DATA = [
    { key: "kyle 100000000 pts" },
    { key: "mayson 50000 pts" },
    { key: "jnjask 1000pts" },
    { key: "adsfjk 900 pts" },
    { key: "ynojdksa 900 pts" },
    { key: "stephen 850 pts" },
    { key: "tiffany 820 pts" },
    { key: "alexander 820 pts" },
    { key: "boob 600 pts" },
    { key: "le marc 500 pts" },
    { key: "pickel 450 pts" },
    { key: "adssk 440 pts" },
    { key: "sk 200 pts" },
  ]
  
  const StatsSreen = () => {
    return (
    <ImageBackground
      source={require("../../assets/leaderBoardWall.png")}
      style={{ width: "100%", height: "100%", backgroundColor: '#bfc2bf' }}
    >
      <View>
        <Text style={styles.textGrey}>View Stats and Leader Boards:</Text>
        <ScrollView horizontal={true}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <Text style={styles.textGreen}>{item.key}</Text>
            )}
          />
         <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <Text style={styles.textGreen}>{item.key}</Text>
            )}
          />
         <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Text style={styles.textGreen}>{item.key}</Text>
          )}
          />
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <Text style={styles.textGreen}>{item.key}</Text>
            )}
          />
        </ScrollView>
      </View>
    </ImageBackground>
  )};

  const styles = StyleSheet.create({
    text: {
      fontSize: 25,
      fontFamily: "sans-sarif",
      textAlign: 'center',
      color: "white",
      textShadowColor: "rgba(72,61,139)",
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 1,
    },
    textGrey: {
      fontSize: 40,
      textAlign: 'center',
      fontFamily: "Madison Street",
      color: "#272727",
      margin: 5,
    },
    textGreen: {
      fontSize: 40,
      fontFamily: "Madison Street",
      textAlign: 'center',
      color: '#7ad6d6',
      textShadowColor: "rgba(72,61,139, 0.75)",
      textShadowOffset: { width: -1, height: 0 },
      textShadowRadius: 1,
      margin: 5,
    }
  });

export default StatsSreen ;