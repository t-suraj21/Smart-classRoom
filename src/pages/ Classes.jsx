import React from "react";

const Classes = () => {
  // Dummy class data
  const classes = [
    { name: "Mathematics", schedule: "Mon & Wed - 10 AM", status: "upcoming" },
    { name: "Science", schedule: "Tue & Thu - 2 PM", status: "live" },
    { name: "English", schedule: "Friday - 11 AM", status: "upcoming" },
    { name: "Physics", schedule: "Monday - 4 PM", status: "live" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Your Classes</h2>

      {/* Live Classes Section */}
      <h3 className="text-xl font-semibold mb-3 text-green-600">Live Classes</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {classes.filter(cls => cls.status === "live").map((cls, index) => (
          <ClassItem key={index} name={cls.name} schedule={cls.schedule} status="live" />
        ))}
      </div>

      {/* Upcoming Classes Section */}
      <h3 className="text-xl font-semibold mt-6 mb-3 text-blue-600">Upcoming Classes</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {classes.filter(cls => cls.status === "upcoming").map((cls, index) => (
          <ClassItem key={index} name={cls.name} schedule={cls.schedule} status="upcoming" />
        ))}
      </div>
    </div>
  );
};

const ClassItem = ({ name, schedule, status }) => (
  <div className="p-5 bg-white rounded-lg shadow-md flex flex-col">
    <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
    <p className="text-gray-600">{schedule}</p>

    {/* Status Indicator */}
    {status === "live" ? (
      <span className="mt-2 inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm">
        Live Now
      </span>
    ) : (
      <span className="mt-2 inline-block bg-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm">
        Upcoming
      </span>
    )}

    {/* Join Button */}
    {status === "live" && (
      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">
        Join Class
      </button>
    )}
  </div>
);

export default Classes;