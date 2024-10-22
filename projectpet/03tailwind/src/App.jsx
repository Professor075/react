import React, { useState } from 'react';
import AddPet from './components/AddPet';
import PetList from './components/PetList';
import VaccinationForm from './components/VaccinationForm';
import Appointments from './components/Appointments';


const App = () => {
  const [pets, setPets] = useState([]);
  const [activeView, setActiveView] = useState('home');

  const addPet = (pet) => {
    setPets([...pets, pet]);
  };

  const deletePet = (petToDelete) => {
    setPets(pets.filter((pet) => pet !== petToDelete));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Pet Management App</h1>
      <nav className="mb-4">
        <button onClick={() => setActiveView('addPet')} className="btn">Add Pet</button>
        <button onClick={() => setActiveView('petList')} className="btn">View Pets</button>
        <button onClick={() => setActiveView('vaccination')} className="btn">Vaccinations</button>
        <button onClick={() => setActiveView('appointments')} className="btn">Appointments</button>
      </nav>

      {activeView === 'addPet' && <AddPet addPet={addPet} />}
      {activeView === 'petList' && <PetList pets={pets} deletePet={deletePet} />}
      {activeView === 'vaccination' && <VaccinationForm />}
      {activeView === 'appointments' && <Appointments />}
    </div>
    
  );
};

export default App;
