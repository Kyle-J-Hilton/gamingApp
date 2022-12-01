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


const ConfirmEmailScreen = () => {
const [code, setCode] = useState('');
const navigation = useNavigation();

const onEnterPressed = () => {
  console.warn('a code has been entered');
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
          <Text style={styles.textTitle}>Confirm Email </Text>
          <CustomInput 
            placeholder="Enter the confirmation code sent to your Email" 
            value={code} 
            setValue={setCode} 
          />
        
          <CustomButton text="Enter" type="PRIMARY" onPress={onEnterPressed} />
          <CustomButton 
              text="Send new code" 
              type="TERTIARY" 
              onPress={onResendPressed} />
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
export default ConfirmEmailScreen;
