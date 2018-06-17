
import { Dimensions } from 'react-native'
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './setup/app/registerScreens';

import StyleHeader from './setup/styles/header';
import StyleScreen from './setup/styles/screen';
import StyleNavi from './setup/styles/navigation';
import StyleToptab from './setup/styles/toptab';

import LoginStore from './setup/redux/store/LoginStore';

const Window = Dimensions.get('window')

const Icon = require('react-native-vector-icons/Entypo');
var NavigatorIcon1;
var NavigatorIcon2;
var NavigatorIcon3;
var NavigatorIcon4;

// import Store from './setup/redux/store/store1';
// Store.dispatch({
//   type: "ADD",
//   payload: 500
// });
// Store.dispatch({
//   type: "SUBTRACT",
//   payload: 10000
// });

registerScreens(); // this is where you register all of your app's screens

export default class App {
  constructor() {
    console.log('App Start');
    LoginStore.subscribe(this.onStoreUpdate.bind(this));
    LoginStore.dispatch({
      type: "APPSTART",
    });
  }

  onStoreUpdate() {
    // const root = LoginStore.getState().LoginReducer;
    // handle a root change
    // if your app doesn't change roots in runtime, you can remove onStoreUpdate() altogether
    // if (this.currentRoot != root) {
    //   this.currentRoot = root;
      this
        .initialIcon()
        .then(() => {
          // Start app only if all icons are loaded
          this.startApp();
        })
        .catch((error) => {
          console.error(error);
        });
    // }
  }

  initialIcon = function () {
    return new Promise(function (resolve, reject) {
      Promise.all([
        Icon.getImageSource('network', 20),
        Icon.getImageSource('globe', 20),
        Icon.getImageSource('heart-outlined', 20),
        Icon.getImageSource('list', 20)
      ]).then((values) => {
        NavigatorIcon1 = values[0];
        NavigatorIcon2 = values[1];
        NavigatorIcon3 = values[2];
        NavigatorIcon4 = values[3];
        resolve(true);
      }).catch((error) => {
        console.log(error);
        reject(error);
      }).done();
    });
  };

