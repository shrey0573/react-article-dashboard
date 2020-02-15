import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAF5O9CLycEcF05YJ_FBmoJpWT1r2I3m04",
    authDomain: "writer-dashboard-710ff.firebaseapp.com",
    databaseURL: "https://writer-dashboard-710ff.firebaseio.com",
    projectId: "writer-dashboard-710ff",
    storageBucket: "writer-dashboard-710ff.appspot.com",
    messagingSenderId: "615207886277",
    appId: "1:615207886277:web:b0e80b9b60e2fe2849bfac"
};
const fire = firebase.initializeApp(config);
export default fire;