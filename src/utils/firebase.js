import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyD-oDoFL6qw7lyYRI5IlOJIowck4oMOeN8",
    authDomain: "clone-7bb9e.firebaseapp.com",
    projectId: "clone-7bb9e",
    storageBucket: "clone-7bb9e.appspot.com",
    messagingSenderId: "928105628750",
    appId: "1:928105628750:web:bc7ba231f963c52172af1f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
export {db, auth};
