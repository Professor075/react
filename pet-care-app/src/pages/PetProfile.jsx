import React, { useState } from 'react';
import PetProfileForm from '../components/PetProfileForm';
import PetProfileList from '../components/PetProfileList';

function PetProfile() {
  const [pets, setPets] = useState([]);

  const addPet = (pet) => {
    setPets([...pets, pet]);
  };

  const deletePet = (index) => {
    const updatedPets = pets.filter((_, i) => i !== index);
    setPets(updatedPets);
  };

  return (
    <div>
      <h1>Manage Pet Profiles</h1>
      <PetProfileForm addPet={addPet} />
      <PetProfileList pets={pets} deletePet={deletePet} />
    </div>
  );
}

export default PetProfile;
