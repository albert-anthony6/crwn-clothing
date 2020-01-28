import firebase from 'firebase/app';
import 'firebase/firestore'; //for the database
import 'firebase/auth'; //for the auth

const config = {
    apiKey: "AIzaSyAnSTefBdGXT1morD30nCpWAoZNNm-Fb5U",
    authDomain: "crown-db-9b186.firebaseapp.com",
    databaseURL: "https://crown-db-9b186.firebaseio.com",
    projectId: "crown-db-9b186",
    storageBucket: "crown-db-9b186.appspot.com",
    messagingSenderId: "151491606541",
    appId: "1:151491606541:web:08694c8b930a7a066a7d44",
    measurementId: "G-ZWW06DZFKF"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

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
        })
      } catch(error){
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  };

  //THIS FUNCTION IS USED TO PULL DATA FROM SHOP.DATA COMPONENT AND CREATE NEW COLLECTION DOCUMENTS IN FIREBASE WITH EACH OBJECT
  
  // export const addCollectionAndDocuments = async (collectionKey, ObjectsToAdd) => {
  //   const collectionRef = firestore.collection(collectionKey);
    
  //   const batch = firestore.batch();
  //   ObjectsToAdd.forEach(obj => {
  //     const newDocRef = collectionRef.doc();
  //     batch.set(newDocRef, obj);
  //   });

  //   return await batch.commit();
  // };

  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
      const {title, items} = doc.data();

      return{
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    });

    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;