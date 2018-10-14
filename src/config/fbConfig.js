import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAsrrxKaECF7neggUG5O2ILHyulB9GqBtQ",
  authDomain: "marioplan-62288.firebaseapp.com",
  databaseURL: "https://marioplan-62288.firebaseio.com",
  projectId: "marioplan-62288",
  storageBucket: "marioplan-62288.appspot.com",
  messagingSenderId: "474504849006"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 