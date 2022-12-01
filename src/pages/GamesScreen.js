import * as React from "react";
import {
  ImageBackground,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";

//Games Library screen $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
const GamesScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/arcadeScreen.png")}
      style={{ width: "100%", height: "100%", backgroundColor: "#bfc2bf" }}
    >
      <ScrollView ScrollView style={{ marginTop: 20 }}>
        <Text style={styles.textGrey}>Play Games</Text>
        <Pressable style={styles.flexRowContainer}>
          <Image
            source={require("../../assets/snake.png")}
            style={styles.games}
          ></Image>
          <Text style={styles.textGame}>Snake</Text>
        </Pressable>
        <Pressable style={styles.flexRowContainer}>
          <Image
            source={require("../../assets/tetrisGame.png")}
            style={styles.games}
          ></Image>
          <Text style={styles.textGame}>Tetris</Text>
        </Pressable>
        <Pressable style={styles.flexRowContainer}>
          <Image
            source={require("../../assets/racingGame.png")}
            style={styles.games}
          ></Image>
          <Text style={styles.textGame}>NASCAR</Text>
        </Pressable>
        <Pressable style={styles.flexRowContainer}>
          <Image
            source={require("../../assets/fighterGame.png")}
            style={styles.games}
          ></Image>
          <Text style={styles.textGame}>Fighting</Text>
        </Pressable>
        <Pressable style={styles.flexRowContainer}>
          <Image
            source={require("../../assets/chess.png")}
            style={styles.games}
          ></Image>
          <Text style={styles.textGame}>Chess Wiz</Text>
        </Pressable>
        <Pressable style={styles.flexRowContainer}>
          <Image
            source={require("../../assets/cards.png")}
            style={styles.games}
          ></Image>
          <Text style={styles.textGame}>Super Spades</Text>
        </Pressable>
        <Pressable style={styles.flexRowContainer}>
          <Image
            source={require("../../assets/duckHunt.png")}
            style={styles.games}
          ></Image>
          <Text style={styles.textGame}>Goose Hunt</Text>
        </Pressable>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  textGame: {
    fontSize: 25,
    fontFamily: "sans-sarif",
    textAlign: "center",
    color: "#c89ed0",
    fontWeight: "bold",
    textShadowColor: "black",
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 1,

    marginTop: 25,
  },
  textGrey: {
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Madison Street",
    color: "#272727",
    margin: 5,
  },
  games: {
    width: 200,
    height: 100,
    marginTop: 15,
    borderWidth: 5,
    borderRadius: 20,
    borderColor: "#c89ed0",
  },
  flexRowContainer: {
    flexDirection: "row",
  },
});

export default GamesScreen;
