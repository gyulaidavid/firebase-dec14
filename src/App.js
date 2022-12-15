import './App.css';
import React,  {useEffect, useState} from 'react'
import Person from './components/Person';
import { getPeople } from './DataManager';

function App() {

const[people, setPeople] = useState([])

useEffect(() => {
  getPeople() //nem vár paramétert
  .then((peopleData)=> {
    setPeople(peopleData)
  })
  //setPeople(peopleData) // ez is jó egy lépésben: setPeople(getPeople())

  //régi megoldás firebase előtt
  // fetch('https://swapi.dev/api/people')
  // .then(res => res.json())
  // .then((data) => {
  //   setPeople(data.results)
  //   console.log(data.results);
  // })
}, [])

  return (
    <div className="App">
    {people.map((person, i) => <Person key={i} name={person.name} height={person.height} mass={person.mass}/>)}
    </div>
  );
}
//https://swapi.dev/api/people
//https://hackernoon.com/how-to-deploy-a-react-application-with-firebase-hosting-p92m37b7
//https://firebase.google.com/docs/firestore/quickstart#web-version-9
export default App;
