'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import loginAdminSchema from '@/schema/loginAdminSchema';
import useAuthAdminStore from '@/store/auth-store-admin';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const login = useAuthAdminStore((state) => state.login); // Get the login action from the store
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginAdminSchema),
  });

  const onSubmit = async ({ username, password }) => {
    setLoading(true);
    setErrorMessage(null);
    try {
      const response = await axios.post('http://13.229.135.53:8080/admin', {
        username,
        password,
      });

      // Validate and extract the response data
      if (response.data && response.data.result && response.data.result.admin) {
        // Store the username and password in the Zustand store
        login(response.data.result.admin.username, response.data.result.admin.password);

        // Redirect to the admin page
        router.push('/admin');
        reset(); // Optionally reset the form after successful login
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage(error.response?.data?.message || 'Gagal login karena username atau password salah');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <form onSubmit={handleSubmit(onSubmit)} className='bg-white p-8 rounded shadow-md w-full max-w-sm'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Admin Login</h2>

        {errorMessage && <div className='mb-4 text-red-500 text-sm'>{errorMessage}</div>}

        <div className='mb-4'>
          <label htmlFor='username' className='block text-sm font-medium text-gray-700'>
            Username
          </label>
          <input
            id='username'
            type='text'
            {...register('username')}
            className={`mt-1 block w-full px-3 py-2 border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
          />
          {errors.username && <p className='text-red-500 text-sm mt-1'>{errors.username.message}</p>}
        </div>

        <div className='mb-6'>
          <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
            Password
          </label>
          <input
            id='password'
            type='password'
            {...register('password')}
            className={`mt-1 block w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
          />
          {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password.message}</p>}
        </div>

        <button
          type='submit'
          className={`w-full py-2 px-4 rounded-md text-white ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}
