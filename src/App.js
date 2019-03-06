import React, { Component} from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';

class App extends Component {
  render() {
    return (
      <View style={{'backgroundColor': '#fff', 'flex': 1}}>
        <Header headerText="Authentication" />
      </View>
    )
  }
}


export default App;