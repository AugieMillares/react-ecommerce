import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyARANRIeMfk-ypdseFsQGgcyOzczrm6l4w",
    authDomain: "react-ecommerce-d9b97.firebaseapp.com",
    databaseURL: "https://react-ecommerce-d9b97.firebaseio.com",
    projectId: "react-ecommerce-d9b97",
    storageBucket: "react-ecommerce-d9b97.appspot.com",
    messagingSenderId: "1061119214800",
    appId: "1:1061119214800:web:9af7a9231eac3202e44ad5",
    measurementId: "G-HEESSXLPC1"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth){
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch(error){
            console.log ('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promp:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;