import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/authSlice';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faPhone,
  faLock,
  faQuestionCircle,
  faVenusMars,
} from '@fortawesome/free-solid-svg-icons';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    gender: 'male',
    securityQuestion: '',
    answer: '',
    role: 'employee',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const mockUser = {
        id: 1,
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
      };
      dispatch(setUser(mockUser));
      navigate('/verify-email');
      toast.success('Registration successful!');
    } catch (error) {
      toast.error(error.message || 'Registration failed');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
      <div className="flex w-full max-w-6xl shadow-lg rounded-lg overflow-hidden bg-white">
        {/* Left Side */}
        <div className="hidden lg:flex flex-col w-1/3 items-center justify-center bg-blue-600 p-8 relative">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-white mb-4">Welcome</h2>
            <p className="text-lg text-white mb-8 text-center">
              You are 30 seconds away from earning your own money!
            </p>
            <Link
              to="/login"
              className="mt-4 inline-block px-6 py-3 text-blue-600 bg-white rounded-lg font-semibold transition hover:bg-gray-100"
            >
              Login
            </Link>
          </div>
          {/* Illustration */}
          {/* <img
            src="https://pixabay.com/vectors/four-dimensional-structure-figure-8986442/"
            alt="Illustration"
            className="w-full h-auto mt-8"
          /> */}
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-2/3 p-8">
          <div className="flex justify-end space-x-4 mb-6">
            <button
              onClick={() => setFormData({ ...formData, role: 'employee' })}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                formData.role === 'employee'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Employee
            </button>
            <button
              onClick={() => setFormData({ ...formData, role: 'hirer' })}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                formData.role === 'hirer'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Hirer
            </button>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Apply as a {formData.role === 'employee' ? 'Employee' : 'Hirer'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <FontAwesomeIcon
                  icon={faUser}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <FontAwesomeIcon
                  icon={faUser}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <FontAwesomeIcon
                  icon={faLock}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password *"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <FontAwesomeIcon
                  icon={faLock}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password *"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <FontAwesomeIcon
                  icon={faQuestionCircle}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <select
                  name="securityQuestion"
                  value={formData.securityQuestion}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select your Security Question</option>
                  <option value="pet">What is your pet's name?</option>
                  <option value="school">What is your first school's name?</option>
                </select>
              </div>
              <div className="relative">
                <FontAwesomeIcon
                  icon={faQuestionCircle}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  name="answer"
                  placeholder="Enter Your Answer *"
                  value={formData.answer}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="mr-4">
                <FontAwesomeIcon
                  icon={faVenusMars}
                  className="mr-2 text-gray-400"
                />
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Female
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;