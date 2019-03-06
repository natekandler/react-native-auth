import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Button, Input } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
  state = { email: "", password: "", error: "" }

  onButtonPress() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({error: 'Autenticaiton Failed.'})
          })
      })
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            placeholder={'user@gmail.com'}
            onChangeText={email => this.setState({ email })}
            value={ this.state.email }
            label="Email"
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>{ this.state.error }</Text>

        <CardSection>
          <Input 
            placeholder={'placeholder'}
            onChangeText={password => this.setState({ password })}
            value={ this.state.password }
            label="Password"
            secure={true}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;