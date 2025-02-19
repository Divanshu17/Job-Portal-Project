import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import VerifyEmail from './pages/VerifyEmail'
import JobListings from './pages/JobListings'
import JobApplication from './pages/JobApplication'
import Profile from './pages/Profile'
import AdminLogin from './pages/admin/Login'
import AdminDashboard from './pages/admin/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import AdminRoute from './components/AdminRoute'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="verify-email" element={<VerifyEmail />} />
        
        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="jobs" element={<JobListings />} />
          <Route path="jobs/:id/apply" element={<JobApplication />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Admin Routes */}
        <Route path="admin">
          <Route path="login" element={<AdminLogin />} />
          <Route element={<AdminRoute />}>
            <Route path="dashboard/*" element={<AdminDashboard />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default App