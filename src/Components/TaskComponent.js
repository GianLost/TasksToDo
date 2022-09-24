import React, { Component } from "react";
import Icon from 'react-native-vector-icons/Entypo';
import ItemDatabase from "../DataBase/ItemDatabase";
import TaskListItem from "../Models/TaskListItem";
import TaskList from "../Components/TaskList";
import {
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Text,
    View,
    TextInput,
    ScrollView,
} from 'react-native';

class TaskComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            description: '',
            endDate: '',
            priority: '',
            list: []
        }

        this.ListTaskItem();
    }

    RegisterTask = (description, endDate, priority) => {
        const newTask = new TaskListItem(description, endDate, priority);
        const dataBase = new ItemDatabase();
        dataBase.Inserir(newTask);
        this.ListTaskItem();

    }

    ListTaskItem = () => {
        const dataBase = new ItemDatabase();
        dataBase.Listar().then(
            completeListTasks => {
                this.setState({ list: completeListTasks })
            }
        )
    }

    render() {

        return (
            <View>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 150 }}>

                    <View style={style.tasksView}>
                        <Text style={style.tasksTextTitle}>Adicione uma nova tarefa </Text>
                        <TextInput style={style.inputTextTasks} placeholder="Descrição:" onChangeText={(typeValue) => { this.setState({ description: typeValue }) }}></TextInput>
                        <TextInput style={style.inputTextTasks} placeholder="Data de término:" onChangeText={(typeValue) => { this.setState({ endDate: typeValue }) }}></TextInput>
                        <TextInput style={style.inputTextTasks} placeholder="Prioridade:" onChangeText={(typeValue) => { this.setState({ priority: typeValue }) }}></TextInput>
                        <View style={style.taskButtonView}>
                            <TouchableOpacity
                                onPress={() => this.RegisterTask(this.state.description, this.state.endDate, this.state.priority)}
                                style={style.taskButton}>
                                <Icon name="text-document" size={25} color='#fff' />
                                <Text style={style.taskButtonText}>Adicionar Tarefa</Text>
                            </TouchableOpacity>
                        </View>
                        {/*<TextInput style={style.inputTextTasks} placeholder="Status:"></TextInput>*/}

                    </View>

                    <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>
                        {
                            this.state.list.map(listTaskRegister => (
                                <TaskList
                                    id={listTaskRegister.id}
                                    item={listTaskRegister}
                                    description={listTaskRegister.description}
                                    endDate={listTaskRegister.endDate}
                                    priority={listTaskRegister.priority}
                                />
                            ))
                        }
                    </View>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({

    tasksTextTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center'
    },

    inputTextTasks: {
        width: '98%',
        height: 40,
        color: '#fff',
        borderBottomWidth: 3,
        borderBottomColor: '#fff',
        borderRadius: 10,
        marginTop: 15,
    },

    tasksView: {
        backgroundColor: '#4682B4',
        marginTop: 15,
        alignItems: 'center',
        height: 300,
        width: '95%',
        padding: 10,
        borderRadius: 18
    },

    taskButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        width: 150,
        height: 50,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 10
    },

    taskButtonView: {
        marginTop: 10,
        marginLeft: 170
    },

    taskButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff'
    }
})

export default TaskComponent