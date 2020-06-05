import firebase from 'firebase/app';
require('firebase/auth');

const config = {
    apiKey: "AIzaSyBvZPo2RFpWIsaRRYcfE7ejA667BmKZuL8",
    authDomain: "nywila.firebaseapp.com",
    databaseURL: "https://nywila.firebaseio.com",
    projectId: "nywila",
    storageBucket: "nywila.appspot.com",
    messagingSenderId: "751290897198",
    appId: "1:751290897198:web:b8b5c86d35f49a07f620bf",
    measurementId: "G-MBXF23EG6Y"

};
!firebase.app.length ? firebase.initializeApp(config): '';
export const auth = firebase.auth();