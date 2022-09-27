import React, { Component } from "react";
import  Icon  from "react-native-vector-icons/Entypo";
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';

class TaskList extends Component {

    getStats() {
        let endDateSplit = this.props.endDate.split('/');
        let endDatePart = new Date(endDateSplit[2], endDateSplit[1] - 1 , endDateSplit[0]);
        
        if (this.props.stats == '' &&  endDatePart < new Date()) {
            this.props.stats = 'Atrasada'
            return { color: 'red',
            fontSize: 17,
            marginLeft: 15,
            borderBottomWidth: 2,
            borderBottomColor: '#fff',
            padding: 3}
        }else if(this.props.stats == '' && endDatePart > new Date()){
            this.props.stats = 'Pendente'
            return { 
                color: '#000',
                fontSize: 17,
                textShadowColor: '#fff',
                textShadowRadius: 10,
                marginLeft: 15,
                borderBottomWidth: 2,
                borderBottomColor: '#fff',
                padding: 3}
        }else if (this.props.stats != 'Atrasada' || this.props.stats != 'Pendente') {
            return { 
                color: 'green',
                fontSize: 17,
                textShadowColor: '#000',
                textShadowRadius: 5,
                marginLeft: 15,
                borderBottomWidth: 2,
                borderBottomColor: '#fff',
                padding: 3}
        }
    }

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

                    <View>
                        <Text style={style.inputTextTaskList}>° Status:</Text>
                        <Text style={this.getStats()}>{this.props.stats}</Text>
                    </View>

                    <View style={style.taskListViewButton}>
                        <TouchableOpacity
                            style={style.taskButton1}
                            onPress={() => this.props.updateTask(this.props.item)}>
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
        fontSize: 20,
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
        height: 60,
        marginTop: 5
    },

    taskButton2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 20,
        width: 90,
        height: 60,
        marginTop: 5
    },

    taskListViewButton: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
})

export default TaskList;