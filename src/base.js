import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDtWSXmnBp7U0JWvvdRmA8f6OnfG8h_PcU",
  authDomain: "catch-of-the-day-will-royal.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-will-royal.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//Named export
export { firebaseApp };

//this is a default export
export default base;
