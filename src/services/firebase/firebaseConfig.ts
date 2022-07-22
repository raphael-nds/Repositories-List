import { initializeApp } from 'firebase/app'
import { getAuth, GithubAuthProvider } from 'firebase/auth'

const firebaseConfig = {
   apiKey: 'AIzaSyD-HSIguYTZVp8ZX8J5_Q3aoHGGeDDV6qw',
   authDomain: 'githuh-projects.firebaseapp.com',
   projectId: 'githuh-projects',
   storageBucket: 'githuh-projects.appspot.com',
   messagingSenderId: '5859489558',
   appId: '1:5859489558:web:e8e99fb23f4461cfce0237'
}

//FIREBASE INIT
const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth()

const provider = new GithubAuthProvider()

export { firebaseApp, provider, auth }
