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


const SignUpScreen = () => {
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [passwordRepeat, setPasswordRepeat] = useState('');
const navigation = useNavigation();

const onSignUpPressed = () => {
  console.warn('Sign up button has been pressed');

  navigation.navigate('SignIn')
} 

const onGooglePressed = () => {
  console.warn('Google button has been pressed');
} 

const onFaceBookPressed = () => {
  console.warn('Facebook button has been pressed');
}

const onGoBackPressed = () => {
  console.warn('Go Back button has been pressed');

  navigation.navigate('SignIn')
}

  return (
    <ImageBackground
      style={{ width: "100%", height: "100%", backgroundColor: "#c89ed0" }}>
        <View style={styles.main}>
          <Text style={styles.textTitle}>Sign Up </Text>
          <CustomInput 
            placeholder="Create Username" 
            value={username} 
            setValue={setUsername} 
          />
          <CustomInput 
            placeholder="Email" 
            value={email} 
            setValue={setEmail} 
          />
          <CustomInput 
            placeholder="Password" 
            value={password} 
            setValue={setPassword}  
            secureTextEntry={true}
          />
           <CustomInput 
            placeholder="Confirm Password" 
            value={passwordRepeat} 
            setValue={setPasswordRepeat}  
            secureTextEntry={true}
          />
          <CustomButton text="Sign Up" type="PRIMARY" onPress={onSignUpPressed} />
          <Text style={styles.text}>
                By registering you confirm that you accept our 
            <Text style={styles.link}> Terms of use </Text> 
                and 
            <Text style={styles.link}> Privicy policy</Text>
            </Text>
          <View style={styles.flexContainer}>
            <CustomButton 
              text="Use Google" 
              type="SECONDARYleft" 
              bgColor="#FAE9EA" 
              fgColor="#DD4D44"
              onPress={onGooglePressed} />
            <CustomButton 
              text="Use FaceBook" 
              type="SECONDARYright" 
              bgColor="#E7EAF4" 
              fgColor="#4765A9"
              onPress={onFaceBookPressed} />
          </View>
          <CustomButton text="Already user go back to login" type="TERTIARY" onPress={onGoBackPressed} />
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
export default SignUpScreen;
