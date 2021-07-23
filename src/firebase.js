import firebase from 'firebase';

const firebaseConfig = {
      apiKey: "AIzaSyDGoni0i28RCzL1Ey7YbSHAG75ZX5dsO3k",
      authDomain: "disneyplus-clone-3e453.firebaseapp.com",
      databaseURL: "https://disneyplus-clone-3e453-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "disneyplus-clone-3e453",
      storageBucket: "disneyplus-clone-3e453.appspot.com",
      messagingSenderId: "923725733495",
      appId: "1:923725733495:web:163e0af4bf0e0351923072",
      measurementId: "G-FV9D1B695H",
  };

  // Initialize Firebase
 const firebaseApp =  firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();
 const storage = firebase.storage();

 export { auth, provider, storage};
 export default db;