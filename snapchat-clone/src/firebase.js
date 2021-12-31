import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCJMQTMHgviq5HoxlMpEtfKidl13AozfoA",
    authDomain: "snapchart-clone.firebaseapp.com",
    projectId: "snapchart-clone",
    storageBucket: "snapchart-clone.appspot.com",
    messagingSenderId: "350647630234",
    appId: "1:350647630234:web:5609c7cc9f44fa78b2e223"
  };


  const firebaseApp = firebase.initilizeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {db , auth , storage , provider};
  