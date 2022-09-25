import React, { Component } from "react";
import  Icon  from "react-native-vector-icons/Entypo";
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';

class TaskList extends Component {

    render() {
        return (
            <View style={{ width: '100%', maxHeight: '100%', alignItems: 'center', margin: 10 }}>
                <View style={style.tasksView}>

                    <View style={{ flexDirection: 'column' }}>
                        <Text style={style.inputTextTaskList}>° À Fazer:</Text>
                        <Text style={style.TextTaskList}>{this.props.description}</Text>
                    </View>

                    <View style={{ flexDirection: 'column' }}>
                        <Text style={style.inputTextTaskList}>° Prazo:</Text>
                        <Text style={style.TextTaskList}>{this.props.endDate}</Text>
                    </View>

                    <View>
                        <Text style={style.inputTextTaskList}>° Prioridade:</Text>
                        <Text style={style.TextTaskList}>{this.props.priority}</Text>
                    </View>
                    {/*<Text style={style.inputTextTaskList}>status: {this.props.priority}</Text> */}

                    <View style={style.taskListViewButton}>
                        <TouchableOpacity
                            style={style.taskButton1}
                            /*onPress={() => this.props.updTask(this.props.item)}*/>
                            <Icon name="check" size={25} color='#fff' />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={style.taskButton2}
                            onPress={() => this.props.delTask(this.props.id)}>
                            <Icon name="trash" size={25} color='#fff' />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

        )
    }
}

const style = StyleSheet.create({
    tasksView: {
        justifyContent: 'space-around',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 10,
        width: '90%',
        maxHeight: '100%',
        minHeight: '50%',
        marginTop: 10,
        marginBottom: '50%',
        height: 200,
        padding: 5,


    },

    inputTextTaskList: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#202020',
        textShadowColor: '#fff',
        textShadowRadius: 5,
        marginTop: 10,
        marginLeft: 8
    },

    TextTaskList: {
        color: '#fff',
        fontSize: 17,
        textShadowColor: '#000',
        textShadowRadius: 10,
        marginLeft: 15,
        borderBottomWidth: 2,
        borderBottomColor: '#fff',
        padding: 3
    },

    taskButton1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 20,
        width: 90,
        height: 60
    },

    taskButton2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 20,
        width: 90,
        height: 60
    },

    taskListViewButton: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
})

export default TaskList;