import React from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/slices/authSlice'

function Dashboard() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/admin/login')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 px-4 border-b">
            <h2 className="text-xl font-semibold text-gray-800">Admin Dashboard</h2>
          </div>
          <nav className="flex-1 px-4 py-4 space-y-1">
            <Link
              to="/admin/dashboard"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Overview
            </Link>
            <Link
              to="/admin/dashboard/users"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Users
            </Link>
            <Link
              to="/admin/dashboard/jobs"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Job Listings
            </Link>
            <Link
              to="/admin/dashboard/applications"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Applications
            </Link>
          </nav>
          <div className="p-4 border-t">
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pl-64">
        <header className="bg-white shadow">
          <div className="px-4 py-4">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main className="px-4 py-4">
          <Routes>
            <Route index element={<Overview />} />
            <Route path="users" element={<Users />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="applications" element={<Applications />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

function Overview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-900">Total Users</h3>
        <p className="text-3xl font-bold text-primary mt-2">1,234</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-900">Active Jobs</h3>
        <p className="text-3xl font-bold text-primary mt-2">56</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-900">Applications</h3>
        <p className="text-3xl font-bold text-primary mt-2">892</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-900">Hired</h3>
        <p className="text-3xl font-bold text-primary mt-2">143</p>
      </div>
    </div>
  )
}

function Users() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-semibold text-gray-900">Users Management</h3>
        {/* Add user management content */}
      </div>
    </div>
  )
}

function Jobs() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-semibold text-gray-900">Job Listings Management</h3>
        {/* Add job management content */}
      </div>
    </div>
  )
}

function Applications() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-semibold text-gray-900">Applications Management</h3>
        {/* Add applications management content */}
      </div>
    </div>
  )
}

export default Dashboard