import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCoNy8zwF_bxJ2w0k6_FcSPXssXT9kXft8",
  authDomain: "personality-test-492cf.firebaseapp.com",
  databaseURL: "https://personality-test-492cf.firebaseio.com",
  projectId: "personality-test-492cf",
  storageBucket: "personality-test-492cf.appspot.com",
  messagingSenderId: "1091589808087",
  appId: "1:1091589808087:web:ad2243040658982ce37592",
  measurementId: "G-N0DFVGZGSY"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();