import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import './App.css';

// Importing pages and components
import Home from './pages/Home';
import ProfileView from './pages/ProfileView';
import AdminPanel from './pages/AdminPanel';
import ProfileDetails from './components/ProfileDetails';
import ProfileList from './components/ProfileList';
import Map from './components/Map';
import ErrorPage from './pages/ErrorPage';  // Import the ErrorPage

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for Home page */}
          <Route path="/" element={<Home />} />
          {/* Route for Profile page */}
          <Route path="/profile/:id" element={<ProfileView />} />
          {/* Route for Admin panel */}
          <Route path="/admin" element={<AdminPanel />} />
          {/* Route for ProfileDetails (example) */}
          <Route path="/profile-details" element={<ProfileDetails />} />
          {/* Route for ProfileList (example) */}
          <Route path="/profile-list" element={<ProfileList />} />
          {/* Route for Map (example) */}
          <Route path="/map" element={<Map />} />
          
          {/* Error route for unmatched paths */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
