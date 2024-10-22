import React, { useState } from 'react';

function PetProfileForm({ addPet }) {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [photo, setPhoto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPet({ name, breed, age, photo });
    setName('');
    setBreed('');
    setAge('');
    setPhoto('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Breed:
        <input value={breed} onChange={(e) => setBreed(e.target.value)} required />
      </label>
      <label>
        Age:
        <input value={age} onChange={(e) => setAge(e.target.value)} required />
      </label>
      <label>
        Photo URL:
        <input value={photo} onChange={(e) => setPhoto(e.target.value)} />
      </label>
      <button type="submit">Add Pet</button>
    </form>
  );
}

export default PetProfileForm;
