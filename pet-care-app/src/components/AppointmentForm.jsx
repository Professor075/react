import React, { useState } from 'react';

function AppointmentForm({ addAppointment }) {
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment({ type, date, time });
    setType('');
    setDate('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Appointment Type:
        <input value={type} onChange={(e) => setType(e.target.value)} required />
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </label>
      <label>
        Time:
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      </label>
      <button type="submit">Add Appointment</button>
    </form>
  );
}

export default AppointmentForm;
