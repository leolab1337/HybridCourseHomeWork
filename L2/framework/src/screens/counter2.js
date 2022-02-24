import React from "react";
import { Component } from "react";
import { View, Text, Button } from "react-native";

export class Counter2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }


    render() {
        return (<View>
            <Text>
                Counter2: {this.state.count}
            </Text>
            <Button title="+" onPress={() => this.setState({ count: this.state.count + 1 })}> </Button>
        </View>)
    }
}