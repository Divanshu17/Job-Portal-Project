import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

function AdminRoute() {
  const { isAuthenticated, isAdmin } = useSelector((state) => state.auth)

  return isAuthenticated && isAdmin ? <Outlet /> : <Navigate to="/admin/login" />
}

export default AdminRoute