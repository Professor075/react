import React, { useState } from 'react';

const VaccinationForm = () => {
  const [vaccineType, setVaccineType] = useState('');
  const [vaccinationDate, setVaccinationDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save vaccination record logic
    console.log(`Vaccine: ${vaccineType}, Date: ${vaccinationDate}`);
    setVaccineType('');
    setVaccinationDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded bg-gray-100">
      <h2 className="text-xl font-semibold">Add Vaccination Record</h2>
      <input
        type="text"
        value={vaccineType}
        onChange={(e) => setVaccineType(e.target.value)}
        placeholder="Vaccine Type"
        required
        className="input"
      />
      <input
        type="date"
        value={vaccinationDate}
        onChange={(e) => setVaccinationDate(e.target.value)}
        required
        className="input"
      />
      <button type="submit" className="btn">Save Vaccination</button>
    </form>
  );
};

export default VaccinationForm;
