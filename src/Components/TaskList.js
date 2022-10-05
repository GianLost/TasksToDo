import React, { Component } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';

class TaskList extends Component {

    getStats() {
        let endDateSplit = this.props.endDate.split('/');
        let endDatePart = new Date(endDateSplit[2], endDateSplit[1] - 1, endDateSplit[0]);

        if (this.props.stats == '' && endDatePart < new Date()) {
            this.props.stats = 'Atrasada'
            return {
                color: 'red',
                fontSize: 22,
                marginLeft: 15,
                borderBottomWidth: 2,
                borderBottomColor: '#fff',
                borderRadius: 10,
                padding: 3
            }
        } else if (this.props.stats == '' && endDatePart > new Date()) {
            this.props.stats = 'Pendente'
            return {
                color: '#fff',
                fontSize: 22,
                textShadowColor: '#000',
                textShadowRadius: 10,
                marginLeft: 15,
                borderBottomWidth: 2,
                borderBottomColor: '#fff',
                borderRadius: 10,
                padding: 3
            }
        } else if (this.props.stats != 'Atrasada' || this.props.stats != 'Pendente') {
            return {
                color: 'green',
                fontSize: 22,
                textShadowColor: '#000',
                textShadowRadius: 5,
                marginLeft: 15,
                borderBottomWidth: 2,
                borderBottomColor: '#fff',
                padding: 3
            }
        }
    }

    render() {
        return (
            <View style={{ width: '100%', maxHeight: '100%', alignItems: 'center', margin: 10 }}>
                <View style={style.tasksView}>

                    <View style={{ flexDirection: 'column' }}>

                        <Text style={style.inputTextTaskList}><Icon name="md-book" size={20} color='#fff' />   À Fazer:</Text>
                        <Text style={style.TextTaskList}>{this.props.description}</Text>
                    </View>

                    <View style={{ flexDirection: 'column' }}>
                        <Text style={style.inputTextTaskList}><Icon name="alarm-sharp" size={20} color='#fff' />   Prazo:</Text>
                        <Text style={style.TextTaskList}>{this.props.endDate}</Text>
                    </View>

                    <View>
                        <Text style={style.inputTextTaskList}><Icon name="speedometer-sharp" size={20} color='#fff' />   Prioridade:</Text>
                        <Text style={style.TextTaskList}>{this.props.priority}</Text>
                    </View>

                    <View>
                        <Text style={style.inputTextTaskList}><Icon name="ios-stats-chart" size={20} color='#fff' />   Status:</Text>
                        <Text style={this.getStats()}>{this.props.stats}</Text>
                    </View>

                    <View style={style.taskListViewButton}>
                        <TouchableOpacity
                            style={style.taskButton1}
                            onPress={() => this.props.updateTask(this.props.item)}>
                            <Icon name="checkmark-done" size={25} color='#fff' />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={style.taskButton2}
                            onPress={() => this.props.delTask(this.props.id)}>
                            <Icon name="trash-outline" size={25} color='#fff' />
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
        backgroundColor: '#12122b',
        borderRadius: 10,
        width: '90%',
        maxHeight: '100%',
        minHeight: '50%',
        marginTop: 10,
        marginBottom: '50%',
        height: 280,
        padding: 5,


    },

    inputTextTaskList: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#fff',
        padding: 3,
        marginLeft: 12
    },

    TextTaskList: {
        color: '#fff',
        fontSize: 17,
        textAlign: 'justify',
        textShadowColor: '#fff',
        textShadowRadius: 5,
        marginLeft: 15,
        borderBottomWidth: 2,
        borderRadius: 10,
        borderBottomColor: '#fff',
        padding: 3
    },

    taskButton1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderColor: '#fff',
        borderWidth: 2,
        backgroundColor: '#88ED24',
        borderRadius: 100,
        width: 60,
        height: 60,
    },

    taskButton2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderColor: '#fff',
        borderWidth: 2,
        backgroundColor: '#F51D1D',
        borderRadius: 100,
        width: 60,
        height: 60,
    },

    taskListViewButton: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
})

export default TaskList;