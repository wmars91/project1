import { Navigation } from 'react-native-navigation';

import FirstTabScreen from './FirstTabScreen';
import ListBackend from './ListBackend';
import About from './About';
import ViewDetail from './ViewDetail'

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.WelcomeScreen', () => FirstTabScreen);
  Navigation.registerComponent('example.About', () => About);
  Navigation.registerComponent('example.ListBackend', () => ListBackend);
  Navigation.registerComponent('example.ViewDetail', () => ViewDetail);
}