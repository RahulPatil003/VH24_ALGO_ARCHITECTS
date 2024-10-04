import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Label } from '../components/ui/Label'
import { Mail, Lock, User } from 'lucide-react'
import { useNavigate, Link } from 'react-router-dom'

export default function Signup() {
  const [userType, setUserType] = useState(''); // To store the selected user type
  const navigate = useNavigate();

  const handleNextStep = () => {
      if (!userType) {
          alert('Please select a user type');
          return;
      }
      // Navigate to the respective signup form based on user type
      if (userType === 'donor') {
          navigate('/donor');
      } else if (userType === 'institute') {
          navigate('/institute');
      } else if (userType === 'supplier') {
          navigate('/supplier');
      }
  };

  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                  Welcome to DonorNet
              </h2>
              <h2 className="text-xl font-semibold mb-4 text-center">Select User Type</h2>
              <div className="space-y-4 p-4">
                  <div className='flex justify-evenly '>
                      <Label>
                          <input
                              type="radio"
                              value="donor"
                              checked={userType === 'donor'}
                              onChange={(e) => setUserType(e.target.value)}
                          />
                          Donor
                      </Label>
                      <Label>
                          <input
                              type="radio"
                              value="institute"
                              checked={userType === 'institute'}
                              onChange={(e) => setUserType(e.target.value)}
                          />
                          Institute
                      </Label>
                      <Label>
                          <input
                              type="radio"
                              value="supplier"
                              checked={userType === 'supplier'}
                              onChange={(e) => setUserType(e.target.value)}
                          />
                          Supplier
                      </Label>
                  </div>
                  <Button onClick={handleNextStep} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Next
                  </Button>
              </div>
          </div>
      </div>
  );
}
