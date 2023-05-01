import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBX0VZGuLynfA2pn_UcTgq_9PN15QYt7DM",
    authDomain: "demanzonderjas-b66cd.firebaseapp.com",
    databaseURL: "https://demanzonderjas-b66cd-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "demanzonderjas-b66cd",
    storageBucket: "demanzonderjas-b66cd.appspot.com",
    messagingSenderId: "1020540002126",
    appId: "1:1020540002126:web:dda21b9fea91a3730c081f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
