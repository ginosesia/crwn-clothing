import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCua1n163ltKucpDCmdLh04L8nJgmWkXPs",
  authDomain: "crown-clothing-b7ee5.firebaseapp.com",
  projectId: "crown-clothing-b7ee5",
  storageBucket: "crown-clothing-b7ee5.appspot.com",
  messagingSenderId: "739745720167",
  appId: "1:739745720167:web:c6aa66f99d33a8a130f1c2",
  measurementId: "G-Q8PSB16QSF"
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider).then((res) => {
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}
