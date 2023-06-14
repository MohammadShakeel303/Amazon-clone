import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCne77VGPFQh1He4A_0NlT0pvadiye3HQI",
  authDomain: "clone-of-28413.firebaseapp.com",
  projectId: "clone-of-28413",
  storageBucket: "clone-of-28413.appspot.com",
  messagingSenderId: "1056520126708",
  appId: "1:1056520126708:web:91ace611f5d559bb61dea1",
  measurementId: "G-26G47L4JPT"
};


  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

  export { auth };

