import React from 'react';
import './App.css';
import Navbar from './Navbar';
import MainPage from './MainPage';
import FeaturedFreelancers from './FeaturedFreelancers';
import FeaturedCustomers from './FeaturedCustomers';
import SignupSection from './SignupSection';


function App() {
  return (
    <body>
      <Navbar />
      <MainPage />
      <FeaturedFreelancers />
      <FeaturedCustomers />
      <SignupSection />
    </body>
  );
}

export default App;
