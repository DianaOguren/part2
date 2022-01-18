import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import axios from 'axios'


const App = () => {
  const [countries, setPersons] = useState([])
  const [filterValue, setFilter] = useState('')
 
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

    
  const handlefilterChange = (event) => {
    setFilter(event.target.value);
  };



  return (
    <div>
      <Filter  value={filterValue}
          onChange={handlefilterChange}/>
          
      <Persons countries = {countries} filterValue = {filterValue}/>
    </div>
  )
}

export default App;