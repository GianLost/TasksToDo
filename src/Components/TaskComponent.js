import React, { Component } from "react";
import Icon from 'react-native-vector-icons/Ionicons';
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
            stats: '',
            priority: '',
            list: []
        }

        this.ListTaskItem();
    }

    RegisterTask = (description, endDate, priority, stats) => {
        const newTask = new TaskListItem(description, endDate, priority, stats);
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

    UpdateTask = (item) => {
        const dataBase = new ItemDatabase();
        dataBase.Atualizar(item);
        this.ListTaskItem();
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
                        <Text style={style.tasksTextTitle}>Crie sua Tarefa</Text>
                        <TextInput style={style.inputTextTasks} placeholderTextColor='white' placeholder="Descrição:" onChangeText={(typeValue) => { this.setState({ description: typeValue }) }}></TextInput>
                        <TextInput style={style.inputTextTasks} placeholderTextColor='white' placeholder="Data de término: (dd/mm/yyyy)" onChangeText={(typeValue) => { this.setState({ endDate: typeValue }) }}></TextInput>
                        <TextInput style={style.inputTextTasks} placeholderTextColor='white' placeholder="Prioridade:" onChangeText={(typeValue) => { this.setState({ priority: typeValue }) }}></TextInput>
                        <View style={style.taskButtonView}>
                            <TouchableOpacity
                                onPress={() => this.RegisterTask(this.state.description, this.state.endDate, this.state.priority, this.state.stats)}
                                style={style.taskButton}>
                                <Icon name="add-circle-sharp" size={55} color='#fff' style={{marginLeft: 2, marginTop: -1.5}} />
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>
                        <Text style={style.tasksListTitle}>Lista de tarefas :</Text>
                        {
                            this.state.list.map(listTaskRegister => (
                                <TaskList
                                    id={listTaskRegister.id}
                                    item={listTaskRegister}
                                    description={listTaskRegister.description}
                                    endDate={listTaskRegister.endDate}
                                    priority={listTaskRegister.priority}
                                    stats={listTaskRegister.stats}
                                    delTask={this.DeleteTask}
                                    updateTask={this.UpdateTask}
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
        fontSize: 18,
        borderBottomWidth: 3,
        borderBottomColor: '#fff',
        borderRadius: 10,
        marginTop: 15,
    },

    tasksView: {
        backgroundColor: '#12122b',
        marginTop: 50,
        alignItems: 'center',
        height: 300,
        width: '100%',
        padding: 10,
    },

    taskButton: {
        
        width: 60,
        height: 60,
        marginTop: 15,
        borderWidth: 2, 
        borderColor: '#fff', 
        borderRadius: 60
    },

    taskButtonView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 200
    },

    tasksListTitle: {
        textShadowColor: '#12122b',
        textShadowRadius: 10,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        marginTop: 10
    }
})

export default TaskComponent