import React from 'react';

function ActivityLog({ activities }) {
  return (
    <div>
      {activities.map((activity, index) => (
        <div key={index}>
          <p>{activity.activity} on {activity.date}</p>
        </div>
      ))}
    </div>
  );
}

export default ActivityLog;
