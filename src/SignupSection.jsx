import React from 'react';
import './SignupSection.css'; 

const SignupSection = () => {
  return (
      <div className="signup-form">
      <h2>Sign Up for Our Daily Insider                 </h2>
        <input type="email" placeholder="Enter your email" />
        <button>Sign Up</button>
      </div>
  );
};

export default SignupSection;
