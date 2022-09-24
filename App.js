import React, { Component } from "react";
import HeaderComponent from "./src/Components/HeaderComponent";
import TaskComponent from "./src/Components/TaskComponent";
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ScrollView,
} from 'react-native';


class App extends Component {

  render() {
    let backGroundImage = require('./src/Images/lista-de-tarefas.jpg')
    return (
      <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>
        <ImageBackground source={require('./src/Images/lista-de-tarefas.jpg')} imageStyle={{ opacity: 0.4 }}>
          <View>
            <HeaderComponent />
          </View>
          <View>
            <ScrollView>
              <View>
                <TaskComponent />
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

export default App;
