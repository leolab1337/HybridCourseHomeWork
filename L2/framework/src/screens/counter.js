import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";


export default function Counter() {


    //we take outside variables from useState , (0) means set start value = 0 
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Count: {count}</Text>
            <Button title="+" onPress={() => setCount(count + 1)}></Button>
        </View>)

}
const styles = StyleSheet.create({
    container: {
        flexFlow: "row",
        alignSelf: "center",
        padding: "16px"
    },
    text: {
        alignSelf: "center",
        paddingRight: "8px"
    }
})