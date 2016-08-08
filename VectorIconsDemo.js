/**
 * Created by fanhl on 16/7/31.
 */
'use strict';//使用严格模式
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class VectorIconsDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Hello React Native VectorIconsDemo</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});