import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import SuccessNotification from './components/SuccessNotification'
import ErrorNotification from './components/ErrorNotification'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilter] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialNames => {
        setPersons(initialNames)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    }
    
    if (persons.some(person => person.name === nameObject.name)){
      if (window.confirm(`${nameObject.name} is already added to phonebook, replace the old number with a new one?`)){
        const existedperson = persons.find(person => person.name === nameObject.name)
        const changedPerson = { ...existedperson, number: nameObject.number }
        personService
          .update(changedPerson.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson)
            )
            setSuccessMessage(`Number of '${changedPerson.name}' is updated`)
            setTimeout(() => {
              setSuccessMessage(null)
            }, 5000)
          
          
      })
      }
    } else {
      setPersons(persons.concat(nameObject))
      setSuccessMessage(`'${nameObject.name}' is added to the phonebook`)
      setTimeout(() => {
        setSuccessMessage(null)
      }, 5000)
      setNewName('')
      setNewNumber('')

      personService
      .create(nameObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      })
    
  }};

  
  
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  
  
  const handlefilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleDelete = person => {
    personService
    .remove(person)
    .catch(error => {
      setErrorMessage(`Name'${person.name}' was already deleted from phonebook`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
        setPersons(persons.filter(n => n.id !== person.id))
      })
    .then(response => {
      window.confirm(`Delete ${person.name}?`);
      personService
      .getAll()
      .then(initialNames => {
        setPersons(initialNames)
      })
    });
    
  } 
  return (
    <div>
      <h2>Phonebook</h2>
      <SuccessNotification message={successMessage}/>
      <ErrorNotification message={errorMessage}/>
      <Filter  value={filterValue}
          onChange={handlefilterChange}/>
      <PersonForm onSubmit={addName} valueName={newName} onChangeName={handleNameChange} valueNumber={newNumber} onChangeNumber={handleNumberChange}/>

      <h2>Numbers</h2>
      <Persons persons = {persons} filterValue = {filterValue} onDelete ={handleDelete}/>
    </div>
  )
}

export default App;