import React from 'react';
import { Clock, MapPin, ChevronRight, Users } from 'lucide-react';

const Dashboard = () => {
  const friends = [
    { name: 'Kate', color: 'bg-blue-100' },
    { name: 'Jim', color: 'bg-yellow-100' },
    { name: 'Angelo', color: 'bg-orange-100' },
    { name: 'Shang', color: 'bg-purple-100' },
    { name: 'Billie', color: 'bg-pink-100' },
    { name: 'Alex', color: 'bg-green-100' }
  ];

  const todaysClasses = [
    { name: 'Basic Italian', time: '12:00 - 13:00', color: 'border-red-400' },
    { name: 'Advanced English', time: '10:00 - 11:30', color: 'border-gray-400' },
    { name: 'Speaking Spanish', time: '13:00 - 14:00', color: 'border-purple-400' },
    { name: 'History of Asia', time: '14:00 - 15:30', color: 'border-green-400' },
    { name: 'USA Geography', time: '15:00 - 15:30', color: 'border-red-400' }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="bg-black p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-4">Transactions</h2>
            <div className="space-y-3">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-3" defaultChecked />
                    <div>
                      <p className="text-sm font-medium">Order #34786</p>
                      <p className="text-xs text-gray-500">May 15, 2020</p>
                    </div>
                  </div>
                  <button className="text-gray-400">•••</button>
                </div>
              ))}
              <button className="text-sm text-blue-600">View All</button>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-4">Friends</h2>
            <div className="grid grid-cols-3 gap-3">
              {friends.map((friend, i) => (
                <div key={i} className={`${friend.color} p-4 rounded-lg text-center`}>
                  <div className="w-8 h-8 bg-blackrounded-full mx-auto mb-2"></div>
                  <p className="text-sm">{friend.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-4">Today's lectures</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-sm">13:30-14:30</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-sm">San Francisco</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-gray-400" />
                <span className="text-sm">Everyone</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-4">Today's classes</h2>
            <div className="space-y-3">
              {todaysClasses.map((class_, i) => (
                <div key={i} className={`flex items-center justify-between p-3 border-l-4 ${class_.color} bg-gray-50 rounded`}>
                  <div>
                    <p className="font-medium">{class_.name}</p>
                    <p className="text-sm text-gray-500">{class_.time}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-4">Learning Curve</h2>
            <div className="h-48 flex items-end space-x-2">
              {[30, 45, 25, 60, 75, 45, 65, 45, 60, 40, 50].map((height, i) => (
                <div key={i} className="flex-1">
                  <div 
                    className="bg-blue-100 rounded-t" 
                    style={{ height: `${height}%` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-4">Statistics</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-2xl font-bold">15,980</h3>
                  <p className="text-sm text-gray-500">Questions</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">4,324</h3>
                  <p className="text-sm text-gray-500">Answers</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span>Safe Plus Status</span>
                    <span className="font-semibold">80/100</span>
                  </div>
                  <div className="w-full bg-orange-200 h-2 rounded-full mt-2">
                    <div className="w-4/5 bg-orange-500 h-2 rounded-full"></div>
                  </div>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span>Best Average</span>
                    <span className="font-semibold">70/100</span>
                  </div>
                  <div className="w-full bg-blue-200 h-2 rounded-full mt-2">
                    <div className="w-3/4 bg-blue-500 h-2 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;