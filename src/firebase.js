//used firebase for login and signup

import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBjwUpnNjMqLeKQmZ468HcWWgSRz5AAWxI",
    authDomain: "expense-tracker-firebase-bc4da.firebaseapp.com",
    databaseURL: "https://expense-tracker-firebase-bc4da.firebaseio.com",
    projectId: "expense-tracker-firebase-bc4da",
    storageBucket: "expense-tracker-firebase-bc4da.appspot.com",
    messagingSenderId: "1088750014439",
    appId: "1:1088750014439:web:c7dc8c6150ffda49d6f742",
    measurementId: "G-SBBX6TKFS3"
};

const fire = firebase.initializeApp(config);
export default fire;
