import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Label } from '../components/ui/Label'
import { Mail, Lock, User } from 'lucide-react'
import { useNavigate, Link } from 'react-router-dom'

export default function Signup() {
    const [step, setStep] = useState(1); // Step control (1 for user type, 2 for sign-up form)
    const [userType, setUserType] = useState(''); // To store the selected user type
    const navigate = useNavigate()
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log('Form submitted');
    };
  
    const handleNextStep = () => {
      if (!userType) {
        alert('Please select a user type');
        return;
      }
      setStep(2);
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          {step === 1 ? (
            <div>
              {/* Step 1: User type selection */}
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
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Step 2: Registration form */}
              <div className="flex mb-6 justify-center">
                <Label className='text-xl font-bold text-gray-800'>Signup</Label>
              </div>
  
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <Input id="name" type="text" required className="pl-10" />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>
  
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Input id="email" type="email" required className="pl-10" />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>
  
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input id="password" type="password" required className="pl-10" />
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>
                
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Sign Up
              </Button>
            </form>
          )}
        </div>
      </div>
    );
  }
