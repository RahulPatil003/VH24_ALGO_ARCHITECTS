import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Label } from '../../components/ui/Label';
import { Mail, Lock, User, Phone } from 'lucide-react';

const DonorSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form data submission to the backend here
    // Make API call to submit data (e.g., fetch or axios)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Welcome to DonateConnect
        </h1>
        <div className="flex mb-6">
          <label htmlFor="" className="text-xl font-semibold">
            Signup
          </label>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name Field */}
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <div className="relative">
              <Input
                id="fullName"
                type="text"
                {...register('fullName', { required: 'Full Name is required' })}
                className="pl-10"
              />
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              {errors.fullName && (
                <p className="text-red-500 text-sm">{errors.fullName.message}</p>
              )}
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address',
                  },
                })}
                className="pl-10"
              />
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Phone Number Field */}
          <div className="space-y-2">
            <Label htmlFor="phNo">Phone Number</Label>
            <div className="relative">
              <Input
                id="phNo"
                type="number"
                {...register('phNo', {
                  required: 'Phone Number is required',
                  minLength: {
                    value: 10,
                    message: 'Phone Number must be at least 10 digits',
                  },
                  maxLength: {
                    value: 15,
                    message: 'Phone Number must not exceed 15 digits',
                  },
                })}
                className="pl-10"
              />
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              {errors.phNo && (
                <p className="text-red-500 text-sm">{errors.phNo.message}</p>
              )}
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type="password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
                className="pl-10"
              />
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>
          </div>

          {/* Location Fields */}
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <div className="relative">
              <Input
                id="address"
                type="text"
                {...register('location.address', { required: 'Address is required' })}
                className="pl-10"
              />
              {errors.location?.address && (
                <p className="text-red-500 text-sm">{errors.location.address.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="pincode">Pincode</Label>
            <div className="relative">
              <Input
                id="pincode"
                type="number"
                {...register('location.pincode', {
                  required: 'Pincode is required',
                  minLength: {
                    value: 5,
                    message: 'Pincode must be at least 5 digits',
                  },
                  maxLength: {
                    value: 6,
                    message: 'Pincode must not exceed 6 digits',
                  },
                })}
                className="pl-10"
              />
              {errors.location?.pincode && (
                <p className="text-red-500 text-sm">{errors.location.pincode.message}</p>
              )}
            </div>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default DonorSignup;
