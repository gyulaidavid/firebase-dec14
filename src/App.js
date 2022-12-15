import './App.css';
import React,  {useEffect, useState} from 'react'
import Person from './components/Person';

function App() {

const[people, setPeople] = useState([])

useEffect(() => {
  fetch('https://swapi.dev/api/people')
  .then(res => res.json())
  .then((data) => {
    setPeople(data.results)
    console.log(data.results);
  })
}, [])

  return (
    <div className="App">
    {people.map((person, i) => <Person key={i} name={person.name} height={person.height} mass={person.mass}/>)}
    </div>
  );
}
//https://swapi.dev/api/people
//https://hackernoon.com/how-to-deploy-a-react-application-with-firebase-hosting-p92m37b7
export default App;
