import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";  //read data https://firebase.google.com/docs/firestore/quickstart#web-version-9_1

const firebaseConfig = {
  apiKey: "AIzaSyBVTX_rUL3NYAujxFdJTWgdOJSRbPgLTBU",
  authDomain: "fir-starwars-ba4a6.firebaseapp.com",
  projectId: "fir-starwars-ba4a6",
  storageBucket: "fir-starwars-ba4a6.appspot.com",
  messagingSenderId: "678627113113",
  appId: "1:678627113113:web:b75b06d55be4a23fa66008",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app); // copy innen: https://firebase.google.com/docs/firestore/quickstart#web-version-9_1

export const getPeople = async() => {
    const querySnapshot = await getDocs(collection(db, "people")); //saját adatbázisnév beillesztése
    const people = []
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      people.push(doc.data())
    });
    return people
};
