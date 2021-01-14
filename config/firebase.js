import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDVhLEJO8IRSJ67bD2ux_Iey1dj8Va7E3A",
    authDomain: "assignment-nirvana.firebaseapp.com",
    projectId: "assignment-nirvana",
    storageBucket: "assignment-nirvana.appspot.com",
    messagingSenderId: "933796825113",
    appId: "1:933796825113:web:ca075d9905bfc20f9cc288",
    measurementId: "G-EHS1SWTJD6"
}

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
