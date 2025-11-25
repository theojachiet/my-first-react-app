import { useState } from 'react'

export default function Person() {
  const [age, setAge] = useState(100);
  const [firstName, setFirstName] = useState('John');
  const [lastName, setlastName] = useState('Cena');

  const displayedName = firstName + ' ' + lastName;

  // GOOD - Do this!
  const handleIncreaseAge = () => {
    // copy the existing person object into a new object
    // while updating the age property
    setAge(age + 1)
  };

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setlastName(e.target.value);
  }

  return (
    <>
      <h1>{displayedName}</h1>
      <h2>{age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
      <CustomInput text={firstName} onChange={handleFirstNameChange} />
      <CustomInput text={lastName} onChange={handleLastNameChange} />
    </>
  );
}

function CustomInput({ text, onChange }) {

  return (
    <input
      type="text"
      value={text}
      onChange={onChange}
    />
  );
}