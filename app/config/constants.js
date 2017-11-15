import firebase from 'firebase'


  const config = {
    apiKey: "AIzaSyApQoZABPYgCYSrusX82FkJbaD0mVlODG8",
    authDomain: "andrew-test-project-8e9c8.firebaseapp.com",
    databaseURL: "https://andrew-test-project-8e9c8.firebaseio.com",
    projectId: "andrew-test-project-8e9c8",
    storageBucket: "andrew-test-project-8e9c8.appspot.com",
    messagingSenderId: "989661729341"
  };
  firebase.initializeApp(config);

  export const ref = firebase.database().ref()
  export const firebaseAuth = firebase.auth
export const usersDucksExpirationLength = 100000
export const userExpirationLength = 100000