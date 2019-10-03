import * as firebase from 'firebase'


 var firebaseConfig = {
    apiKey: "AIzaSyDPbC4FFO-hlH7Bu2xuJHSPwuFsxAxgH_M",
    authDomain: "codenesta.firebaseapp.com",
    databaseURL: "https://codenesta.firebaseio.com",
    projectId: "codenesta",
    storageBucket: "",
    messagingSenderId: "350938905714",
    appId: "1:350938905714:web:6bc193a990ffd4e8ef96eb",
    measurementId: "G-6PWTZ0D3S1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase