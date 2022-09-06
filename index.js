/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from "react-native-push-notification";

PushNotification.configure({
    onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
        if (notification.foreground) {
          PushNotification.localNotification({channelId:"abogoboga",message:notification.message,details:{repeted:true}})
        }
    },
    requestPermissions: Platform.OS === 'ios'
    
})

AppRegistry.registerComponent(appName, () => App);
