/*
 *
 * Application Nativation
 * 
 */

// Dependencies

import Navigator from 'react-navigation';
import Loading from './Loading';
import Register from './Register';
import Home from './Home';

const App = Navigator.createSwitchNavigator(
  {
    Loading,
    Register,
    Home,
  },
  {
    initialRouteName: 'Loading'
  }
)

export default App;