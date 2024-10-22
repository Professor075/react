import React, { useState } from 'react';
import AppointmentForm from '../components/AppointmentForm';

function Appointment() {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  return (
    <div>
      <h1>Manage Appointments</h1>
      <AppointmentForm addAppointment={addAppointment} />
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            {appointment.type} on {appointment.date} at {appointment.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Appointment;
