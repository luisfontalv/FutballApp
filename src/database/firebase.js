import { initializeApp } from "firebase/app";

import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCPSN-JWdoEWMZmwfse9y_ocsWGd2smrgg",
    authDomain: "futballapp-57f04.firebaseapp.com",
    projectId: "futballapp-57f04",
    storageBucket: "futballapp-57f04.appspot.com",
    messagingSenderId: "1091454766757",
    appId: "1:1091454766757:web:f67b02313a351ad8e0874c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);