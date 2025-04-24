import React, { useState } from 'react';
import DemoResult from './DemoResult';

// Utility to format phone number as it's typed
const formatPhoneNumber = (value) => {
  if (!value) return value;
  
  // Remove all non-digits
  const phoneNumber = value.replace(/[^\d]/g, '');
  
  // Apply formatting based on length
  if (phoneNumber.length < 4) return phoneNumber;
  if (phoneNumber.length < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
};

export default function PhoneInput({ planType }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handlePhoneChange = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedPhoneNumber);
    setError('');
  };
  
  const handleNameChange = (e) => {
    setName(e.target.value);
    setError('');
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!phoneNumber || phoneNumber.length < 14) {
      setError('Please enter a valid phone number');
      return;
    }
    
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }
    
    // Store in localStorage for demo purposes
    const userData = {
      name,
      phoneNumber,
      planType,
      date: new Date().toISOString(),
    };
    
    try {
      // In a real app, this would be a server request
      localStorage.setItem('edgexpert_user', JSON.stringify(userData));
      console.log('User data saved:', userData);
      setSubmitted(true);
    } catch (err) {
      console.error('Error saving user data:', err);
      setError('An error occurred while saving your information. Please try again.');
    }
  };
  
  if (submitted) {
    return <DemoResult name={name} planType={planType} />;
  }
  
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2 text-center">Contact Information</h2>
      <p className="text-gray-600 mb-6 text-center">
        Enter your details to {planType === 'demo' ? 'try our demo' : 'complete your subscription'}
      </p>
      
      {error && (
        <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-md mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition-colors"
            placeholder="Enter your full name"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={phoneNumber}
            onChange={handlePhoneChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition-colors"
            placeholder="(555) 123-4567"
            maxLength="14"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
        >
          {planType === 'demo' ? 'Start Demo' : 'Complete Registration'}
        </button>
        
        <p className="text-xs text-gray-500 mt-4 text-center">
          By continuing, you agree to our Terms of Service and Privacy Policy.
          Your information will be used to provide the EdgExpert service and related communications.
        </p>
      </form>
    </div>
  );
}