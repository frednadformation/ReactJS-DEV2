import React from 'react'
import Navbar from './Navbar/Navbar';
import Person from './Person';

function NameList() {
    const names = [ 'John', 'Malcolm', 'Richard', 'Toto'];
    const nameList = names.map(name => <h2>{name}</h2>);
    const persons = [
        {
          id: 1,
          name: 'Bruce',
          age: 30,
          skill: 'React'
        },
        {
          id: 2,
          name: 'Clark',
          age: 25,
          skill: 'Angular'
        },
        {
          id: 3,
          name: 'Diana',
          age: 28,
          skill: 'Vue'
        }
      ]
      const personList = 
        persons.map(person =>
          <Person key={person.id} hero = {person} color="red" />)

  return (
    <div>
    <Navbar />
        {/* <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2> */}

        {/* {nameList} */}
        {personList}

    </div>
  )
}

export default NameList