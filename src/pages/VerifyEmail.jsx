import React from 'react'
import { Link } from 'react-router-dom'

function VerifyEmail() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="text-center">
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Verify your email
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We've sent a verification email to your inbox. Please click the link in the email to verify your account.
          </p>
          <div className="mt-8">
            <Link
              to="/login"
              className="text-sm font-semibold text-primary hover:text-primary/90"
            >
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyEmail