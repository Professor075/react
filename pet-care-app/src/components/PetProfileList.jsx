import React from 'react';

function PetProfileList({ pets, deletePet }) {
  return (
    <div>
      {pets.map((pet, index) => (
        <div key={index}>
          <img src={pet.photo} alt={pet.name} />
          <h2>{pet.name}</h2>
          <p>{pet.breed}</p>
          <p>{pet.age} years old</p>
          <button onClick={() => deletePet(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default PetProfileList;
