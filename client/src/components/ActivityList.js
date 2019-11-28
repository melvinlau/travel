import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ActivityListItem from './ActivityListItem';

function ActivityList({ trip, updateTrip }) {

  const [activities, setActivities] = useState(['skiing', 'hiking', 'surfing']);
  const [selectedActivities, setSelectedActivities] = useState([]);

  const selectActivity = (activity) => {
    setSelectedActivities([...selectedActivities, activity]);
  }

  const deselectActivity = (index) => {
    const newSelectedActivities = [...selectedActivities];
    newSelectedActivities.splice(index, 1);
    setSelectedActivities(newSelectedActivities);
  }

  return (
    <div>
      <h1>Things I'll be doing in {trip.destination}</h1>
      {
        activities.map((activity, index) => {
          return (
            <ActivityListItem
              key={index}
              id={index}
              name={activity}
              select={selectActivity}
              deselect={deselectActivity}
            />
          )
        })
      }
      <Link to="/travelist">
        <button className="get-list-button">
          Generate a Travelist!
        </button>
      </Link>
    </div>
  );
}

export default ActivityList;
