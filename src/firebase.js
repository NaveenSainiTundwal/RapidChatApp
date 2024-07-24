import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
   
     apiKey:import.meta.env.VITE_API_KEY,
    authDomain: "reactchatapplication-a2ebf.firebaseapp.com",
    databaseURL: "https://reactchatapplication-a2ebf-default-rtdb.firebaseio.com",
    projectId: "reactchatapplication-a2ebf",
    storageBucket: "reactchatapplication-a2ebf.appspot.com",
    messagingSenderId: "426102604004",
    appId: "1:426102604004:web:f9eec7d0889f00ada76cf1"
  };

 export  const app=initializeApp(firebaseConfig);
 export const auth=getAuth(app);
 export const storage=getStorage(app);
 export const db=getFirestore(app);