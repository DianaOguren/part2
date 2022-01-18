import React from 'react'

const Person = (props) => {
  let personsFilter = props.persons.filter(person => (person.name.toLowerCase().includes(props.filterValue.toLowerCase())));
  return (
    <ul>
        {personsFilter.map(person => 
            <li key = {person.id}>{person.name}  {person.number} <button onClick={() => props.onDelete(person)}>Delete</button></li>
        )}
      </ul>
  )
}

export default Person