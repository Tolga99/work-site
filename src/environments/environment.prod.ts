export const environment = {
  production: true
};
// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const firebaseConfig = {

  apiKey: "AIzaSyCYdsC8i4DfE-bddMppPnddDUH-YZZRbSc",

  authDomain: "worksite17.firebaseapp.com",

  projectId: "worksite17",

  storageBucket: "worksite17.appspot.com",

  messagingSenderId: "651286171664",

  appId: "1:651286171664:web:e4df95c0f1cf52e5803a95",

  measurementId: "G-N8WX2HYJKB"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);