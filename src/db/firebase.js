//import firebase module
import firebase from 'firebase/app';

//import the database info from the firebase module
import 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyClg_OiSs8vJHdSJDw4AOq_bjVo7guvhAA",
    authDomain: "travel-survey-app.firebaseapp.com",
    projectId: "travel-survey-app",
    storageBucket: "travel-survey-app.appspot.com",
    messagingSenderId: "823565445537",
    appId: "1:823565445537:web:e6d31e973f3add3a3383e0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;