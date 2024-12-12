import React from 'react';

const ProfileDetails = ({ profile }) => {
  return (
    <div>
      <h1>{profile.name}</h1>
      <p>{profile.details}</p>
    </div>
  );
};

export default ProfileDetails;
