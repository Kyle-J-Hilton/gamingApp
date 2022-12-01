import React, { useState } from "react";
import {
  ImageBackground,
  Text,
  StyleSheet,
  Switch,
  View,
} from "react-native";
import Slider from "@react-native-community/slider";

//Settings Sreen $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
const SettingsScreen = () => {

    const [isMusicEnabled, setIsMusicEnabled] = useState(false);
    const toggleMusicSwitch = () => setIsMusicEnabled(previousState => !previousState);

    const [isSFXEnabled, setIsSFXEnabled] = useState(false);
    const toggleSFXSwitch = () => setIsSFXEnabled(previousState => !previousState);

    
    const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
    const toggleDarkModeSwitch = () => setIsDarkModeEnabled(previousState => !previousState);

    const [isSuggestionsEnabled, setIsSuggestionsEnabled] = useState(false);
    const toggleSuggestionsSwitch = () => setIsSuggestionsEnabled(previousState => !previousState);

    const [isUserNameEnabled, setIsUserNameEnabled] = useState(false);
    const toggleUserNameSwitch = () => setIsUserNameEnabled(previousState => !previousState);


  return (
    <ImageBackground
      source={require("../../assets/gameScreen.png")}
      style={{ width: "100%", height: "100%", backgroundColor: "#c89ed0" }}
    >
      <View>
        <Text style={styles.textGrey}>Choose Settings</Text>
        <Text style={styles.text}>Audio Voulume</Text>
        <Slider
          style={{ width: 300, height: 40 }}
          minimumValue={0}
          maximumValue={10}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
        <View style={styles.flexRowContainer}>
          <View>
            <Text style={styles.text}>Music</Text>
            <Switch
                 trackColor={{ false: "#767577", true: '#7ad6d6' }}
                 thumbColor={isMusicEnabled ? "#f4f3f4" : "#f4f3f4"}
                 ios_backgroundColor="#3e3e3e"
                 onValueChange={toggleMusicSwitch}
                 value={isMusicEnabled}
            />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.text}>Sound Effects</Text>
            <Switch
                trackColor={{ false: "#767577", true: '#7ad6d6' }}
                thumbColor={isSFXEnabled ? "#f4f3f4" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSFXSwitch}
                value={isSFXEnabled}
            />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.text}>Dark Mode</Text>
            <Switch
                trackColor={{ false: "#767577", true: '#7ad6d6' }}
                thumbColor={isDarkModeEnabled ? "#f4f3f4" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleDarkModeSwitch}
                value={isDarkModeEnabled}
            />
          </View>
        </View>
        <View style={styles.flexRowContainer}>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.text}>Suggestions</Text>
            <Switch
                trackColor={{ false: "#767577", true: '#7ad6d6' }}
                thumbColor={isSuggestionsEnabled ? "#f4f3f4" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSuggestionsSwitch}
                value={isSuggestionsEnabled}
            />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.text}>Display UserName</Text>
            <Switch
                trackColor={{ false: "#767577", true: '#7ad6d6' }}
                thumbColor={isUserNameEnabled ? "#f4f3f4" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleUserNameSwitch}
                value={isUserNameEnabled}
            />
          </View>
          <Text></Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontFamily: "sans-sarif",
    textAlign: "center",
    color: "white",
    textShadowColor: "rgba(72,61,139)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },
  textGrey: {
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Madison Street",
    color: "#272727",
    margin: 5,
  },
  textGreen: {
    fontSize: 40,
    fontFamily: "Madison Street",
    textAlign: "center",
    color: "#7ad6d6",
    textShadowColor: "rgba(72,61,139, 0.75)",
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 1,
    margin: 5,
  },
  flexRowContainer: {
    flexDirection: "row",
  },
  onOffSwitch: {
    marginHorizontal: 12,
  },
});

export default SettingsScreen;
