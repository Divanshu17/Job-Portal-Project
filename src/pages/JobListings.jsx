import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function JobListings() {
  const [searchTerm, setSearchTerm] = useState('')
  
  // Mock job data
  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'Tech Corp',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $150k',
    },
    {
      id: 2,
      title: 'Backend Engineer',
      company: 'StartupX',
      location: 'Remote',
      type: 'Full-time',
      salary: '$100k - $130k',
    },

    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'Tech Corp',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $150k',
    },
    // Add more mock jobs as needed
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50">
      <div className="mb-8">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img className="h-12 w-12 rounded-full" src={`https://via.placeholder.com/150?text=${job.company.charAt(0)}`} alt={job.company} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                <p className="text-gray-600">{job.company}</p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-gray-500 flex items-center">
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6v1.586l-.293.293a1 1 0 000 1.414l6 6a1 1 0 001.414 0l6-6a1 1 0 000-1.414l-.293-.293V8a6 6 0 00-6-6zM8 8a2 2 0 114 0v2h2a4.002 4.002 0 00-7.874.724l-.126-.126V8z" /></svg>
                {job.location}
              </p>
              <p className="text-sm text-gray-500 flex items-center">
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6v1.586l-.293.293a1 1 0 000 1.414l6 6a1 1 0 001.414 0l6-6a1 1 0 000-1.414l-.293-.293V8a6 6 0 00-6-6zM8 8a2 2 0 114 0v2h2a4.002 4.002 0 00-7.874.724l-.126-.126V8z" /></svg>
                {job.type}
              </p>
              <p className="text-sm text-gray-500 flex items-center">
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6v1.586l-.293.293a1 1 0 000 1.414l6 6a1 1 0 001.414 0l6-6a1 1 0 000-1.414l-.293-.293V8a6 6 0 00-6-6zM8 8a2 2 0 114 0v2h2a4.002 4.002 0 00-7.874.724l-.126-.126V8z" /></svg>
                {job.salary}
              </p>
            </div>
            <div className="mt-6">
              <Link
                to={`/jobs/${job.id}/apply`}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Apply Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default JobListings





// <Link
//                 to={`/jobs/${job.id}/apply`}
//                 className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//               >
//                 Apply Now
//               </Link>