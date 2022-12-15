import './App.css';
import React,  {useEffect, useState} from 'react'
import Person from './components/Person';
import { getPeople, addPerson } from './DataManager';

function App() {

const[people, setPeople] = useState([])
const [name, setName] = useState() //nem fontos kezdőértéket adni, most undifind, ha state !== undifind, akkor lehet használni
const [height, setHeight] = useState()
const [mass, setMass] = useState()

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

      <input onChange={(e) => {setName(e.target.value)}} type="text" placeholder='Name'/>
      <input onChange={(e) => {setHeight(e.target.value)}} type="number" placeholder='Height'/>
      <input onChange={(e) => {setMass(e.target.value)}} type="number" placeholder='Mass'/>
      <button onClick={async() => {
        await addPerson(name, height, mass)
        getPeople() //nem vár paramétert
        .then((peopleData)=> {
          setPeople(peopleData)
          
        })
      }}>SAVE</button>


    {people.map((person, i) => <Person key={i} name={person.name} height={person.height} mass={person.mass}/>)}
    </div>
  );
}
//https://swapi.dev/api/people
//https://hackernoon.com/how-to-deploy-a-react-application-with-firebase-hosting-p92m37b7
//https://firebase.google.com/docs/firestore/quickstart#web-version-9
export default App;
