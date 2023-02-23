/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { env } from "@/env.mjs"
import { browserSessionPersistence, setPersistence, getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: env.NEXT_PUBLIC_FIREBASE_AUTH_URL,
    projectId: env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: env.NEXT_PUBLIC_FIREBASE_BUCKET,
    messagingSenderId: env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
    appId: env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = getAuth(firebaseApp);
(async () => {
    await setPersistence(auth, browserSessionPersistence)
})()
.catch((err: string) => {
    console.log(err)
});

export default firebaseApp;
export { db, auth }