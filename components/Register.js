/* 
 * 
 * Registeration View
 * 
 */

// Dependencies

import React, { Component } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import firebase from 'react-native-firebase'; // The magic!
import Styles from '../styles/main';

export default class Register extends Component {
  state = { 
    email: '', 
    password: '', 
    error: null
  }

  // Login should be it's own component, but again, I AM LAZY. ;)

  registrationHandler = async () => {
    const { email, password} = this.state;
    try {
      await firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password) // OMG
      this.props.navigation.navigate('Home');
    } catch (error) {
      this.setSate({ error: error.message });
    }
  }

  loginHandler = async () => {
    const { email, password } = this.state;
    try {
      await firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password);
      this.props.navigation.navigate('Home');
    } catch (error) {
      this.setState({ error: error.message })
    }
  }

  render() { // @TODO Form validation 
    return (
      <View style={Styles.container}>
        <Text>Register for this thing!</Text>
        {this.state.error &&  // If there's an error, show em!
        <Text style={Styles.error}>
          {this.state.error}
        </Text>}
        <TextInput
          placeholder="Your email"
          style={Styles.textInput}
          onChangeText={(email) => this.setState({ email: email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry // Dot them password entries 
          style={Styles.textInput}
          placeholder="Password"
          onChangeText={(password) => this.setState({ password: password })}
          value={this.state.password}
        />
        <Button title="Register" value="register-button" onPress={this.registrationHandler} />
        <Button
          title="Already regisered? Login"
          value="login-button"
          onPress={this.loginHandler} />
      </View>
    )
  }
}