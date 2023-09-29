
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAeHBktzeg99C-V8W4HdQvb4DyYjCZlBy4",
  authDomain: "linktree-53cde.firebaseapp.com",
  projectId: "linktree-53cde",
  storageBucket: "linktree-53cde.appspot.com",
  messagingSenderId: "823455114876",
  appId: "1:823455114876:web:92085591d6784ef54b8bf9"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)