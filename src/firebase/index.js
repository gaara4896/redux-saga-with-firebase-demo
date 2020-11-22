import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyC9Mz8M8yAagNHDvfr1rF2DxYfJW8J-FBs",
  authDomain: "todo-demo-1fafb.firebaseapp.com",
  databaseURL: "https://todo-demo-1fafb.firebaseio.com",
  projectId: "todo-demo-1fafb",
  storageBucket: "todo-demo-1fafb.appspot.com",
  messagingSenderId: "858676924076",
  appId: "1:858676924076:web:15a9053db389c6809d1909",
  measurementId: "G-0C59W9BHPJ"
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()
firebase.firestore()

export const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

export default firebase
