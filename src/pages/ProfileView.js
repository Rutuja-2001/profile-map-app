import React, { useState, useEffect } from "react"; 
import { useParams } from "react-router-dom";
import Map from "../components/Map";

const profiles = [
  { id: 1, name: "John Doe", description: "Software Engineer", address: "New York" },
  { id: 2, name: "Jane Smith", description: "Designer", address: "San Francisco" },
];

const ProfileView = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulating an API call with a delay
    const fetchProfile = async () => {
      try {
        setLoading(true);
        // Simulate a delay for fetching data
        const profileData = profiles.find((p) => p.id === parseInt(id));
        if (!profileData) {
          throw new Error("Profile not found");
        }
        setProfile(profileData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  // Show loading or error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // If profile is found, render the profile details and map
  return (
    <div>
      <h1>{profile.name}</h1>
      <p>{profile.description}</p>
      <Map address={profile.address} />
    </div>
  );
};

export default ProfileView;
