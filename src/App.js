import React, { Component} from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: ENV['FIREBASE_KEY'],
      authDomain: 'react-native-auth-e6ced.firebaseapp.com',
      databaseURL: 'https://react-native-auth-e6ced.firebaseio.com',
      projectId: 'react-native-auth-e6ced',
      storageBucket: 'react-native-auth-e6ced.appspot.com',
      messagingSenderId: '627792105896'
    })
  }

  render() {
    return (
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    )
  }
}


export default App;