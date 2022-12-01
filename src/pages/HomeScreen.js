import React, {useState} from "react";
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  
} from "react-native";
import CustomInput from '../components/CustomInput/CustomInput'
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');



const onEnterPressed = () => {
  console.warn('Enter button has been pressed');

} 

const onForgotPressed = () => {
  console.warn('Forgot Passowrd');

  navigation.navigate('ForgotPassword')
}

const onGooglePressed = () => {
  console.warn('Google button has been pressed');
} 

const onFaceBookPressed = () => {
  console.warn('Facebook button has been pressed');
}

const onNewUserPressed = () => {
  console.warn('Sign up button has been pressed');

  navigation.navigate('SignUp')
}

  return (
    <ImageBackground
      source={require("../../assets/gameScreen.png")}
      style={{ width: "100%", height: "100%", backgroundColor: "#c89ed0" }}>
        <View style={styles.main}>
          <Text style={styles.textTitle}>Gaming WZRD </Text>
          <CustomInput 
            placeholder="Username" 
            value={username} 
            setValue={setUsername} 
          />
          <CustomInput 
            placeholder="Password" 
            value={password} 
            setValue={setPassword}  
            secureTextEntry={true}
          />
          <CustomButton text="ENTER" type="PRIMARY" onPress={onEnterPressed} />
          <CustomButton text="Forgot Password" type="TERTIARY" onPress={onForgotPressed} />
          <View style={styles.flexContainer}>
            <CustomButton 
              text="Sign in with Google" 
              type="SECONDARYleft" 
              bgColor="#FAE9EA" 
              fgColor="#DD4D44"
              onPress={onGooglePressed} />
            <CustomButton 
              text="Sign in with FaceBook" 
              type="SECONDARYright" 
              bgColor="#E7EAF4" 
              fgColor="#4765A9"
              onPress={onFaceBookPressed} />
          </View>
          <CustomButton text="New User Sign Up" type="TERTIARY" onPress={onNewUserPressed} />
        </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 0,
  },
  flexContainer: {
    flexDirection: 'row',  
  },
  textTitle: {
    fontSize: 65,
    textAlign: "center",
    fontFamily: "Madison Street",
    color: "orange",
    margin: 5,
  },
});
export default HomeScreen;
