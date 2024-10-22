import React, { useState, useEffect } from 'react';
import ActivityForm from './ActivityForm'; // Form to log activities
import ActivityLog from './ActivityLog'; // Component to display logged activities

function Activity() {
  const [activities, setActivities] = useState([]);
  
  // Load activities from localStorage on component mount
  useEffect(() => {
    const savedActivities = JSON.parse(localStorage.getItem('activities')) || [];
    setActivities(savedActivities);
  }, []);

  // Function to add a new activity
  const addActivity = (newActivity) => {
    const updatedActivities = [...activities, newActivity];
    setActivities(updatedActivities);
    localStorage.setItem('activities', JSON.stringify(updatedActivities));
  };

  return (
    <div>
      <h2>Pet Activity Tracker</h2>
      <ActivityForm addActivity={addActivity} />
      <ActivityLog activities={activities} />
    </div>
  );
}

export default Activity;
