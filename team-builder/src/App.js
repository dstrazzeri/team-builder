import './App.css';
import React, { useState } from 'react';
import PersonForm from './PersonForm';
import Person from './Person';

const initialFormValues = {
  username: '',
  email: '',
  Role: '',
}

export default function App() {
  
  const [ person, setPerson ] = useState([])

  
  const [ formValues, setFormValues ] = useState(initialFormValues) 

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue })
  }

  const submitForm = () => {
    const newPerson = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      Role: formValues.Role
    }
    setPerson(person.concat(newPerson));
    setFormValues(initialFormValues)
  }


  return (
    <div className='App'>
      <h1>Team Memebers Only</h1>

      <PersonForm
       values={formValues}
       update={updateForm}
       submit={submitForm}
      />
      {
        person.map(person => {
          return (
            <Person key={person.id} details={person} />
          )
        })
      }
    </div>
  )
}
