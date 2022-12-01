import React from 'react';
import { Text,  StyleSheet, Pressable} from 'react-native';

const CustomButton = ({ onPress, text, type = "PRIMARY", bgColor, fgColor }) => {
    return (
        <Pressable 
            onPress={onPress} 
            style={[
                styles.container,
                styles[`container_${type}`],
                bgColor ? {backgroundColor: bgColor} : {},
                 ]}>
            <Text style={[
                styles.text,
                styles[`text_${type}`],
                fgColor ? {color: fgColor} : {},
                ]}>{text}</Text>
          </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "orange",
        alignItems: "center", 
        width: "75%",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
    },

    container_PRIMARY: {
        backgroundColor: "rgb(243, 156, 18)",
        marginLeft: 40,
    },

    container_SECONDARYright: {
        width: '25%',
        marginTop: '40%',
        marginLeft: '25%',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#4765A9",
    },
    container_SECONDARYleft: {
        width: '25%',
        marginTop: '40%',
        marginRight: '25%',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#DD4D44"
    },

    container_TERTIARY: {
        backgroundColor: "rgba(243, 156, 18, 0)",
        marginLeft: 40,
    },

    text: {
        textAlign: "center",
      },

    text_PRIMARY: {
        color: "white",
        fontSize: 25,
        textShadowColor: "rgb(72,61,139)",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 1,
    },

    text_SECONDARYright: {
        fontSize: 10,
     
    },

    text_SECONDARYleft: {
        fontSize: 10,
        
    },

    text_TERTIARY: {
        color: "white",
        fontSize: 25,
        textShadowColor: "rgb(72,61,139)",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 1,
    },
})

export default CustomButton