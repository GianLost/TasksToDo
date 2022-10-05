import React, { Component } from "react";
import HeaderComponent from "./src/Components/HeaderComponent";
import TaskComponent from "./src/Components/TaskComponent";
import {

  View,
  ScrollView,
} from 'react-native';


class App extends Component {

  render() {
    return (
      <View style={{ width: '100%', height: '100%', backgroundColor: '#fff' }}>
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
      </View>
    )
  }
}

export default App;
