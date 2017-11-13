import firebase from 'firebase'
// import { ref } from 'config/constants'
import { ref, firebaseAuth } from 'config/constants'


export default function auth () {
  //new firebase.auth.FacebookAuthProvider();
  //const provider = new firebase.auth.FacebookAuthProvider();
  return firebaseAuth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
  // return new Promise ((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve({ 
    //       name: 'andre',
    //       avatar: '',
    //       uid: 'greed',
    //     }, 2000)
    //   })
    // })
}
export function checkIfAuthed(store) {
    return store.getState().users.isAuthed
}

export function logout(){
  console.log('logout')

  return firebaseAuth().signOut()
}
export function saveUser(user) {
  // return ref.child(`users/${user.uid}`)
  //   .set(user)
  //   .then(() => user)
    console.log('here', user)
    
} 

