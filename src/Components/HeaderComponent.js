import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

class HeaderComponent extends Component {
    render() {
        return (
            <View>
                <View style={style.headerComponentView}>
                    <Icon name="checkcircle" size={35} color='#fff' />
                    <Text style={style.headerComponentText}>Tasks.To-Do</Text>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    headerComponentView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 5,
        backgroundColor: '#12122b',
        alignItems: 'center',
        height: 60,
        width: '100%'
    },

    headerComponentText: {
        color: 'white',
        fontSize: 27,
        fontWeight: 'bold',
        fontFamily: 'fantasy'
    }
})

export default HeaderComponent;