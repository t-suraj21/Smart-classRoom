import React, { useState } from "react";

const AssignmentManagement = () => {
  const [assignments, setAssignments] = useState([]);
  const [newAssignment, setNewAssignment] = useState("");

  const handleAddAssignment = () => {
    if (newAssignment) {
      setAssignments([...assignments, newAssignment]);
      setNewAssignment("");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">📝 Assignments & Tests</h2>

      <input
        type="text"
        placeholder="Enter new assignment..."
        value={newAssignment}
        onChange={(e) => setNewAssignment(e.target.value)}
        className="input"
      />
      <button onClick={handleAddAssignment} className="button">Add</button>

      <ul>
        {assignments.map((assignment, index) => (
          <li key={index} className="p-3 bg-gray-200 rounded mb-2">
            {assignment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssignmentManagement;