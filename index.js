/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Apps from './src/App';

//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Apps);