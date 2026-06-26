import React from 'react'

function StudentProfile({ student }) {
  if (!student) return null

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white rounded-lg shadow-md border border-gray-200 text-gray-800">
      <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">Submitted Student Details</h2>
      <div className="space-y-2">
        <p className="text-sm"><strong className="font-semibold text-gray-600">Name:</strong> {student.name}</p>
        <p className="text-sm"><strong className="font-semibold text-gray-600">Age:</strong> {student.age}</p>
        <p className="text-sm"><strong className="font-semibold text-gray-600">Course:</strong> {student.course}</p>
        <p className="text-sm"><strong className="font-semibold text-gray-600">City:</strong> {student.city}</p>
      </div>
    </div>
  )
}

export default StudentProfile
