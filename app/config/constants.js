import firebase from 'firebase'


  const config = {
  ggnore
  };
  firebase.initializeApp(config);

  export const ref = firebase.database().ref()
  export const firebaseAuth = firebase.auth
export const usersDucksExpirationLength = 100000
export const userExpirationLength = 100000