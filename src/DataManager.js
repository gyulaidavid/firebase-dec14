import { initializeApp } from "firebase/app";
import { getFirestore, addDoc,  collection, getDocs } from "firebase/firestore";
 //read data https://firebase.google.com/docs/firestore/quickstart#web-version-9_1

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

export const addPerson = async(name, height, mass) => { //https://firebase.google.com/docs/firestore/quickstart#add_data
    try {
        const docRef = await addDoc(collection(db, "people"), {
         name, height, mass //ha a változó/paramtéter neve megegyezik a kulcs nevével, kakor nem kell kiírni a kulcsérték párokat
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}
