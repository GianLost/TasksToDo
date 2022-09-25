import React, { Component } from "react";
import Icon from 'react-native-vector-icons/Entypo';
import ItemDatabase from "../DataBase/ItemDatabase";
import TaskListItem from "../Models/TaskListItem";
import TaskList from "../Components/TaskList";
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput,
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

    DeleteTask = (id) => {
        const dataBase = new ItemDatabase();
        dataBase.Remover(id)
        this.ListTaskItem();
    }

    render() {

        return (
            <View>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 150 }}>

                    <View style={style.tasksView}>
                        <Text style={style.tasksTextTitle}>Adicione uma nova tarefa </Text>
                        <TextInput style={style.inputTextTasks} placeholderTextColor='white' placeholder="Descrição:" onChangeText={(typeValue) => { this.setState({ description: typeValue }) }}></TextInput>
                        <TextInput style={style.inputTextTasks} placeholderTextColor='white' placeholder="Data de término:" onChangeText={(typeValue) => { this.setState({ endDate: typeValue }) }}></TextInput>
                        <TextInput style={style.inputTextTasks} placeholderTextColor='white' placeholder="Prioridade:" onChangeText={(typeValue) => { this.setState({ priority: typeValue }) }}></TextInput>
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
                        <Text style={style.tasksListTitle}>Lista de tarefas:</Text>
                        {
                            this.state.list.map(listTaskRegister => (
                                <TaskList
                                    id={listTaskRegister.id}
                                    item={listTaskRegister}
                                    description={listTaskRegister.description}
                                    endDate={listTaskRegister.endDate}
                                    priority={listTaskRegister.priority}
                                    delTask={this.DeleteTask}
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
        backgroundColor: '#12122b',
        marginTop: 15,
        alignItems: 'center',
        height: 300,
        width: '95%',
        padding: 10,
        borderRadius: 18,
        opacity: 0.93
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
    },

    tasksListTitle: {

        textShadowColor: '#000',
        textShadowRadius: 5,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        marginTop: 10
    }
})

export default TaskComponent