import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const students = [
    { id: 'STU001', name: 'Kate Johnson' },
    { id: 'STU002', name: 'Jim Carter' },
    { id: 'STU003', name: 'Angelo Diaz' },
    { id: 'STU004', name: 'Shang Lee' },
    { id: 'STU005', name: 'Billie Eilish' },
    { id: 'STU006', name: 'Alex Turner' }
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Student List</h2>
        <div className="space-y-3">
          {students.map((student) => (
            <div
              key={student.id}
              className="flex justify-between items-center p-3 bg-gray-50 rounded-md shadow-sm border border-gray-300"
            >
              <p className="text-sm font-medium">{student.name}</p>
              <button
                onClick={() => navigate(`/students/${student.id}`)}
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                View <ChevronRight className="ml-1 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;