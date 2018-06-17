import {Navigation} from 'react-native-navigation';

// redux
import {Provider} from 'react-redux';
import store1 from '../redux/store/store1';

//import Main Screen there
import DrawerScreen from '../../screen/Drawer';
import MainScreen from '../../screen/MainScreen';
import MainScreen2 from '../../screen/MainScreen2';
import MainScreen3 from '../../screen/MainScreen3';
import MainScreen4 from '../../screen/MainScreen4';
//import Tab Screen there
import MainScreen2TabOne from '../../screen/MainScreen2/Screen2Tab/TabOne';
import MainScreen2TabTwo from '../../screen/MainScreen2/Screen2Tab/TabTwo';
//import Push Screen there
import MainScreen4Push from '../../screen/MainScreen4/Screen4Push';
//import Modal Screen there
import FormFour from '../../screen/MainScreen/Modal/FormFour';
import FormThree from '../../screen/MainScreen/Modal/FormThree';
import FormTwo from '../../screen/MainScreen/Modal/FormTwo';
import FormOne from '../../screen/MainScreen/Modal/FormOne';
import DetailProject from '../../screen/MainScreen/Modal/DetailProject';
import DetailCamp from '../../screen/MainScreen/Modal/DetailCamp';
import DetailChildren from '../../screen/MainScreen/Modal/DetailChildren';
import DetailWorker from '../../screen/MainScreen/Modal/DetailWorker';
import MainScreen4Modal from '../../screen/MainScreen4/Screen4Modal';
import LoginScreen from '../../screen/Login';
//import LightBox Screen there
import MainScreen4LightBox from '../../screen/MainScreen4/Screen4LightBox';
//import Notification Screen there
import NotificationFormFour from '../../screen/MainScreen/Notification/FormFour';
import NotificationFormThree from '../../screen/MainScreen/Notification/FormThree';
import NotificationFormTwo from '../../screen/MainScreen/Notification/FormTwo';
import NotificationFormOne from '../../screen/MainScreen/Notification/FormOne';
import MainScreen4Notification from '../../screen/MainScreen4/Screen4Notification';

export function registerScreens() {
  // register Drawer screens of the app (including internal ones)
  Navigation.registerComponent('DrawerScreen', () => DrawerScreen);
  // register Main screens of the app (including internal ones)
  Navigation.registerComponent('MainScreen', () => MainScreen,store1,Provider);
  Navigation.registerComponent('MainScreen2', () => MainScreen2);
  Navigation.registerComponent('MainScreen3', () => MainScreen3);
  Navigation.registerComponent('MainScreen4', () => MainScreen4);
  // register Tab screens of the app (including internal ones)
  Navigation.registerComponent('MainScreen2TabOne', () => MainScreen2TabOne,store1,Provider);
  Navigation.registerComponent('MainScreen2TabTwo', () => MainScreen2TabTwo);
  // register Push screens of the app (including internal ones)
  Navigation.registerComponent('MainScreen4Push', () => MainScreen4Push);
  // register Modal screens of the app (including internal ones)
  Navigation.registerComponent('FormFour', () => FormFour);
  Navigation.registerComponent('FormThree', () => FormThree);
  Navigation.registerComponent('FormTwo', () => FormTwo);
  Navigation.registerComponent('FormOne', () => FormOne);
  Navigation.registerComponent('DetailChildren', () => DetailChildren);
  Navigation.registerComponent('DetailWorker', () => DetailWorker);
  Navigation.registerComponent('DetailProject', () => DetailProject);
  Navigation.registerComponent('DetailCamp', () => DetailCamp);
  Navigation.registerComponent('MainScreen4Modal', () => MainScreen4Modal);
  Navigation.registerComponent('LoginScreen', () => LoginScreen);
  // register LightBox screens of the app (including internal ones)
  Navigation.registerComponent('MainScreen4LightBox', () => MainScreen4LightBox);
  // register Notification screens of the app (including internal ones)
  Navigation.registerComponent('NotificationFormFour', () => NotificationFormFour);
  Navigation.registerComponent('NotificationFormThree', () => NotificationFormThree);
  Navigation.registerComponent('NotificationFormTwo', () => NotificationFormTwo);
  Navigation.registerComponent('NotificationFormOne', () => NotificationFormOne);
  Navigation.registerComponent('MainScreen4Notification', () => MainScreen4Notification);
  // *** using redux, pass your store and the Provider object from react-redux ***
  //Navigation.registerComponent('example.FirstTabScreen', () => FirstTabScreen, store, Provider);
}