  // start the app
  startApp(root) {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'แมตช์', // tab label as appears under the icon in iOS (optional)
          screen: 'MainScreen1', // this is a registered name for a screen
          icon: NavigatorIcon1, // local image asset for the tab icon unselected state (optional on iOS)
          //selectedIcon: LinkIcon.menu1selected, // local image asset for the tab icon selected state (optional, iOS only. On Android, Use `tabBarSelectedButtonColor` instead)
          iconInsets: { // add this to change icon position (optional, iOS only).
            top: 0, // optional, default is 0.
            left: 0, // optional, default is 0.
            bottom: 0, // optional, default is 0.
            right: 0 // optional, default is 0.
          },
          // titleImage: LinkIcon.menu1selected, // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
          title: 'Main Screen One', // title of the screen as appears in the nav bar (optional)
          // navigatorStyle: {}, // override the navigator style for the tab screen, see "Styling the navigator" below (optional), 
          // navigatorButtons: {} // override the nav buttons for the tab screen, see "Adding buttons to the navigator" below (optional)
        }, {
          label: 'ฟีตข่าว',
          screen: 'MainScreen2',
          icon: NavigatorIcon2,
          //selectedIcon: LinkIcon.menu2selected,
          title: 'Main Screen Two',
          topTabs: [
            {
              title: 'TabOne',
              screenId: 'MainScreen2TabOne'
            }, {
              title: 'TabTwo',
              screenId: 'MainScreen2TabTwo'
            }
          ]
        }, {
          label: 'ติดตาม',
          screen: 'MainScreen3',
          icon: NavigatorIcon3,
          //selectedIcon: LinkIcon.menu3selected,
          title: 'Main Screen Three'
        }, {
          label: 'อันดับ',
          screen: 'MainScreen4',
          icon: NavigatorIcon4,
          //selectedIcon: LinkIcon.menu4selected,
          title: 'Main Screen Four'
        }
      ],
      // tabsStyle: { // optional, **iOS Only** add this if you want to style the tab bar beyond the defaults
      //   tabBarHidden: false, // make the tab bar hidden
      //   tabBarButtonColor: '#ffff00', // change the color of the tab icons and text (also unselected)   
      //   tabBarSelectedButtonColor: '#ff9900', // change the color of the selected tab icon and text (only selected)   
      //   tabBarBackgroundColor: '#551A8B', // change the background color of the tab bar   
      //   tabBarTranslucent: false, // change the translucent of the tab bar to false
      //   tabBarTextFontFamily: 'Avenir-Medium', //change the tab font family
      //   tabBarLabelColor: '#ffb700', // iOS only. change the color of tab text
      //   tabBarSelectedLabelColor: 'red', // iOS only. change the color of the selected tab text   
      //   forceTitlesDisplay: true, // Android only. If true - Show all bottom tab labels. If false - only the selected tab's label is visible.
      //   tabBarHideShadow: true // Remove default tab bar top shadow (hairline)
      // },
      appStyle: { // optional, **Android Only** add this if you want to style the tab bar beyond the defaults
        // Header
        statusBarHidden: StyleHeader.statusBarHidden,
        statusBarColor: StyleHeader.statusBarColor,
        navBarBackgroundColor: StyleHeader.BackgroundColor,
        navBarTextColor: StyleHeader.TextColor,
        navBarTextFontSize: StyleHeader.TextFontSize, // change the font size of the title
        navBarTextFontFamily: StyleHeader.TextFontFamily, // Changes the title font
        navBarComponentAlignment: StyleHeader.ComponentAlignment, // center/fill
        navBarButtonColor: StyleHeader.ButtonColor, // Change color of nav bar buttons (eg. the back button) (remembered across pushes)
        navBarHidden: StyleHeader.Hidden, // make the nav bar hidden
        navBarHideOnScroll: StyleHeader.HideOnScroll, // make the nav bar hidden only after the user starts to scroll
        navBarTranslucent: StyleHeader.Translucent, // make the nav bar semi-translucent, works best with drawUnderNavBar:true
        navBarTransparent: StyleHeader.Transparent, // make the nav bar transparent, works best with drawUnderNavBar:true,
        navBarNoBorder: StyleHeader.NoBorder, // hide the navigation bar bottom border (hair line). Default false
        navBarBlur: StyleHeader.Blur, // blur the entire nav bar, works best with drawUnderNavBar:true
        navBarSubtitleColor: StyleHeader.SubtitleColor, // subtitle color
        navBarSubtitleFontFamily: StyleHeader.SubtitleFontFamily, // subtitle font, 'sans-serif-thin' for example
        navBarSubtitleFontSize: StyleHeader.SubtitleFontSize, // subtitle font size
        navBarButtonFontFamily: StyleHeader.ButtonFontFamily, // Android only
        navBarButtonFontSize: StyleHeader.ButtonFontSize, // Change font size nav bar buttons (eg. the back button) (remembered across pushes)
        navBarButtonFontWeight: StyleHeader.ButtonFontWeight, // Change font weight nav bar buttons (eg. the back button) (remembered across pushes)

        navBarLeftButtonFontSize: StyleHeader.LeftButtonFontSize, // Change font size of left nav bar button
        navBarLeftButtonColor: StyleHeader.LeftButtonColor, // Change color of left nav bar button
        navBarLeftButtonFontWeight: StyleHeader.LeftButtonFontWeight, // Change font weight of left nav bar button

        navBarRightButtonFontSize: StyleHeader.RightButtonFontSize, // Change font size of right nav bar button
        navBarRightButtonColor: StyleHeader.RightButtonColor, // Change color of right nav bar button
        navBarRightButtonFontWeight: StyleHeader.RightButtonFontWeight, // Change font weight of right nav bar button

        topBarElevationShadowEnabled: StyleHeader.ElevationShadowEnabled, // (Android - default: true, iOS - default: false). Disables TopBar elevation shadow on Lolipop and above
        topBarShadowColor: StyleHeader.ShadowColor, // Sets shadow of the navbar, Works only when topBarElevationShadowEnabled: true
        topBarShadowOpacity: StyleHeader.ShadowOpacity, // Sets shadow opacity on the navbar, Works only when topBarElevationShadowEnabled: true
        topBarShadowOffset: StyleHeader.ShadowOffset, // Sets shadow offset on the navbar, Works only when topBarElevationShadowEnabled: true
        topBarShadowRadius: StyleHeader.ShadowRadius, // Sets shadow radius on the navbar, Works only when topBarElevationShadowEnabled: true

        // Top tabs
        topTabTextColor: StyleToptab.TextColor,
        topTabTextFontFamily: StyleToptab.TextFontFamily,
        selectedTopTabTextColor: StyleToptab.SelectedTextColor,
        topTabIconColor: StyleToptab.IconColor,
        selectedTopTabIconColor: StyleToptab.SelectedIconColor,
        selectedTopTabIndicatorColor: StyleToptab.SelectedIndicatorColor,

        // Screen
        screenBackgroundColor: StyleScreen.BackgroundColor, // Default screen color, visible before the actual react view is rendered
        // Navigator
        tabBarBackgroundColor: StyleNavi.BackgroundColor,
        tabBarButtonColor: StyleNavi.ButtonColor,
        tabBarHideShadow: StyleNavi.HideShadow,
        tabBarSelectedButtonColor: StyleNavi.SelectedButtonColor,
        tabBarTranslucent: StyleNavi.Translucent,
        tabFontFamily: StyleNavi.FontFamily, // existing font family name or asset file without extension which can be '.ttf' or '.otf' (searched only if '.ttf' asset not found)
        tabFontSize: StyleNavi.FontSize,
        selectedTabFontSize: StyleNavi.SelectedTabFontSize,
        forceTitlesDisplay: StyleNavi.forceTitlesDisplay,
      },
      drawer: { // optional, add this if you want a side menu drawer in your app
        left: { // optional, define if you want a drawer from the left
          screen: 'DrawerScreen', // unique ID registered with Navigation.registerScreen
          passProps: {}, // simple serializable object that will pass as props to all top screens (optional),
          // fixedWidth: window.height, // a fixed width you want your left drawer to have (optional)
        },
        // right: { // optional, define if you want a drawer from the right
        //   screen: 'DrawerScreen', // unique ID registered with Navigation.registerScreen
        //   passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
        //   fixedWidth: 500, // a fixed width you want your right drawer to have (optional)
        // },
        style: { // ( iOS only )
          drawerShadow: true, // optional, add this if you want a side menu drawer shadow
          contentOverlayColor: 'rgba(0,0,0,0.25)', // optional, add this if you want a overlay color when drawer is open
          leftDrawerWidth: 50, // optional, add this if you want a define left drawer width (50=percent)
          rightDrawerWidth: 50, // optional, add this if you want a define right drawer width (50=percent)
          shouldStretchDrawer: true // optional, iOS only with 'MMDrawer' type, whether or not the panning gesture will “hard-stop” at the maximum width for a given drawer side, default : true
        },
        type: 'MMDrawer', // optional, iOS only, types: 'TheSideBar', 'MMDrawer' default: 'MMDrawer'
        animationType: 'door', //optional, iOS only, for MMDrawer: 'door', 'parallax', 'slide', 'slide-and-scale', for TheSideBar: 'airbnb', 'facebook', 'luvocracy','wunder-list'
        disableOpenGesture: false // optional, can the drawer be opened with a swipe instead of button
      },
      passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
      animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
    });

    // Starter Single Main Screen App (same Google map app)
    // Navigation.startSingleScreenApp({
    //   screen: {
    //     screen: 'example.WelcomeScreen', // unique ID registered with Navigation.registerScreen
    //     title: 'Welcome', // title of the screen as appears in the nav bar (optional)
    //     navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    //     navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
    //   },
    //   drawer: {
    //     // optional, add this if you want a side menu drawer in your app
    //     left: {
    //       // optional, define if you want a drawer from the left
    //       screen: 'example.FirstSideMenu', // unique ID registered with Navigation.registerScreen
    //       passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
    //       disableOpenGesture: false, // can the drawer be opened with a swipe instead of button (optional, Android only)
    //       fixedWidth: 500 // a fixed width you want your left drawer to have (optional)
    //     },
    //     right: {
    //       // optional, define if you want a drawer from the right
    //       screen: 'example.SecondSideMenu', // unique ID registered with Navigation.registerScreen
    //       passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
    //       disableOpenGesture: false, // can the drawer be opened with a swipe instead of button (optional, Android only)
    //       fixedWidth: 500 // a fixed width you want your right drawer to have (optional)
    //     },
    //     style: {
    //       // ( iOS only )
    //       drawerShadow: true, // optional, add this if you want a side menu drawer shadow
    //       contentOverlayColor: 'rgba(0,0,0,0.25)', // optional, add this if you want a overlay color when drawer is open
    //       leftDrawerWidth: 50, // optional, add this if you want a define left drawer width (50=percent)
    //       rightDrawerWidth: 50 // optional, add this if you want a define right drawer width (50=percent)
    //     },
    //     type: 'MMDrawer', // optional, iOS only, types: 'TheSideBar', 'MMDrawer' default: 'MMDrawer'
    //     animationType: 'door', //optional, iOS only, for MMDrawer: 'door', 'parallax', 'slide', 'slide-and-scale'
    //     // for TheSideBar: 'airbnb', 'facebook', 'luvocracy','wunder-list'
    //     disableOpenGesture: false // optional, can the drawer, both right and left, be opened with a swipe instead of button
    //   },
    //   passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
    //   animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
    // });
  }
}
