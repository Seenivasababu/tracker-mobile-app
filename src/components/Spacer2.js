import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Spacer2 = ({children}) => {
    return (
        <View style={styles.spacer}>
            {children}
        </View>
    )
}
const styles = StyleSheet.create({
    spacer:{
        margin:7
    }
})

export default Spacer2
