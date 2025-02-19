import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  isAuthenticated: false,
  isAdmin: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
      state.isAuthenticated = !!action.payload
      state.isAdmin = action.payload?.role === 'admin'
    },
    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
      state.isAdmin = false
    },
  },
})

export const { setUser, logout } = authSlice.actions
export default authSlice.reducer