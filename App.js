import React, { Component } from "react";
import HeaderComponent from "./src/Components/HeaderComponent";
import TaskComponent from "./src/Components/TaskComponent";
import {
  ImageBackground,
  View,
  ScrollView,
} from 'react-native';


class App extends Component {

  render() {
    let backGroundImage = require('./src/Images/background1.jpg')
    return (
      <View style={{ width: '100%', height: '100%', alignItems: 'center'}}>
        <ImageBackground source={require('./src/Images/background1.jpg')} imageStyle={{ opacity: 0.88 }}>
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
