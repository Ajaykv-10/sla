import { useState } from 'react'
import StudentProfile from './component/StudentProfile'

function App() {
  // Store all form values inside a single object state
  const [student, setStudent] = useState({
    name: '',
    age: '',
    course: '',
    city: ''
  })

  // State to hold the submitted student details to display below the form
  const [submittedStudent, setSubmittedStudent] = useState(null)

  // Single handleChange function for all input fields
  const handleChange = (e) => {
    const { name, value } = e.target
    setStudent((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault()
    // Set the submitted student state to show the profile details
    setSubmittedStudent({ ...student })
  }

  // Handle Reset
  const handleReset = () => {
    setStudent({
      name: '',
      age: '',
      course: '',
      city: ''
    })
    setSubmittedStudent(null)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-200 text-gray-800">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">Student Registration</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={student.name}
              onChange={handleChange}
              placeholder="Enter name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-gray-850"
            />
          </div>

          {/* Age Field */}
          <div>
            <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-1">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={student.age}
              onChange={handleChange}
              placeholder="Enter age"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-gray-850"
            />
          </div>

          {/* Course Field */}
          <div>
            <label htmlFor="course" className="block text-sm font-semibold text-gray-700 mb-1">
              Course
            </label>
            <input
              type="text"
              id="course"
              name="course"
              value={student.course}
              onChange={handleChange}
              placeholder="Enter course"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-gray-850"
            />
          </div>

          {/* City Field */}
          <div>
            <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={student.city}
              onChange={handleChange}
              placeholder="Enter city"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-gray-850"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-2">
            <button
              type="submit"
              className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition duration-205 cursor-pointer text-center"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded transition duration-205 cursor-pointer text-center"
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      {/* Display Student Profile below the form */}
      <StudentProfile student={submittedStudent} />
    </div>
  )
}

export default App
