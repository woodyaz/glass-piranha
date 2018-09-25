/* 
 * 
 * The home view
 * 
 */

// Dependencies
import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import firebase from 'react-native-firebase';
import Styles from '../styles/main';

export default class Home extends Component {
  state = {
    currentUser: null,
  }

  logoutHander = async () => {
    try {
      await firebase.auth().signOut();
      this.props.navigation.navigate('Loading');
    } catch (error) {
      alert(error)
    }
  }

  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser: currentUser });
  }
  

  render() {
    const { currentUser } = this.state;
    return (
    <View style={Styles.container}>
      <Text style={{ fontSize: 30, marginTop: 250 }}>Hello {currentUser && currentUser.email}</Text>
      <Button
        title="Done? Logout"
        onPress={this.logoutHander} />
    </View>
    )
  }
}