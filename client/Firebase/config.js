import firebase from 'firebase';
var config = {
  apiKey: "AIzaSyBqRPNraoOiOpYc31FhOZKZOoPdUT8aMPY",
  authDomain: "redux-tinder.firebaseapp.com",
  databaseURL: "https://redux-tinder.firebaseio.com",
  projectId: "redux-tinder",
  storageBucket: "",
  messagingSenderId: "417349688199"
};
const fire = firebase.initializeApp(config);
export default fire;
