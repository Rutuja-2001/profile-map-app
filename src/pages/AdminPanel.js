import React, { useState } from "react";

const AdminPanel = () => {
  const [profiles, setProfiles] = useState([]);

  const addProfile = () => {
    const newProfile = { id: profiles.length + 1, name: "", description: "", address: "" };
    setProfiles([...profiles, newProfile]);
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <button onClick={addProfile}>Add Profile</button>
      {profiles.map((profile) => (
        <div key={profile.id}>
          <input
            placeholder="Name"
            value={profile.name}
            onChange={(e) => (profile.name = e.target.value)}
          />
          {/* Add similar fields for description and address */}
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;
