// import React, { useState } from 'react';

// const AddPet = ({ addPet }) => {
//   const [petName, setPetName] = useState('');
//   const [petBreed, setPetBreed] = useState('');
//   const [petAge, setPetAge] = useState('');
//   const [petPhoto, setPetPhoto] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newPet = { name: petName, breed: petBreed, age: petAge, photo: petPhoto };
//     addPet(newPet);
//     setPetName('');
//     setPetBreed('');
//     setPetAge('');
//     setPetPhoto(null);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded bg-gray-100">
//       <h2 className="text-xl font-semibold">Add Pet</h2>
//       <input
//         type="text"
//         value={petName}
//         onChange={(e) => setPetName(e.target.value)}
//         placeholder="Pet Name"
//         required
//         className="input"
//       />
//       <input
//         type="text"
//         value={petBreed}
//         onChange={(e) => setPetBreed(e.target.value)}
//         placeholder="Pet Breed"
//         required
//         className="input"
//       />
//       <input
//         type="number"
//         value={petAge}
//         onChange={(e) => setPetAge(e.target.value)}
//         placeholder="Pet Age"
//         required
//         className="input"
//       />
//       <input
//         type="file"
//         onChange={(e) => setPetPhoto(e.target.files[0])}
//         className="input"
//       />
//       <button type="submit" className="btn">Save Pet</button>
//     </form>
//   );
// };

// export default AddPet;



import { useState, useEffect } from 'react';
import axios from 'axios';

const AddPet = ({ addPet }) => {
  const [petName, setPetName] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [petAge, setPetAge] = useState('');
  const [petPhoto, setPetPhoto] = useState(null);

  const handleFileChange = (e) => {
    setPetPhoto(e.target.files[0]); // Store the selected file in state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', petName);
    formData.append('breed', petBreed);
    formData.append('age', petAge);
    formData.append('photo', petPhoto); // Append the file to the form data

    try {
      const response = await axios.post('http://localhost:5000/pets', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Pet added:', response.data);
      addPet(); // Refresh the pet list or update state as needed
    } catch (error) {
      console.error('Error adding pet:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Pet Name:</label>
        <input
          type="text"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Breed:</label>
        <input
          type="text"
          value={petBreed}
          onChange={(e) => setPetBreed(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Age:</label>
        <input
          type="number"
          value={petAge}
          onChange={(e) => setPetAge(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Upload Photo:</label>
        <input type="file" onChange={handleFileChange} required />
      </div>

      <button type="submit">Add Pet</button>
    </form>
  );
};

export default AddPet;
