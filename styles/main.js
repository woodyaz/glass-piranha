/*
 *
 * Main project "StyleSheet"
 *
 */

// Dependencies
import { StyleSheet } from 'react-native';

// Export
export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '90%',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10 
  },
  error: {
    fontWeight: 'bold',
    color: 'red'
  }
});