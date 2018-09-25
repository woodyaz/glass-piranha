/*
 *
 * loading view
 * 
 * /

/* Dependencies */

import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import firebase from 'react-native-firebase' // The magic!

export default class Loading extends Component {
  componentDidMount() {
    // User logged in?  Cool, nav to Home.  Otherwise Register!
    firebase.auth().onAuthStateChanged((user) => {
      this.props.navigation.navigate(user ? 'Home' : 'Register');
    });
  }

  render () {
    return (
      <View style={styles.container} >
        <Text>Getting Loaded!</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  }
});