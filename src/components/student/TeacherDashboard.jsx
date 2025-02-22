import React, { useState } from 'react';
import { Edit, Save, Users, BarChart, ChevronRight } from 'lucide-react';

const TeacherDashboard = () => {
  const [students, setStudents] = useState([
    { name: 'Kate', performance: 80 },
    { name: 'Jim', performance: 65 },
    { name: 'Angelo', performance: 90 },
    { name: 'Shang', performance: 75 },
    { name: 'Billie', performance: 85 },
    { name: 'Alex', performance: 70 }
  ]);

  const handlePerformanceChange = (index, value) => {
    const updatedStudents = [...students];
    updatedStudents[index].performance = value;
    setStudents(updatedStudents);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Students & Performance */}
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-4">Student Performance</h2>
            <div className="space-y-3">
              {students.map((student, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium">{student.name}</p>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={student.performance}
                    onChange={(e) => handlePerformanceChange(i, e.target.value)}
                    className="w-16 border border-gray-300 rounded p-1 text-center"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Class Stats & Reports */}
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-4">Class Statistics</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <p className="text-sm">Total Students</p>
                <p className="font-semibold">{students.length}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm">Average Performance</p>
                <p className="font-semibold">
                  {Math.round(students.reduce((sum, s) => sum + s.performance, 0) / students.length)}%
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-4">Actions</h2>
            <div className="flex space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center space-x-2">
                <Save className="w-4 h-4" /> <span>Save Changes</span>
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded flex items-center space-x-2">
                <Edit className="w-4 h-4" /> <span>Edit Settings</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
