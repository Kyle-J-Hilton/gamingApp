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


const ForgotPasswordScreen = () => {
const [email, setEmail] = useState('');
const navigation = useNavigation();

const onSendPressed = () => {
  console.warn('send button pressed');

  navigation.navigate('ResetPassword')
} 

const onGoBackPressed = () => {
  console.warn('Go Back button has been pressed');

  navigation.navigate('SignIn')
}

  return (
    <ImageBackground
      style={{ width: "100%", height: "100%", backgroundColor: "#c89ed0" }}>
        <View style={styles.main}>
          <Text style={styles.textTitle}>Forgot Password </Text>
          <CustomInput 
            placeholder="Enter your Email and press send to get reset code" 
            value={email} 
            setValue={setEmail} 
          />
          <CustomButton text="Send Code" type="PRIMARY" onPress={onSendPressed} />
          <CustomButton text="Go back to login" type="TERTIARY" onPress={onGoBackPressed} />
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

    text: {
        fontSize: 15,
        color: 'white',
    },

    link: {
        fontSize: 15,
        color: 'orange',
    },

    textTitle: {
        fontSize: 65,
        textAlign: "center",
        fontFamily: "Madison Street",
        color: "orange",
        margin: 5,
    },
});
export default ForgotPasswordScreen;
