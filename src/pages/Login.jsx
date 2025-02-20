import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/authSlice";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const mockUser = { id: 1, email, firstName: "John", lastName: "Doe" };
    dispatch(setUser(mockUser));
    navigate("/jobs");
  };

  const handleAdminLogin = () => {
    navigate("/admin/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Side - Login Form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-white p-12 shadow-xl">
        <div className="w-full max-w-md">
          <h2 className="mb-2 text-4xl font-extrabold text-gray-900">
            Welcome Back
          </h2>
          <p className="text-lg text-gray-600">Sign in to continue</p>

          {/* Social Login */}
          <div className="mt-6 flex justify-center space-x-4">
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700">
              <FaFacebookF size={20} />
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 shadow-md transition hover:bg-gray-200">
              <FcGoogle size={20} />
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white transition hover:bg-blue-600">
              <FaLinkedinIn size={20} />
            </button>
          </div>

          <div className="my-6 flex items-center">
            <hr className="flex-grow border-gray-300" />
            <span className="px-3 text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Login Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
         
            <div className="relative">
              <FaUser className="absolute left-4 top-3 text-gray-500" size={18} />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pl-12 pr-4 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="relative">
              <FaLock className="absolute left-4 top-3 text-gray-500" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pl-12 pr-12 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-gray-500"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>

            <div className="text-right">
              <Link to="/forgot-password" className="text-blue-500 hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-3 text-lg font-semibold text-white shadow-md transition duration-300 hover:bg-blue-700"
            >
              Sign In
            </button>

            <button
              type="button"
              onClick={handleAdminLogin}
              className="mt-2 w-full rounded-lg border border-gray-600 bg-white py-2 text-sm text-gray-700 shadow-sm transition hover:bg-gray-700 hover:text-white"
            >
              Login as Admin
            </button>
          </form>
        </div>
      </div>

      <div className="hidden lg:flex w-1/2 bg-gradient-to-r from-gray-900 to-gray-800 p-12 text-white items-center justify-center shadow-xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold">New Here?</h2>
          <p className="mt-4 text-lg opacity-80">
            Sign up and explore new opportunities today!
          </p>
          <Link
            to="/register"
            className="mt-6 inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-gray-900 shadow-md transition hover:bg-gray-200"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
