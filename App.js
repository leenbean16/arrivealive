// importing react 
import React, { Component } from 'react';
// importing and using stack navigator for navigagion
import { StackNavigator } from 'react-navigation';
// file routes for components
import SignInScreen from './components/SignInScreen';
import SignUpScreen from './components/SignUpScreen';
import HistoryScreen from './components/HistoryScreen';
import FindABarScreen from './components/FindABarScreen';
import HomeScreen from './components/HomeScreen';
import BACCalcScreen from './components/BACCalcScreen';
import SettingsPage from './components/SettingsPage';
import CurrentTabScreen from './components/CurrentTabScreen';
import SettingsScreen from './components/SettingsScreen';
import UserHomeScreen from './components/UserHomeScreen';
import FindRideScreen from './components/FindRideScreen';
import HappyHoursScreen from './components/HappyHoursScreen';
import DrinkListScreen from './components/DrinkListScreen';
import NotificationsScreen from './components/NotificationsScreen';
import ChangePasswordScreen from './components/ChangePasswordScreen';
import PreferencesScreen from './components/PreferencesScreen';
import ChangeEmailScreen from './components/ChangeEmailScreen';
import AccountInfoScreen from './components/AccountInfoScreen';
import DeleteAccountScreen from './components/DeleteAccountScreen';
import ReferAFriendScreen from './components/ReferAFriendScreen';
import ContactUsScreen from './components/ContactUsScreen';


// App navigation to screens
const ArriveAlive = StackNavigator({
  // routes for screens
  HomeScreen: { screen: HomeScreen },
  SignInScreen: { screen: SignInScreen },
  SignUpScreen: { screen: SignUpScreen },
  UserHomeScreen: { screen: UserHomeScreen}, 
  SettingsScreen: { screen: SettingsScreen },
  SettingsPage: { screen: SettingsPage },
  HistoryScreen: { screen: HistoryScreen },
  FindABarScreen: { screen: FindABarScreen },
  CurrentTabScreen: { screen: CurrentTabScreen },
  BACCalcScreen: { screen: BACCalcScreen },
  FindRideScreen: { screen: FindRideScreen },
  HappyHoursScreen: { screen: HappyHoursScreen },
  DrinkListScreen: { screen: DrinkListScreen },
  NotificationsScreen: { screen: NotificationsScreen },
  ChangePasswordScreen: { screen: ChangePasswordScreen },
  PreferencesScreen: { screen: PreferencesScreen },
  ChangeEmailScreen: { screen: ChangeEmailScreen },
  AccountInfoScreen: { screen: AccountInfoScreen },
  DeleteAccountScreen: { screen: DeleteAccountScreen },
  ReferAFriendScreen: { screen: ReferAFriendScreen },
  ContactUsScreen: { screen: ContactUsScreen },
});


// exporting apps
export default class App extends React.Component {
  render() {
    return <ArriveAlive />;
  }
}
