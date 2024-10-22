// import React from 'react';

// const PetList = ({ pets, deletePet }) => {
//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-2">My Pets</h2>
//       {pets.length === 0 ? (
//         <p>No pets found.</p>
//       ) : (
//         <ul className="list-disc pl-5">
//           {pets.map((pet, index) => (
//             <li key={index} className="mb-2 flex items-center">
//               <img src={pet.photo ? URL.createObjectURL(pet.photo) : 'placeholder.png'} alt={pet.name} className="w-16 h-16 mr-2 rounded" />
//               <div>
//                 <h3 className="font-bold">{pet.name}</h3>
//                 <p>Breed: {pet.breed}</p>
//                 <p>Age: {pet.age}</p>
//                 <button onClick={() => deletePet(pet)} className="btn btn-danger">Delete</button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default PetList;


import { useState, useEffect } from 'react';
import axios from 'axios';

const PetList = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('http://localhost:5000/pets');
        setPets(response.data);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };

    fetchPets();
  }, []);

  return (
    <div>
      <h2>Pet List</h2>
      {pets.length > 0 ? (
        pets.map((pet) => (
          <div key={pet.id}>
            <h3>{pet.name}</h3>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age}</p>
            {pet.photo && (
              <img
                src={`data:image/jpeg;base64,${pet.photo}`} // Use the base64 string
                alt={pet.name}
                width="200"
              />
            )}
          </div>
        ))
      ) : (
        <p>No pets found</p>
      )}
    </div>
  );
};

export default PetList;
