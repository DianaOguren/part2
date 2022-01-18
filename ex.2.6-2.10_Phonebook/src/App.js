import React, { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = (props) => {
  const [persons, setPersons] = useState(props.name) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilter] = useState('')
 
  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    }
    
    if(persons.some(person => person.name === nameObject.name)){
      window.alert(`${nameObject.name} is already added to phonebook`);
    } else {
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
  }

  
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  
  
  const handlefilterChange = (event) => {
    setFilter(event.target.value);
  };



  return (
    <div>
      <h2>Phonebook</h2>
      <Filter  value={filterValue}
          onChange={handlefilterChange}/>
      <PersonForm onSubmit={addName} valueName={newName} onChangeName={handleNameChange} valueNumber={newNumber} onChangeNumber={handleNumberChange}/>

      <h2>Numbers</h2>
      <Persons persons = {persons} filterValue = {filterValue}/>
    </div>
  )
}

export default App;