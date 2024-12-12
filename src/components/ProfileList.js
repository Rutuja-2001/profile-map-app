import React from "react";
import { Link } from "react-router-dom";

const profiles = [
  { id: 1, name: "John Doe", description: "Software Engineer", address: "New York" },
  { id: 2, name: "Jane Smith", description: "Designer", address: "San Francisco" },
];

const ProfileList = () => {
  return (
    <div>
      {profiles.map((profile) => (
        <div key={profile.id}>
          <h3>{profile.name}</h3>
          <p>{profile.description}</p>
          <Link to={`/profile/${profile.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ProfileList;

