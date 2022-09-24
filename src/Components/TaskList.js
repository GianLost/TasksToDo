import React, { Component } from "react";
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';

class TaskList extends Component {

    render() {
        return (

            <View style={style.tasksView}>

                <Text style={style.tasksListTitle}>Lista de Tarefas</Text>
                <Text style={style.inputTextTaskList}>Descrição: {this.props.description}</Text>
                <Text style={style.inputTextTaskList}>Data de término: {this.props.endDate}</Text>
                <Text style={style.inputTextTaskList}>Prioridade: {this.props.priority}</Text>

                <View style={style.taskListViewButton}>
                    <TouchableOpacity>
                        <Text style={style.taskButtonText}>Editar Tarefa</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={style.taskButtonText}>Excluir Tarefa</Text>
                    </TouchableOpacity>
                </View>

            </View>

        )
    }
}

const style = StyleSheet.create({
    tasksView: {
        borderWidth: 3,
        width: '90%',
        marginTop: 30,
        height: 200

    },

    tasksListTitle: {
        fontSize: 30,
        textAlign: 'center'
    }
})

export default TaskList;