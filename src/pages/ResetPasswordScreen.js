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


const ResetPasswordScreen = () => {
const [code, setCode] = useState('');
const [newPassword, setNewPassword] = useState('');
const [confirmNewPassword, setConfirmNewPassword] = useState('');
const navigation = useNavigation();

const onResetPressed = () => {
  console.warn('Password Reset');

  navigation.navigate('SignIn')
} 

const onResendPressed = () => {
  console.warn('resend code button has been pressed');
} 

const onGoBackPressed = () => {
  console.warn('Go Back button has been pressed');

  navigation.navigate('SignIn')
}

  return (
    <ImageBackground
      style={{ width: "100%", height: "100%", backgroundColor: "#c89ed0" }}>
        <View style={styles.main}>
          <Text style={styles.textTitle}>Reset Password </Text>
          <CustomInput 
            placeholder="Enter the reset code sent to your Email" 
            value={code} 
            setValue={setCode} 
          />
          <CustomInput 
            placeholder="Enter a new password" 
            value={newPassword} 
            setValue={setNewPassword} 
          />
          <CustomInput 
            placeholder="Confirm new passord" 
            value={confirmNewPassword} 
            setValue={setConfirmNewPassword} 
          />
        
          <CustomButton text="Reset Password" type="PRIMARY" onPress={onResetPressed} />
          <CustomButton 
              text="Send new code" 
              type="TERTIARY" 
              onPress={onResendPressed} />
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
export default ResetPasswordScreen;
