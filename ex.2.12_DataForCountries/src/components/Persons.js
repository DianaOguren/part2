import React from 'react'

const Persons = (props) => {
  let personsFilter = props.countries.filter(person => (person.name.common.toLowerCase().includes(props.filterValue.toLowerCase())));
  if (personsFilter.length > 10){
    return (
    <p>Too many matches, specify another filter</p>
  )} else if (personsFilter.length === 1) {
    return (
      <div>
    <h1>{personsFilter[0].name.common}</h1>
    <p>Capital: {personsFilter[0].capital}</p>
    <p>Population: {personsFilter[0].population}</p>
    <h2>languages</h2>
    
    {Object.keys(personsFilter[0].languages).map((key, i) => (
            <li>{personsFilter[0].languages[key]}</li>
         
        ))}
      <br></br>
      <div><img src={personsFilter[0].flags.png} alt="logo"></img></div>

    </div>
      

    )} else if (((personsFilter.length < 10) || (personsFilter.length = 10))){
    return (
    <ul>
        {personsFilter.map(person => 
            <li key = {person.name.common}>{person.name.common}</li>
        )}
      </ul>
  )
}

  /* if (personsFilter.length > 10){
    return (
    <p>Too many matches, specify another filter</p>
  )} else if (((personsFilter.length < 10) || (personsFilter.length = 10)) && (personsFilter.length > 1)){
      return (
      <ul>
          {personsFilter.map(person => 
              <li key = {person.name.common}>{person.name.common}</li>
          )}
        </ul>
    )
  } else if (personsFilter.length === 1) {
    return (
    <h1>{personsFilter[0].name.common}</h1>

    )} */
  
};

export default Persons;