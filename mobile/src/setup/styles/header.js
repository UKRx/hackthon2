export default {
    // Menu Bar
    BackgroundColor: '#16d8ef',
    ComponentAlignment: 'center', // center/fill
    Hidden: false, // make the nav bar hidden
    HideOnScroll: false, // make the nav bar hidden only after the user starts to scroll
    Translucent: false, // make the nav bar semi-translucent, works best with drawUnderNavBar:true
    Transparent: false, // make the nav bar transparent, works best with drawUnderNavBar:true,
    NoBorder: false, // hide the navigation bar bottom border (hair line). Default false
    Blur: false, // blur the entire nav bar, works best with drawUnderNavBar:true
    // Title
    TextColor: '#FFFFFF',
    TextFontSize: 18,
    TextFontFamily: 'Kanit-SemiBold',
    // Sub-Title
    SubtitleColor: '#707070', // subtitle color
    SubtitleFontFamily: 'Kanit-Medium', // subtitle font, 'sans-serif-thin' for example
    SubtitleFontSize: 13, // subtitle font size
    // Button
    ButtonColor: '#A0A0A0',
    LeftButtonColor: 'red', // Change color of left nav bar button
    RightButtonColor: 'blue', // Change color of right nav bar button
    // Text-Button
    ButtonFontFamily: 'font-name', // Android only
    ButtonFontSize: 16, // Change font size nav bar buttons (eg. the back button) (remembered across pushes)
    ButtonFontWeight: '500', // Change font weight nav bar buttons (eg. the back button) (remembered across pushes)
    LeftButtonFontSize: 16, // Change font size of left nav bar button
    LeftButtonFontWeight: '400', // Change font weight of left nav bar button
    RightButtonFontSize: 16, // Change font size of right nav bar button
    RightButtonFontWeight: '600', // Change font weight of right nav bar button
    // Shadow
    ElevationShadowEnabled: true, // (Android - default: true, iOS - default: false). Disables TopBar elevation shadow on Lolipop and above
    ShadowColor: 'sky', // Sets shadow of the navbar, Works only when topBarElevationShadowEnabled: true
    ShadowOpacity: 0.5, // Sets shadow opacity on the navbar, Works only when topBarElevationShadowEnabled: true
    ShadowOffset: 30, // Sets shadow offset on the navbar, Works only when topBarElevationShadowEnabled: true
    ShadowRadius: 3, // Sets shadow radius on the navbar, Works only when topBarElevationShadowEnabled: true
    // Status Bar
    statusBarHidden: false,
    statusBarColor: '#101010',
};